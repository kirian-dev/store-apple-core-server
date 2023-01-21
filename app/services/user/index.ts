import bcrypt from 'bcrypt';
import { User } from '../../models';
import { TokenService } from '../token';
import { UserDto } from '../../common/dto/user.dto';
import { ApiError } from '../../utils/errors/api.error';
import { ErrorLogin } from '../../common/enums/errors.enum';

export class UserService {
	public static async signup(
		email: string,
		password: string,
		name: string,
	): Promise<
		| {
				accessToken: string;
				refreshToken: string;
				user: {
					name: string;
					email: string;
					_id: string;
				};
		  }
		| undefined
	> {
		const futureUser = await User.findOne({ email });
		if (futureUser) {
			throw ApiError.UnprocessableEntity(ErrorLogin.USER_EXISTS);
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
}
