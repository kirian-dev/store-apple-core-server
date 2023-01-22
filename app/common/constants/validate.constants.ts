const productFields = [
	'name',
	'image',
	'productName',
	'brand',
	'category',
	'model',
	'characteristics',
];

const userFields = ['name', 'email', 'password'];

const orderFields = ['user', 'orderItems', 'totalPrice', 'isPaid'];

export const requiredFields = {
	product: productFields,
	user: userFields,
	order: orderFields,
};
