import { NextFunction, Request, Response } from 'express';
import createHttpError from 'http-errors';

import { ProductService } from '../../services/product';
import { StatusCode } from '../../common/enums/response.enum';
import { IProduct } from '../../common/interfaces/product.interface';
import { handleError } from '../../utils/errors/handlerError';
import { ErrorProduct } from '../../common/enums/errors.enum';
import { getMissingFields } from '../../utils/validateMissingFields';
import { requiredFields } from '../../common/constants/validate.constants';
export class ProductsController {
	public static async getProducts(req: Request, res: Response, next: NextFunction) {
		try {
			const products = await ProductService.getProducts();

			return res.status(StatusCode.OK).json({ data: products });
		} catch (error) {
			return handleError(error, req, res, next);
		}
	}

	public static async getProductsByCategory(req: Request, res: Response, next: NextFunction) {
		try {
			const category = req.params.category;
			if (!category) {
				return res.status(StatusCode.BAD_REQUEST).json({
					message: ErrorProduct.INVALID_CATEGORY,
				});
			}

			const products = await ProductService.getProductsByCategory(category);
			if (!products) {
				return res.status(StatusCode.RESOURCE_NOT_FOUND).json({
					message: ErrorProduct.CATEGORY_NOT_FOUND,
				});
			}

			return res.status(StatusCode.OK).json({ data: products });
		} catch (error) {
			return handleError(error, req, res, next);
		}
	}

	public static async getProductById(req: Request, res: Response, next: NextFunction) {
		try {
			const id = req.params.id;

			if (!id) {
				throw new createHttpError.BadRequest(ErrorProduct.INVALID_ID);
			}

			const product = await ProductService.getProductById(id);

			if (!product) {
				throw new createHttpError.NotFound(ErrorProduct.PRODUCT_NOT_FOUND);
			}

			return res.status(StatusCode.OK).json({ data: product });
		} catch (error) {
			return handleError(error, req, res, next);
		}
	}

	public static async createProduct(req: Request, res: Response, next: NextFunction) {
		try {
			const body: IProduct = req.body;

			if (!body) {
				return res.status(StatusCode.BAD_REQUEST).json({
					message: ErrorProduct.PRODUCT_NO_FOUND_DATA,
				});
			}

			const missingFields = getMissingFields(body, requiredFields.product);

			if (missingFields.size > 0) {
				let errors: { [key: string]: string } = {};
				for (const field of missingFields) {
					errors[field] = `${field} is required.`;
				}
				return res.status(StatusCode.INCORRECT_BODY).json({
					errors: errors,
				});
			}
			const newProduct = await ProductService.createProduct(body);
			return res.status(StatusCode.CREATED).json({ data: newProduct });
		} catch (error) {
			return handleError(error, req, res, next);
		}
	}

	public static async updateProduct(req: Request, res: Response, next: NextFunction) {
		try {
			const body: IProduct = req.body;
			const id: string = req.params.id;
			if (!body) {
				return res.status(StatusCode.INCORRECT_BODY).json({
					message: ErrorProduct.PRODUCT_NO_FOUND_DATA,
				});
			}

			const missingFields = getMissingFields(body, requiredFields.product);
			if (missingFields.size > 0) {
				let errors: { [key: string]: string } = {};
				for (const field of missingFields) {
					errors[field] = `${field} is required.`;
				}
				return res.status(StatusCode.INCORRECT_BODY).json({
					errors: errors,
				});
			}
			const newProduct = await ProductService.updateProduct(body, id);
			return res.status(StatusCode.OK).json({ data: newProduct });
		} catch (error) {
			return handleError(error, req, res, next);
		}
	}

	public static async deleteProduct(req: Request, res: Response, next: NextFunction) {
		try {
			const id: string = req.params.id;

			if (!id) {
				return res.status(StatusCode.BAD_REQUEST).json({
					message: ErrorProduct.INVALID_ID,
				});
			}

			await ProductService.deleteProduct(id);
			return res.status(StatusCode.OK).json({
				message: [],
			});
		} catch (error) {
			return handleError(error, req, res, next);
		}
	}
}
