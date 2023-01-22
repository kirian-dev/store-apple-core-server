import { IUser } from './../../common/interfaces/user.interface';
import jwt from 'jsonwebtoken';
import { Token } from '../../models';
import dotenv from 'dotenv';
import { ApiError } from '../../utils/errors/api.error';

dotenv.config();

export class TokenService {
	public static async generateTokens(value: {
		email: string;
		_id: string;
		name: string;
	}): Promise<{ accessToken: string; refreshToken: string } | undefined> {
		try {
			if (process.env.JWT_ACCESS_KEY_SECRET && process.env.JWT_REFRESH_KEY_SECRET) {
				const accessToken: string = jwt.sign(value, process.env.JWT_ACCESS_KEY_SECRET, {
					expiresIn: '45m',
				});
				const refreshToken: string = jwt.sign(value, process.env.JWT_REFRESH_KEY_SECRET, {
					expiresIn: '60d',
				});
				return {
					accessToken,
					refreshToken,
				};
			}
		} catch (err) {
			console.log(err);
		}
	}

	public static async saveToken(userId: string, refreshToken: string) {
		try {
			const tokenData = await Token.findOne({ user: userId });

			if (tokenData) {
				tokenData.refreshToken = refreshToken;
				return tokenData.save();
			}

			const token = await Token.create({ user: userId, refreshToken });
			return token;
		} catch (err) {
			console.log(err);
		}
	}

	public static async removeToken(refreshToken: string) {
		try {
			const token = await Token.deleteOne({ refreshToken });

			return token;
		} catch (err) {
			console.log(err);
		}
	}

	public static async findRefreshToken(refreshToken: string): Promise<string | null | undefined> {
		try {
			const tokenData: string | null = await Token.findOne({ refreshToken });

			return tokenData;
		} catch (err) {
			console.log(err);
		}
	}

	public static async validateAccessToken(accessToken: string): Promise<IUser | null | undefined> {
		try {
			if (process.env.JWT_ACCESS_KEY_SECRET) {
				const secretKey = process.env.JWT_ACCESS_KEY_SECRET;
				const payload = jwt.verify(accessToken, secretKey) as jwt.JwtPayload;
				const { _id } = payload;
				
				return _id;
			}
		} catch (err) {
			return null;
		}
	}

	public static async validateRefreshToken(refreshToken: string): Promise<string | null | undefined> {
		try {
			if (process.env.JWT_REFRESH_KEY_SECRET) {
				const secretKey = process.env.JWT_REFRESH_KEY_SECRET;
				const payload = jwt.verify(refreshToken, secretKey) as jwt.JwtPayload;
				const { _id } = payload;
				
				return _id;
			}
		} catch (err) {
			return null;
		}
	}
}
