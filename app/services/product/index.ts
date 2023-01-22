import { ErrorProduct } from '../../common/enums/errors.enum';
import { IProduct } from '../../common/interfaces/product.interface';
import { Product } from '../../models/products';
import { ApiError } from '../../utils/errors/api.error';

class ProductService {
	public static async getProducts(): Promise<IProduct[] | undefined> {
		try {
			const products = await Product.find();
			return products.length > 0 ? products : [];
		} catch (error) {
			console.error(error);
		}
	}

	public static async getProductsByCategory(category: string): Promise<IProduct[] | null> {
		try {
			const productsByCategory = await Product.find({ category });
			return productsByCategory.length > 0 ? productsByCategory : [];
		} catch (error) {
			console.error(error);
			return null;
		}
	}

	public static async getProductById(id: string): Promise<IProduct | null> {
		try {
			const product = await Product.findById({ _id: id });
			return product;
		} catch (error) {
			console.error(error);
			return null;
		}
	}

	public static async createProduct(body: IProduct): Promise<IProduct | null> {
		try {
			const newProduct = await Product.create(body);
			return newProduct;
		} catch (error) {
			console.error(error);
			return null;
		}
	}
	public static async updateProduct(body: IProduct, id: string): Promise<IProduct | null> {
		try {
			const updatedProduct = await Product.findByIdAndUpdate(id, body, { new: true });

			if (!updatedProduct) {
				throw ApiError.BadRequestError(ErrorProduct.PRODUCT_NOT_FOUND);
			}
			return updatedProduct;
		} catch (error) {
			console.error(error);
			return null;
		}
	}

	public static async deleteProduct(id: string): Promise<null | undefined> {
		try {
			const deletedProduct = await Product.deleteOne({ _id: id });

			if (!deletedProduct) {
				throw ApiError.BadRequestError(ErrorProduct.PRODUCT_NOT_FOUND);
			}

			return null;
		} catch (error) {
			console.log(error);
		}
	}
}

export { ProductService };
