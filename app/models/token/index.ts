import mongoose, { InferSchemaType, Schema } from 'mongoose';
import { IToken } from './../../common/interfaces/token.interface';

const tokenSchema = new mongoose.Schema<IToken>(
	{
		user: {
			type: Schema.Types.ObjectId,
			ref: 'User',
		},
		refreshToken: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true },
);

type TokenType = InferSchemaType<typeof tokenSchema>;

const Token = mongoose.model<TokenType>('Token', tokenSchema);

export { Token };
