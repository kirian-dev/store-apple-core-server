import mongoose, { ConnectOptions } from 'mongoose';

mongoose.set('strictQuery', false);

export const connectDB = async () => {
	try {
		if (process.env.MONGODB_URI && typeof process.env.MONGODB_URI === 'string') {
			await mongoose.connect(process.env.MONGODB_URI, {
				useUnifiedTopology: true,
				useNewUrlParser: true,
			} as ConnectOptions);
			console.log('MongoDB connected...');
		} else {
			throw new Error('MongoURI is not defined or is a not string');
		}
	} catch (error) {
		if (error instanceof Error) {
			console.log(error);
			process.exit(1);
		} else {
			console.log('Unexpected error: ', error);
		}
	}
};
