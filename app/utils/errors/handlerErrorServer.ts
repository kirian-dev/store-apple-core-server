import { Request, Response, NextFunction } from 'express';
import createError from 'http-errors';
import { StatusCode } from '../../common/enums/response.enum';

export const handleErrorServer = (error: any, req: Request, res: Response, next: NextFunction) => {
	if (error instanceof createError.HttpError) {
		return res.status(error.statusCode).json({ message: error.message });
	}
	if (error instanceof Error) {
		return res.status(StatusCode.INTERNAL_SERVER_ERROR).json({
			message: error.message,
		});
	} else {
		return res.status(StatusCode.INTERNAL_SERVER_ERROR).json({
			message: 'Unexpected error',
		});
	}
};
