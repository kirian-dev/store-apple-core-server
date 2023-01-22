export const getMissingFields = (body: any, requiredFields: string[]) => {
	return requiredFields.filter((field) => !Object.keys(body).includes(field) || body[field] === '');
};
