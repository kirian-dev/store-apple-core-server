import { StatusCode } from '../../common/enums/response.enum';

export class ApiError extends Error {
	status: number;
	errors: any;

	constructor(status: any, message: any, errors = {}) {
		super(message);
		this.status = status;
		this.errors = errors;
	}

	public static UnauthorizedError() {
		return new ApiError(StatusCode.NON_AUTHENTICATION, 'Unauthorized');
	}

	public static BadRequestError(message: any, errors = {}) {
		return new ApiError(StatusCode.BAD_REQUEST, message, errors);
	}

	public static NotFound(message: any, errors = {}) {
		return new ApiError(StatusCode.RESOURCE_NOT_FOUND, message, errors);
	}

	public static UnprocessableEntity(message: any, errors = {}) {
		return new ApiError(StatusCode.INCORRECT_BODY, message, errors);
	}
}
