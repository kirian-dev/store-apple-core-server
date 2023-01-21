export enum ErrorLogin {
	UNAUTHORIZED = 'Unauthorized',
	FORBIDDEN = 'Forbidden',
	USER_EXISTS = 'The email has already been taken.'
}

export enum ErrorProduct {
	INVALID_CATEGORY = 'Invalid category parameter',
	CATEGORY_NOT_FOUND = 'Category not found',
	INVALID_ID = 'Missing id parameter in request',
	PRODUCT_NOT_FOUND = 'Product not found',
	PRODUCT_NO_FOUND_DATA = 'No product data found in request body',
	PRODUCTS_FIELDS_MESSAGE = 'All required fields must be filled',
}
