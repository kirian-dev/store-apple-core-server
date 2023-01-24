import { getMissingFields } from './../../utils/validateMissingFields';
import { IOrder } from './../../common/interfaces/order.interface';
import { ErrorOrder, ErrorProduct } from './../../common/enums/errors.enum';
import { Request, Response, NextFunction } from 'express';
import { OrderService } from '../../services';
import { StatusCode } from '../../common/enums/response.enum';
import { ApiError } from '../../utils/errors/api.error';
import { requiredFields } from '../../common/constants/validate.constants';

export class OrderController {
	public static async getOrders(req: Request, res: Response, next: NextFunction) {
		try {
			const orders = await OrderService.getOrders();

			return res.status(StatusCode.OK).json({ orders });
		} catch (err) {
			next(err);
		}
	}
	public static async getOrderById(req: Request, res: Response, next: NextFunction) {
		try {
			const id = req.params.id;

			if (!id) {
				throw ApiError.BadRequestError(ErrorProduct.INVALID_ID);
			}

			const order = await OrderService.getOrderById(id);

			return res.status(StatusCode.OK).json({ order });
		} catch (err) {
			next(err);
		}
	}
	public static async createOrder(req: Request, res: Response, next: NextFunction) {
		try {
			const body: IOrder = req.body;

			if (!body) {
				throw ApiError.BadRequestError(ErrorOrder.ORDER_DATA_NOT_FOUND);
			}

			const missingFields = getMissingFields(body, requiredFields.order);
			if (missingFields.length > 0) {
				let errors: { [key: string]: string } = {};
				for (const field of missingFields) {
					errors[field] = `${field} is required.`;
				}
				throw ApiError.UnprocessableEntity(ErrorOrder.ORDER_FIELDS_MESSAGE, errors);
			}

			const newOrder = await OrderService.createOrder(body);
			return res.status(StatusCode.CREATED).json({ newOrder });
		} catch (err) {
			next(err);
		}
	}
	public static async updateOrder(req: Request, res: Response, next: NextFunction) {
		try {
			const body: IOrder = req.body;
			const id: string = req.params.id;

			if (!body) {
				throw ApiError.BadRequestError(ErrorOrder.ORDER_DATA_NOT_FOUND);
			}

			if (!id) {
				throw ApiError.BadRequestError(ErrorProduct.INVALID_ID);
			}

			const missingFields = getMissingFields(body, requiredFields.order);
			if (missingFields.length > 0) {
				let errors: { [key: string]: string } = {};
				for (const field of missingFields) {
					errors[field] = `${field} is required.`;
				}
				throw ApiError.UnprocessableEntity(ErrorOrder.ORDER_FIELDS_MESSAGE, errors);
			}

			const updatedOrder = await OrderService.updateOrder(id, body);
			return res.status(StatusCode.OK).json({ updatedOrder });
		} catch (err) {
			next(err);
		}
	}
	public static async deleteOrder(req: Request, res: Response, next: NextFunction) {
		try {
			const id: string = req.params.id;

			if (!id) {
				throw ApiError.BadRequestError(ErrorProduct.INVALID_ID);
			}

			await OrderService.deleteOrder(id);
			return res.status(StatusCode.OK).json({
				message: [],
			});
		} catch (error) {
			next(error);
		}
	}
	public static async paymentOrder(req: Request, res: Response, next: NextFunction) {}
}
