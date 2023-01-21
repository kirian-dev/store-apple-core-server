import jwt from 'jsonwebtoken';
import { Token } from '../../models';
import dotenv from 'dotenv';

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
}
