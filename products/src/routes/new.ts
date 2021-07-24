import express, { Request, Response}  from 'express';
import { body } from 'express-validator';
import { currentUser, requireAuth, validateRequest, NotAuthorizedError } from '@vuelaine-ecommerce/common';
import { Product } from '../models/product';

const router = express.Router();

router.post(
    '/api/products', 
    currentUser,
    requireAuth, 
    [
        body('name').not().isEmpty().withMessage('Title is required'),
        body('price').isFloat({ gt: 0 }).withMessage('Price must be greater than 0'),
        body('details').not().isEmpty().withMessage('Details is required'),
        body('productUrl').not().isEmpty().withMessage('ProductUrl is required')

    ], 
    validateRequest,
    
    async (req: Request, res: Response) => {
        if (req.currentUser!.role !== 'admin') {
            throw new NotAuthorizedError();
        }

        const { name, price, size, details, reviews, color, type, productUrl } = req.body;

        const product = Product.build({
            name,
            price,
            userId: req.currentUser!.id,
            size,
            details,
            reviews,
            color,
            type,
            productUrl,
        });
        await product.save();

        res.status(201).send(product);
    }
);

export{ router as createProductRouter }
