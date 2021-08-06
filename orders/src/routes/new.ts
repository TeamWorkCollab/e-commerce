import mongoose from 'mongoose';
import express, { Request, Response } from 'express';
import { requireAuth, validateRequest, NotFoundError, OrderStatus, BadRequestError } from '@vuelaine-ecommerce/common';
import { body } from 'express-validator';
import { Product } from '../models/product';
import { Order } from '../models/order';
import { OrderCreatedPublisher } from '../events/publishers/order-created-publisher';
import { natsWrapper } from '../nats-wrapper';

const router = express.Router();

const EXPIRATION_WINDOW_SECONDS = 1 * 60;

router.post('/api/orders', requireAuth, 
    [
        body('productId')
            .not()
            .isEmpty()
            // check if id is mongo id
            .custom((input: string) => mongoose.Types.ObjectId.isValid(input))
            .withMessage('ProductId must be provided')
    ], 
    validateRequest, 
    async (req: Request, res: Response) => {
        const { productId } = req.body;
        const products = await Product.find({});
        // console.log('ALL PRODUCTS ', products)
        // find the product the user trying to order in database
        const product = await Product.findById(productId);
        if (!product) {
            throw new NotFoundError();
        }
        //console.log('PRODUCT FOUND ', product);
        // make sure this product is not reserved
        // run query to look at all orders. Find an order where the ticket is the ticket we just found 
        // and the orders status is not cancelled.
        // if we find an order from that means the product is reserved
        const isReserved = await product.isReserved();
        if (isReserved) {
            throw new BadRequestError('Product is already reserved');
        }

        // calculate an expiration date for the order
        const expiration = new Date();
        expiration.setSeconds(expiration.getSeconds() + EXPIRATION_WINDOW_SECONDS);

        // build the order and save it to the database
        const order = Order.build({
            userId: req.currentUser!.id,
            status: OrderStatus.Created,
            expiresAt: expiration,
            product
        });
        await order.save();

        // publish an event saying that order was created
        // pubish an event saying that order was created
        new OrderCreatedPublisher(natsWrapper.client).publish({
            id: order.id,
            version: order.version,
            status: order.status,
            userId: order.userId,
            expiresAt: order.expiresAt.toISOString(),
            product: {
                id: product.id,
                userId: product.userId,
                price: product.price,
                name: product.name,
                details: product.details,
                //size: product.size,
                type: product.type,
                productUrl: product.productUrl,
                //color: product.color
                //reviews: product.reviews
            }
        })

        res.status(201).send(order);
    }
);

export { router as newOrderRouter };