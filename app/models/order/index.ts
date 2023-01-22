import mongoose, { InferSchemaType, Schema } from 'mongoose';
import { IOrder } from '../../common/interfaces/order.interface';

const orderSchema = new mongoose.Schema<IOrder>(
	{
		user: {
			type: Schema.Types.ObjectId,
			required: true,
			ref: 'User',
		},
		orderItems: [
			{
				name: {
					type: String,
					required: true,
				},
				qty: {
					type: Number,
					required: true,
				},
				price: {
					type: Number,
					required: true,
				},
				product: {
					type: Schema.Types.ObjectId,
					required: true,
					ref: 'Product,',
				},
			},
		],
		paymentMethod: {
			type: String,
		},
		paymentResult: {
			id: {
				type: String,
			},
			status: {
				type: String,
			},
			updated_time: {
				type: String,
			},
			email_address: {
				type: String,
			},
		},
		totalPrice: {
			type: Number,
			required: true,
			default: 0.0,
		},
		isPaid: {
			type: Boolean,
			required: true,
			default: false,
		},
		paidAt: {
			type: Date,
		},
	},
	{ timestamps: true },
);

type OrderType = InferSchemaType<typeof orderSchema>;

const Order = mongoose.model<OrderType>('Order', orderSchema);

export { Order };
