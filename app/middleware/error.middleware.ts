import { Request, Response, NextFunction } from 'express-serve-static-core';
import { handleErrorServer } from '../utils/errors/handlerErrorServer';
import { ApiError } from '../utils/errors/api.error';

export const errorMiddleware = (err: any, req: Request, res: Response, next: NextFunction) => {
	if (err instanceof ApiError) {
		return res.status(err.status).json({ message: err.message, errors: err.errors }).send();
	}
	return handleErrorServer(err, req, res, next);
};
