export enum ErrorUser {
	UNAUTHORIZED = 'Unauthorized',
	FORBIDDEN = 'Forbidden',
	USER_EXISTS = 'The email has already been taken.',
	USER_FIELDS_MESSAGE = 'Please fill all required fields',
	INVALID_EMAIL_ADDRESS = 'Invalid email address',
	PASSWORD_LENGTH = 'Password must be at least 6 and not more than 32 characters',
	NAME_LENGTH = 'Name must be less than 32 characters',
	NAME_REQUIRED = 'Name is required',
	EMAIL_REQUIRED = 'Email is required',
	PASSWORD_REQUIRED = 'Password is required',
	USER_NOT_FOUND = 'User is not found',
	PASSWORDS_NOT_EQUAL = 'The provided credentials are incorrect.',
}

export enum ErrorProduct {
	INVALID_CATEGORY = 'Invalid category parameter',
	CATEGORY_NOT_FOUND = 'Category not found',
	INVALID_ID = 'Missing id parameter in request',
	PRODUCT_NOT_FOUND = 'Product not found',
	PRODUCT_NO_FOUND_DATA = 'No product data found in request body',
	PRODUCTS_FIELDS_MESSAGE = 'All required fields must be filled',
}

export enum ErrorOrder {
	ORDER_NOT_FOUND = 'Order not found',
	ORDER_DATA_NOT_FOUND = 'Order data not found',
	ORDER_FIELDS_MESSAGE = 'All required fields must be filled',
}