export class UserDto {
	name: string;
	email: string;
	_id: string;

	constructor(name: string, email: string, _id: string) {
		this.name = name;
		this.email = email;
		this._id = _id;
	}
}
