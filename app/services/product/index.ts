import { IProduct } from '../../common/interfaces/product.interface';
import { Product } from '../../models/products';

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
			const product = await Product.findById(id);
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
			return updatedProduct;
		} catch (error) {
			console.error(error);
			return null;
		}
	}

	public static async deleteProduct(id: string) {
		try {
			const deleteProduct = await Product.deleteOne({ _id: id });

			return deleteProduct;
		} catch (error) {
			console.log(error);
		}
	}
}

export { ProductService };
