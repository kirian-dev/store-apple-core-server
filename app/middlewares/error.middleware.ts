import { Request, Response, NextFunction } from 'express-serve-static-core';
import { handleError } from '../utils/errors/handlerError';
import { StatusCode } from './../common/enums/response.enum';
import { ApiError } from '../utils/errors/api.error';

export const errorMiddleware = (err: any, req: Request, res: Response, next: NextFunction) => {
	if (err instanceof ApiError) {
		return res.status(err.status).json({ message: err.message, errors: err.errors });
	}
	return handleError(err, req, res, next);
};
