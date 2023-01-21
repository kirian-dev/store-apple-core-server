import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { connectDB } from '../config/db';

dotenv.config();

import products from './data';
import { Product } from '../models/products';

connectDB();

const importData = async () => {
	try {
		await Product.deleteMany();
		await Product.insertMany(products);
		console.log('Data Imported');
		process.exit();
	} catch (err) {
		if (err instanceof Error) {
			console.log(err);
			process.exit(1);
		}
	}
};

const destroyData = async () => {
	try {
		await Product.deleteMany();
		console.log('Data Destroyed');
		process.exit();
	} catch (err) {
		if (err instanceof Error) {
			console.log(err);
			process.exit(1);
		}
	}
};

if (process.argv[2] === '-d') {
	destroyData();
} else {
	importData();
}
