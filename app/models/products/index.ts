import { IOption, IProduct, IReview } from '../../common/interfaces/product.interface';
import mongoose, { InferSchemaType, Schema } from 'mongoose';

const optionSchema = new Schema<IOption>({
	name: {
		type: String,
	},
	price: {
		type: Number,
	},
});

const reviewsSchema = new Schema<IReview>(
	{
		customerName: {
			type: String,
			required: true,
		},
		review: {
			type: String,
			required: true,
		},
		rating: {
			type: Number,
			required: true,
		},
	},
	{
		timestamps: true,
	},
);

const productSchema = new Schema<IProduct>({
	name: {
		type: String,
		required: true,
	},
	image: {
		type: String,
		required: true,
	},
	productName: {
		type: String,
		required: true,
	},
	brand: {
		type: String,
		required: true,
	},
	category: {
		type: String,
		required: true,
	},
	model: {
		type: String,
		required: true,
	},
	characteristics: {
		display: {
			type: String,
		},
		processor: {
			type: String,
		},
		memory: {
			options: [optionSchema],
			default: {
				type: String,
			},
		},
		storage: {
			options: [optionSchema],
			default: {
				type: String,
			},
		},
		graphics: {
			type: String,
		},
		operatingSystem: {
			type: String,
		},
		camera: {
			type: String,
		},
		price: {
			type: Number,
		},
		availability: {
			type: Boolean,
		},
		description: {
			type: String,
		},
	},

	reviews: [reviewsSchema],
	commonRating: {
		type: Number,
	},
	countInStock: {
		type: Number,
	},
});

type ProductType = InferSchemaType<typeof productSchema>;

const Product = mongoose.model<ProductType>('Product', productSchema);

export { Product };
