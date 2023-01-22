import { Request, Response, NextFunction } from 'express';
import { check, validationResult } from 'express-validator';
import { ErrorUser } from '../common/enums/errors.enum';
import { ApiError } from '../utils/errors/api.error';

export const validateSignup = [
	check('name').isLength({ max: 32 }).withMessage(ErrorUser.NAME_LENGTH),
	check('email').isEmail().withMessage(ErrorUser.INVALID_EMAIL_ADDRESS),
	check('password').isLength({ min: 6 }).withMessage(ErrorUser.PASSWORD_LENGTH),
	check('password').isLength({ max: 32 }).withMessage(ErrorUser.PASSWORD_LENGTH),
	check('name').isLength({ min: 1 }).withMessage(ErrorUser.NAME_REQUIRED),
	check('email').isLength({ min: 1 }).withMessage(ErrorUser.EMAIL_REQUIRED),
	check('password').isLength({ min: 1 }).withMessage(ErrorUser.PASSWORD_REQUIRED),
	(req: Request, res: Response, next: NextFunction) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return next(ApiError.UnprocessableEntity(ErrorUser.USER_FIELDS_MESSAGE, errors.mapped()));
		}
		return next();
	},
];

export const validateLogin = [
	check('email').isEmail().withMessage(ErrorUser.INVALID_EMAIL_ADDRESS),
	check('password').isLength({ min: 6 }).withMessage(ErrorUser.PASSWORD_LENGTH),
	check('email').isLength({ min: 1 }).withMessage(ErrorUser.EMAIL_REQUIRED),
	check('password').isLength({ min: 1 }).withMessage(ErrorUser.PASSWORD_REQUIRED),
	(req: Request, res: Response, next: NextFunction) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return next(ApiError.UnprocessableEntity(ErrorUser.USER_FIELDS_MESSAGE, errors.mapped()));
		}
		return next();
	},
];
