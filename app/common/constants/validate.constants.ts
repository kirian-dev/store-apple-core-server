const productFields = new Set([
	'name',
	'image',
	'productName',
	'brand',
	'category',
	'model',
	'characteristics',
]);

const userFields = new Set(['name', 'email', 'password']);

export const requiredFields = {
	product: productFields,
	user: userFields,
};
