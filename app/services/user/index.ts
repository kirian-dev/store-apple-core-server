import { ILogin, IUser } from './../../common/interfaces/user.interface';
import bcrypt from 'bcrypt';
import { User } from '../../models';
import { TokenService } from '../token';
import { UserDto } from '../../common/dto/user.dto';
import { ApiError } from '../../utils/errors/api.error';
import { ErrorUser } from '../../common/enums/errors.enum';

export class UserService {
	public static async signup(
		email: string,
		password: string,
		name: string,
	): Promise<ILogin | undefined> {
		const futureUser = await User.findOne({ email });
		if (futureUser) {
			throw ApiError.UnprocessableEntity(ErrorUser.USER_EXISTS);
		}

		const hashPassword = await bcrypt.hash(password, 3);
		const user = await User.create({ email, password: hashPassword, name, role: 'user' });
		const userDto = new UserDto(user.name, user.email, user._id);
		const tokens = await TokenService.generateTokens({
			...userDto,
		});
		if (tokens) {
			await TokenService.saveToken(userDto._id, tokens.refreshToken);

			return {
				accessToken: tokens.accessToken,
				refreshToken: tokens.refreshToken,
				user: userDto,
			};
		}
	}

	public static async login(email: string, password: string): Promise<ILogin | undefined> {
		const userExists: IUser | null = await User.findOne({ email });
		if (!userExists) {
			throw ApiError.BadRequestError(ErrorUser.USER_NOT_FOUND);
		}
		const isPasswordsEqual = await bcrypt.compare(password, userExists.password);

		if (!isPasswordsEqual) {
			throw ApiError.BadRequestError(ErrorUser.PASSWORDS_NOT_EQUAL);
		}

		const userDto = new UserDto(userExists.email, userExists.name, userExists._id);
		const tokens = await TokenService.generateTokens({
			...userDto,
		});
		if (tokens) {
			await TokenService.saveToken(userDto._id, tokens.refreshToken);

			return {
				accessToken: tokens.accessToken,
				refreshToken: tokens.refreshToken,
				user: userDto,
			};
		}
	}

	public static async logout(refreshToken: string): Promise<void> {
		await TokenService.removeToken(refreshToken);
	}

	public static async refresh(refreshToken: string): Promise<ILogin | undefined> {
		if (!refreshToken) {
			throw ApiError.UnauthorizedError();
		}

		const user = await TokenService.validateRefreshToken(refreshToken);
		const tokenDb = await TokenService.findRefreshToken(refreshToken);

		if (!user || !tokenDb) {
			throw ApiError.UnauthorizedError();
		}
		const userData: IUser | null = await User.findById({ user });

		if (userData) {
			const userDto = new UserDto(userData.email, userData.name, userData._id);
			const tokens = await TokenService.generateTokens({
				...userDto,
			});
			if (tokens) {
				await TokenService.saveToken(userDto._id, tokens.refreshToken);

				return {
					accessToken: tokens.accessToken,
					refreshToken: tokens.refreshToken,
					user: userDto,
				};
			}
		}
	}

	public static async getUsers(): Promise<IUser[] | undefined> {
		const users = await User.find();
		return users ? users : [];
	}

	public static async getUserById(id: string): Promise<IUser | null> {
		const user = await User.findById({ _id: id });
		if (!user) {
			throw ApiError.BadRequestError(`User ${id} not found`);
		}

		return user ? user : null;
	}

	public static async deleteUser(id: string): Promise<null> {
		const deletedUser = await User.deleteOne({ id });

		if (!deletedUser) {
			throw ApiError.BadRequestError(`User ${id} notFound`);
		}
		return null;
	}
}
