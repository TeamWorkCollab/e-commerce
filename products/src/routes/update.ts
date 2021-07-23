import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import {
    validateRequest,
    NotFoundError,
    requireAuth,
    NotAuthorizedError,
    CustomError,
    currentUser,
} from '@vuelaine-ecommerce/common';
import { Product } from '../models/product';

const router = express.Router();

router.put(
    '/api/products/:id', 
    requireAuth, 
    [
        body('name').not().isEmpty().withMessage('Name is required'),
        body('price').isFloat({ gt: 0 }).withMessage('Price must be provided and must be greater than 0'),
        body('details').not().isEmpty().withMessage('Details is required')
    ],
    validateRequest, 
    async (req: Request, res: Response) => {
    const product = await Product.findById(req.params.id);

    if (!product) {
        throw new NotFoundError();
    }

    // Check if user role is admin to update product
    // if (req.currentUser!.role !== 'admin') {
    //     throw new CustomError('Not authorized!')
    // }

    product.set({
        name: req.body.name,
        price: req.body.price,
        details: req.body.details,
        size: req.body.size,
        reviews: req.body.reviews,
        color: req.body.color,
        type: req.body.type
    });

    await product.save();

    res.send(product);
});

export { router as updateProductRouter };