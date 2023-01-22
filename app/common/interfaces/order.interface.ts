import { IProduct } from './product.interface';
import { IUser } from './user.interface';

export interface IOrder {
	user: IUser;
	orderItems: IOrderItem[];
	paymentMethod?: string;
	paymentResult?: IPaymentResult;
	totalPrice: number;
	isPaid: boolean;
	paidAt?: Date;
}

export interface IOrderItem {
	name: string;
	qty: string;
	price: number;
	product: IProduct;
}

export interface IPaymentResult {
	id: string;
	status: string;
	updated_time: string;
	email_address: string;
}
