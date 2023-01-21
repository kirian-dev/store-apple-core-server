export interface IProduct {
	name: string;
	image: string;
	productName: string;
	brand: string;
	category: string;
	model: string;
	characteristics: {
		display?: string;
		processor?: string;
		memory?: {
			options: IOption[];
			default: string;
		};
		storage?: {
			options: IOption[];
			default: string;
		};
		graphics?: string;
		operatingSystem?: string;
		camera?: string;
		price?: number;
		availability?: true;
		description?: string;
	};

	reviews?: IReview[];
	countInStock?: number;
	commonRating?: number;
}

export interface IOption {
	name: string;
	price: number;
}

export interface IReview {
	customerName: string;
	review: string;
	rating: number;
}
