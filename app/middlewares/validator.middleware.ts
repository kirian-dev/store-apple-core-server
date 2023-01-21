import { Request, Response, NextFunction } from 'express';

import { StatusCode } from '../common/enums/response.enum';
import { getMissingFields } from '../utils/validateMissingFields';
import { requiredFields } from '../common/constants/validate.constants';

export const validateSignup = (req: Request, res: Response, next: NextFunction) => {
	const { email, password, name } = req.body;
	const missingFields = getMissingFields(req.body, requiredFields.user);

	if (missingFields.size > 0) {
		const errors: { [key: string]: string } = {};
		for (const field of missingFields) {
			errors[field] = `${field} is required.`;
		}
		return res.status(StatusCode.INCORRECT_BODY).json({
			errors: errors,
		});
	}
	if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
		return res.status(StatusCode.BAD_REQUEST).json({
			error: 'Invalid email address',
		});
	}
	if (password.length < 6) {
		return res.status(StatusCode.BAD_REQUEST).json({
			error: 'Password must be at least 6 characters long',
		});
	}
	if (name.length > 32) {
		return res.status(StatusCode.BAD_REQUEST).json({
			error: 'Name must be less than 32 characters',
		});
	}
	next();
};
