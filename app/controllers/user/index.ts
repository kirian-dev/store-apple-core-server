import { validationResult } from 'express-validator';
import { StatusCode } from './../../common/enums/response.enum';
import { UserService } from './../../services/user/index';
import { Response, Request, NextFunction } from 'express';

export class UserController {
	public static async signup(req: Request, res: Response, next: NextFunction) {
		try {
			const { email, password, name } = req.body;
			const userData = await UserService.signup(email, password, name);

			if (userData) {
				res.cookie('refreshToken', userData.refreshToken, {
					maxAge: 60 * 24 * 60 * 60 * 1000,
					httpOnly: true,
				});
				return res.status(StatusCode.CREATED).json({
					user_data: userData,
				});
			}
		} catch (err) {
			next(err);
		}
	}
	public static async login(req: Request, res: Response, next: NextFunction) {
		try {
		} catch (err) {}
	}
	public static async logout(req: Request, res: Response, next: NextFunction) {
		try {
		} catch (err) {}
	}
	public static async getUsers(req: Request, res: Response, next: NextFunction) {
		try {
		} catch (err) {}
	}
	public static async getUsersById(req: Request, res: Response, next: NextFunction) {
		try {
		} catch (err) {}
	}
	public static async refresh(req: Request, res: Response, next: NextFunction) {
		try {
		} catch (err) {}
	}
}
