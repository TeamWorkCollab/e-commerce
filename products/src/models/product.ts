import mongoose from 'mongoose';

interface ProductAttrs {
    name: string;
    price: number;
    userId: string;
    details: string;
    size: string[];
    reviews: string[];
    color: string[];
    type:string;
}

interface ProductDocs extends mongoose.Document {
    name: string;
    price: number;
    userId: string;
    details: string;
    size: string[];
    reviews: string[];
    color: string[];
    type:string;
}

interface ProductModel extends mongoose.Model<ProductDocs>{
    build(attrs: ProductAttrs): ProductDocs;
}

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    details: {
        type: String,
        required: true
    },
    size: {
        type: [String],
        //required: true
    },
    reviews: {
        type: [String],
        //required: true
    },
    color: {
        type: [String],
        //required: true
    },
    type: {
        type: String,
        //required: true
    },
}, {
    toJSON: {
        transform(doc, ret) {
            ret.id = ret._id;
            delete ret._id;
        }
    }
});

productSchema.statics.build = (attrs: ProductAttrs) => {
    return new Product(attrs);
}

const Product = mongoose.model<ProductDocs, ProductModel>('Product', productSchema);

export { Product }