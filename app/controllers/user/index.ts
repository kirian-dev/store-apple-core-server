import { ErrorProduct } from './../../common/enums/errors.enum';
import { ApiError } from './../../utils/errors/api.error';
import { IUser } from './../../common/interfaces/user.interface';
import { StatusCode } from './../../common/enums/response.enum';
import { UserService } from './../../services/user/index';
import { Response, Request, NextFunction } from 'express';

export class UserController {
	public static async signup(req: Request, res: Response, next: NextFunction) {
		try {
			const { email, password, name }: IUser = req.body;
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
			const { email, password } = req.body;
			const userData = await UserService.login(email, password);

			if (userData) {
				res.cookie('refreshToken', userData.refreshToken, {
					maxAge: 60 * 24 * 60 * 60 * 1000,
					httpOnly: true,
				});

				return res.status(StatusCode.OK).json({
					user_data: userData,
				});
			}
		} catch (err) {
			next(err);
		}
	}
	public static async logout(req: Request, res: Response, next: NextFunction) {
		try {
			const { refreshToken } = req.cookies;
			await UserService.logout(refreshToken);
			res.clearCookie('refreshToken');

			return res.status(StatusCode.OK).json([]);
		} catch (err) {
			next(err);
		}
	}

	public static async refresh(req: Request, res: Response, next: NextFunction) {
		try {
			const { refreshToken } = req.cookies;
			const userData = await UserService.refresh(refreshToken);
			if (userData) {
				res.cookie('refreshToken', userData.refreshToken, {
					maxAge: 60 * 24 * 60 * 60 * 1000,
					httpOnly: true,
				});

				return res.status(StatusCode.OK).json({
					user_data: userData,
				});
			}
		} catch (err) {
			next(err);
		}
	}

	public static async getUsers(req: Request, res: Response, next: NextFunction) {
		try {
			const users = await UserService.getUsers();

			return res.status(StatusCode.OK).json({ data: users });
		} catch (err) {}
	}

	public static async getUserById(req: Request, res: Response, next: NextFunction) {
		try {
			const id = req.params.id;

			if (!id) {
				throw ApiError.BadRequestError(ErrorProduct.INVALID_ID);
			}
			const userById = await UserService.getUserById(id);

			return res.status(StatusCode.OK).json({ userById });
		} catch (err) {}
	}

	public static async createUser(req: Request, res: Response, next: NextFunction) {
		try {
			const id = req.params.id;

			if (!id) {
				throw ApiError.BadRequestError(ErrorProduct.INVALID_ID);
			}
			const userById = await UserService.getUserById(id);

			return res.status(StatusCode.OK).json({ userById });
		} catch (err) {}
	}

	public static async deleteUser(req: Request, res: Response, next: NextFunction) {
		try {
			const id = req.params.id;

			if (!id) {
				throw ApiError.BadRequestError(ErrorProduct.INVALID_ID);
			}
			await UserService.deleteUser(id);

			return res.status(StatusCode.OK).json({});
		} catch (err) {}
	}
}
