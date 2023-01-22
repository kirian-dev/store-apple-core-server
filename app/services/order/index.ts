import { IOrder, IPaymentResult } from './../../common/interfaces/order.interface';
import { Order } from '../../models';
import { ApiError } from '../../utils/errors/api.error';
import { ErrorOrder } from '../../common/enums/errors.enum';

export class OrderService {
	public static async getOrders(): Promise<IOrder[]> {
		const orders = await Order.find();

		return orders ? orders : [];
	}

	public static async getOrderById(orderId: string): Promise<IOrder> {
		const order = await Order.findById({ _id: orderId });

		if (!order) {
			throw ApiError.BadRequestError(ErrorOrder.ORDER_NOT_FOUND);
		}

		return order;
	}

	public static async createOrder(body: IOrder): Promise<IOrder> {
		const newOrder = await Order.create({ body });

		return newOrder;
	}

	public static async updateOrder(orderId: string, body: IOrder): Promise<IOrder | null> {
		const order = await Order.findByIdAndUpdate({ _id: orderId, body }, { new: true });

		if (!order) {
			throw ApiError.BadRequestError(ErrorOrder.ORDER_NOT_FOUND);
		}

		return order || null;
	}

	public static async deleteOrder(orderId: string): Promise<null | undefined> {
		const deletedOrder = await Order.deleteOne({ _id: orderId });

		if (!deletedOrder) {
			throw ApiError.BadRequestError(ErrorOrder.ORDER_NOT_FOUND);
		}
		return null;
	}

	public static async paymentOrder(orderId: string, body: IPaymentResult): Promise<IOrder | null> {
		const orderWithPayment = await Order.findByIdAndUpdate({ _id: orderId }, body);

		if (!orderWithPayment) {
			throw ApiError.BadRequestError(ErrorOrder.ORDER_NOT_FOUND);
		}

		return orderWithPayment || null;
	}
}
