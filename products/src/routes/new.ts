import express, { Request, Response}  from 'express';
import { body } from 'express-validator';
import { requireAuth, validateRequest } from '@vuelaine-ecommerce/common';
import { Product } from '../models/product';

const router = express.Router();

router.post(
    '/api/products', 
    requireAuth, 
    [
        body('name').not().isEmpty().withMessage('Title is required'),
        body('price').isFloat({ gt: 0 }).withMessage('Price must be greater than 0'),
        body('details').not().isEmpty().withMessage('Details is required')
    ], 
    validateRequest,
    async (req: Request, res: Response) => {
        const { name, price, size, details, reviews, color, type } = req.body;

        const product = Product.build({
            name,
            price,
            userId: req.currentUser!.id,
            size,
            details,
            reviews,
            color,
            type,
        });
        await product.save();

        res.status(201).send(product);
    }
);

export{ router as createProductRouter }
