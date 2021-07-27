import { Subjects } from './subjets';


export interface ProductCreatedEvent {
    subject: Subjects.ProductCreated;
    data: {
        id: string;
        name: string;
        price: number;
    };
}