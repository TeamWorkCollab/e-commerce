import { Message } from 'node-nats-streaming';
import { Listener, OrderCreatedEvent, Subjects } from "@vuelaine-ecommerce/common";
import { queueGrouopName } from "./queue-group-name";
import { Product } from '../../models/product';
import { ProductUpdatedPublisher } from '../publishers/product-updated-publisher';
import { natsWrapper } from '../../nats-wrapper';

export class OrderCreatedListener extends Listener<OrderCreatedEvent> {
    subject: Subjects.OrderCreated = Subjects.OrderCreated;
    queueGroupName = queueGrouopName;

    async onMessage(data: OrderCreatedEvent['data'], msg: Message) {
        // find the product that the order is reserving
        const product = await Product.findById(data.product.id);

        // if no product, throw error
        if (!product) {
            throw new Error('Product not found');
        }

        // mark the product as being reserved by setting its orderId property
        product.set({ orderId: data.id });

        // save the product
        await product.save();
        //new ProductUpdatedPublisher

        // ack the message
        msg.ack();
    }
}