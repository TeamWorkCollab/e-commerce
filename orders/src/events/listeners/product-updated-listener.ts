import { Message } from 'node-nats-streaming';
import { Subjects, Listener, ProductUpdatedEvent } from '@vuelaine-ecommerce/common';
import { Product } from '../../models/product';
import { queueGrouopName } from './queue-group-name';

export class ProductUpdatedListener extends Listener<ProductUpdatedEvent> {
    subject: Subjects.ProductUpdated = Subjects.ProductUpdated;
    queueGroupName = queueGrouopName;

    async onMessage(data: ProductUpdatedEvent['data'], msg: Message) {

        // const product = await Product.findOne({
        //     _id: data.id,
        //     version: data.version - 1
        // });
        const product = await Product.findByEvent(data);

        if (!product) {
            throw new Error('Product not found');
        }

        
        const { name, price, userId, details, size, reviews, color, type, productUrl } = data;
        product.set({ name, price, userId, details, size, reviews, color, type, productUrl });
        await product.save();

        msg.ack();
    }
}