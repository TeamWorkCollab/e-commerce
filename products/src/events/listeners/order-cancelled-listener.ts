import { Listener, OrderCancelledEvent, Subjects } from "@vuelaine-ecommerce/common";
import { Message } from 'node-nats-streaming';
import { queueGrouopName } from "./queue-group-name";
import { Product } from '../../models/product';
import { ProductUpdatedPublisher } from "../publishers/product-updated-publisher";

export class OrderCancelledListener extends Listener<OrderCancelledEvent> {
    subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
    queueGroupName = queueGrouopName;

    async onMessage(data: OrderCancelledEvent['data'], msg:Message) {
        const product = await Product.findById(data.product.id);

        if (!product) {
            throw new Error('Ticket not found');
        }

        product.set({ orderId: undefined });
        await product.save()
        await new ProductUpdatedPublisher(this.client).publish({
            id: product.id,
            version: product.version,
            name: product.name,
            price: product.price,
            userId: product.userId,
            size: product.size,
            details: product.details,
            reviews: product.reviews,
            type: product.type,
            color: product.color,
            productUrl: product.productUrl,
            orderId: product.orderId,
        });

        msg.ack();
    }
}