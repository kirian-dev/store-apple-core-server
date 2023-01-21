import { StatusCode } from '../../common/enums/response.enum';

export class ApiError extends Error {
	status: number;
	errors: any;

	constructor(status: any, message: any, errors = []) {
		super(message);
		this.status = status;
		this.errors = errors;
	}

	static UnauthorizedError() {
		return new ApiError(StatusCode.NON_AUTHENTICATION, 'autrozihfg');
	}

	static BadRequestError(message: any, errors = []) {
		return new ApiError(StatusCode.BAD_REQUEST, message, errors);
	}
}
