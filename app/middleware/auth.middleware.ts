import { TokenService } from '../services/token/index';
import { Token } from '../models';
import { ApiError } from '../utils/errors/api.error';
import { Request, Response, NextFunction } from 'express-serve-static-core';

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const authorizationHeader = req.headers.authorization?.split(' ');
    
    if (!authorizationHeader) {
      throw ApiError.UnauthorizedError();
    }

    const accessToken = authorizationHeader[1];
    if (!accessToken) {
      throw ApiError.UnauthorizedError();
    }

    const userData = await TokenService.validateAccessToken(accessToken)
    if (!userData) {
      throw ApiError.UnauthorizedError();
    }

    req.body = userData
    next()

  } catch (err) {
    return next(ApiError.UnauthorizedError())
  }
}