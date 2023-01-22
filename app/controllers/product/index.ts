import { ApiError } from './../../utils/errors/api.error';
import { NextFunction, Request, Response } from 'express';
import createHttpError from 'http-errors';

import { ProductService } from '../../services/product';
import { StatusCode } from '../../common/enums/response.enum';
import { IProduct } from '../../common/interfaces/product.interface';
import { ErrorProduct } from '../../common/enums/errors.enum';
import { getMissingFields } from '../../utils/validateMissingFields';
import { requiredFields } from '../../common/constants/validate.constants';
export class ProductsController {
	public static async getProducts(req: Request, res: Response, next: NextFunction) {
		try {
			const products = await ProductService.getProducts();

			return res.status(StatusCode.OK).json({ data: products });
		} catch (error) {
			next(error);
		}
	}
	public static async getProductsByCategory(req: Request, res: Response, next: NextFunction) {
		try {
			const category = req.params.category;
			if (!category) {
				throw ApiError.BadRequestError(ErrorProduct.INVALID_CATEGORY);
			}

			const products = await ProductService.getProductsByCategory(category);
			if (!products) {
				throw ApiError.NotFound(ErrorProduct.CATEGORY_NOT_FOUND);
			}

			return res.status(StatusCode.OK).json({ data: products });
		} catch (error) {
			next(error);
		}
	}

	public static async getProductById(req: Request, res: Response, next: NextFunction) {
		try {
			const id = req.params.id;

			if (!id) {
				throw ApiError.BadRequestError(ErrorProduct.INVALID_ID);
			}

			const product = await ProductService.getProductById(id);

			if (!product) {
				throw ApiError.NotFound(ErrorProduct.PRODUCT_NOT_FOUND);
			}

			return res.status(StatusCode.OK).json({ data: product });
		} catch (error) {
			next(error);
		}
	}

	public static async createProduct(req: Request, res: Response, next: NextFunction) {
		try {
			const body: IProduct = req.body;

			if (!body) {
				throw ApiError.BadRequestError(ErrorProduct.PRODUCT_NO_FOUND_DATA);
			}

			const missingFields = getMissingFields(body, requiredFields.product);

			if (missingFields.length > 0) {
				let errors: { [key: string]: string } = {};
				for (const field of missingFields) {
					errors[field] = `${field} is required.`;
				}
				throw ApiError.UnprocessableEntity(ErrorProduct.PRODUCTS_FIELDS_MESSAGE, errors);
			}

			const newProduct = await ProductService.createProduct(body);
			return res.status(StatusCode.CREATED).json({ data: newProduct });
		} catch (error) {
			next(error);
		}
	}

	public static async updateProduct(req: Request, res: Response, next: NextFunction) {
		try {
			const body: IProduct = req.body;
			const id: string = req.params.id;
			
			if (!body) {
				throw ApiError.BadRequestError(ErrorProduct.PRODUCT_NO_FOUND_DATA);
			}

			if (!id) {
				throw ApiError.BadRequestError(ErrorProduct.INVALID_ID);
			}

			const missingFields = getMissingFields(body, requiredFields.product);
			if (missingFields.length > 0) {
				let errors: { [key: string]: string } = {};
				for (const field of missingFields) {
					errors[field] = `${field} is required.`;
				}
				throw ApiError.UnprocessableEntity(ErrorProduct.PRODUCTS_FIELDS_MESSAGE, errors);
			}

			const newProduct = await ProductService.updateProduct(body, id);
			return res.status(StatusCode.OK).json({ data: newProduct });
		} catch (error) {
			next(error);
		}
	}

	public static async deleteProduct(req: Request, res: Response, next: NextFunction) {
		try {
			const id: string = req.params.id;

			if (!id) {
				throw ApiError.BadRequestError(ErrorProduct.INVALID_ID);
			}

			await ProductService.deleteProduct(id);
			return res.status(StatusCode.OK).json({
				message: [],
			});
		} catch (error) {
			next(error);
		}
	}
}
