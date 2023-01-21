export const getMissingFields = (body: any, requiredFields: any) => {
	const missingFields = new Set(
		[...requiredFields].filter((field) => !Object.keys(body).includes(field)),
	);
	return missingFields;
};
