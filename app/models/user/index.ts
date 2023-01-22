import mongoose, { InferSchemaType } from 'mongoose';
import { IUser } from './../../common/interfaces/user.interface';

const userSchema = new mongoose.Schema<IUser>(
	{
		name: {
			type: 'string',
			required: true,
		},
		email: {
			type: 'string',
			required: true,
			unique: true,
		},
		password: {
			type: 'string',
			required: true,
		},
		role: '',
	},
	{ timestamps: true },
);

type UserType = InferSchemaType<typeof userSchema>;

const User = mongoose.model<UserType>('User', userSchema);

export { User };
