const products: any = [
	{
		name: '27-inch with Retina 5K display',
		image: '/images/imac_5k.png',
		productName: 'iMac 27 inch',
		brand: 'Apple',
		category: 'imac',
		model: 'M1',
		characteristics: {
			display: '27-inch Retina 5K display',
			processor: 'M1 chip with 8-core CPU, 8-core GPU, and 16-core Neural Engine',
			memory: {
				options: [
					{ name: '16GB of unified memory', price: 0 },
					{ name: '32GB of unified memory', price: 200 },
					{ name: '64GB of unified memory', price: 400 },
				],
				default: '32GB of unified memory',
			},
			storage: {
				options: [
					{ name: '512GB SSD', price: 0 },
					{ name: '1TB SSD', price: 300 },
					{ name: '2TB SSD', price: 600 },
					{ name: '4TB SSD', price: 900 },
				],
				default: '1TB SSD',
			},
			graphics: 'AMD Radeon Pro 5700 XT graphics with 16GB of GDDR6 memory',
			operatingSystem: 'macOS',
			camera: '1080p FaceTime HD camera',
			price: 2299.99,
			availability: true,
			description:
				'The iMac with Retina 5K display features a stunning 5120 x 2880 resolution, powerful M1 chip, high-performance graphics, and a range of storage and memory options.',
		},

		reviews: [
			{
				customerName: 'John Smith',
				review:
					'I am extremely happy with my new iMac. The display is beautiful and the performance is top-notch.',
				rating: 5,
			},
			{
				customerName: 'Jane Doe',
				review:
					"I love my new iMac. The only downside is the price, but it's worth it for the quality.",
				rating: 4,
			},
			{
				customerName: 'Bob Johnson',
				review:
					"Ive had some issues with my iMac's performance, but overall I am satisfied with my purchase.",
				rating: 3,
			},
		],
		countInStock: 5,
		commonRating: 4,
	},
	{
		name: '24-inch iMac with Retina 4K display',
		image: '/images/imac_24.png',
		productName: 'iMac 24 M1',
		brand: 'Apple',
		category: 'imac',
		model: 'M1',
		characteristics: {
			display: '24 inch Retina 4K display',
			processor: 'M1 chip with 8-core CPU, 8-core GPU, and 16-core Neural Engine',
			memory: {
				options: [
					{ name: '8GB of unified memory', price: 0 },
					{ name: '16GB of unified memory', price: 100 },
					{ name: '32GB of unified memory', price: 300 },
				],
				default: '16GB of unified memory',
			},
			storage: {
				options: [
					{ name: '256GB SSD', price: 0 },
					{ name: '512GB SSD', price: 200 },
					{ name: '1TB SSD', price: 600 },
					{ name: '2TB SSD', price: 1000 },
				],
				default: '512GB SSD',
			},
			graphics: 'AMD Radeon Pro 5300 graphics with 4GB of GDDR6 memory',
			operatingSystem: 'macOS',
			camera: '1080p FaceTime HD camera',
			price: 1999.99,
			availability: true,
			description:
				'The 24-inch iMac with Retina 4K display features a stunning 4096 x 2304 resolution, powerful 10th-generation Intel Core processors, and high-performance graphics.',
		},
		reviews: [
			{
				customerName: 'Mike Wilson',
				review: 'The iMac is a great computer, but I wish it had more storage space.',
				rating: 4,
			},
			{
				customerName: 'Amy Johnson',
				review:
					'I am very happy with my iMac purchase. It runs smoothly and the display is stunning.',
				rating: 5,
			},
			{
				customerName: 'David Smith',
				review:
					'I had some initial issues with setting up my iMac, but customer support was helpful in resolving them.',
				rating: 4,
			},
		],
		countInStock: 5,
		commonRating: 4.3,
	},
	{
		name: '21.5-inch iMac with Retina 4K display',
		image: '/images/imac_4k.png',
		productName: 'iMac 21 inch',
		brand: 'Apple',
		category: 'imac',
		model: 'M1',
		characteristics: {
			display: '21.5-inch Retina 4K display',
			processor: 'M1 chip with 8-core CPU, 8-core GPU, and 16-core Neural Engine',
			memory: {
				options: [
					{ name: '8GB of unified memory', price: 0 },
					{ name: '16GB of unified memory', price: 100 },
					{ name: '32GB of unified memory', price: 200 },
				],
				default: '16GB of unified memory',
			},
			storage: {
				options: [
					{ name: '256GB SSD', price: 0 },
					{ name: '512GB SSD', price: 200 },
					{ name: '1TB SSD', price: 400 },
					{ name: '2TB SSD', price: 600 },
				],
				default: '512GB SSD',
			},
			graphics: 'AMD Radeon Pro 5300 graphics with 4GB of GDDR6 memory',
			operatingSystem: 'macOS',
			camera: '1080p FaceTime HD camera',
			price: 1499.99,
			availability: true,
			description:
				'The 21.5-inch iMac with Retina 4K display features a stunning 4096 x 2304 resolution, powerful 8th-generation Intel Core processors, and high-performance graphics.',
		},
		reviews: [
			{
				customerName: 'Emily Davis',
				review: 'I am extremely pleased with my iMac purchase. It is fast and reliable.',
				rating: 5,
			},
			{
				customerName: 'Michael Brown',
				review: 'The iMac is a great computer, but I wish it had more storage space.',
				rating: 4,
			},
			{
				customerName: 'Jessica Garcia',
				review: 'I am very happy with my iMac. It was easy to set up and runs smoothly.',
				rating: 4,
			},
		],
		countInStock: 5,
		commonRating: 4.2,
	},
	{
		name: 'iMac Pro',
		image: '/images/imacpro.png',
		productName: 'iMac Pro',
		brand: 'Apple',
		category: 'imac',
		model: 'M1',
		characteristics: {
			display: 'iMac Pro retina 5k',
			processor: 'M1 chip with 8-core CPU, 8-core GPU, and 16-core Neural Engine',
			memory: {
				options: [
					{ name: '32GB of unified memory', price: 0 },
					{ name: '64GB of unified memory', price: 300 },
					{ name: '128GB of unified memory', price: 600 },
				],
				default: '64GB of unified memory',
			},
			storage: {
				options: [
					{ name: '1TB SSD', price: 0 },
					{ name: '2TB SSD', price: 500 },
					{ name: '4TB SSD', price: 1000 },
				],
				default: '2TB SSD',
			},
			graphics: 'AMD Radeon Pro 5500 XT graphics with 16GB of GDDR6 memory',
			operatingSystem: 'macOS',
			camera: '1080p FaceTime HD camera',
			price: 4999.99,
			availability: true,
			description:
				'The iMac Pro is a powerful all-in-one desktop computer designed for professional use, featuring a M1 chip, high-performance graphics, and a range of storage and memory options.',
		},
		reviews: [
			{
				customerName: 'John Doe',
				review:
					'The iMac Pro is a beast of a machine. The performance is incredible and the display is stunning.',
				rating: 5,
			},
			{
				customerName: 'Jane Smith',
				review:
					'I am very happy with my iMac Pro purchase. It handles all of my professional needs with ease.',
				rating: 5,
			},
			{
				customerName: 'Bob Johnson',
				review: 'The iMac Pro is an impressive machine, but it is quite expensive.',
				rating: 4,
			},
		],
		countInStock: 5,
		commonRating: 4.7,
	},
	{
		name: 'iPhone 12 Pro Max',
		image: '/images/iphone_12promax.png',
		productName: 'iPhone 12 Pro Max',
		brand: 'Apple',
		category: 'iphones',
		model: 'A2338',
		characteristics: {
			display: '6.7-inch Super Retina XDR display',
			processor: 'A14 Bionic chip',
			memory: {
				options: [
					{ name: '128GB', price: 0 },
					{ name: '256GB', price: 100 },
					{ name: '512GB', price: 200 },
				],
				default: '128GB',
			},
			camera: 'Triple 12MP Ultra Wide, Wide, and Telephoto cameras',
			operatingSystem: 'iOS 14',
			price: 1099.99,
			availability: true,
			description:
				'The iPhone 12 Pro Max features a large 6.7-inch display, the A14 Bionic chip, and a triple-camera system for professional-grade photography.',
		},
		reviews: [
			{
				customerName: 'John Doe',
				review:
					'The iMac Pro is a beast of a machine. The performance is incredible and the display is stunning.',
				rating: 5,
			},
			{
				customerName: 'Jane Smith',
				review:
					'I am very happy with my iMac Pro purchase. It handles all of my professional needs with ease.',
				rating: 5,
			},
			{
				customerName: 'Bob Johnson',
				review: 'The iMac Pro is an impressive machine, but it is quite expensive.',
				rating: 4,
			},
		],
		countInStock: 5,
		commonRating: 4.7,
	},

	{
		name: 'iPhone XR',
		image: '/images/iphone_xr.png',
		productName: 'iPhone XR',
		brand: 'Apple',
		category: 'iphones',
		model: 'A2105',
		characteristics: {
			display: '6.1-inch Liquid Retina HD display',
			processor: 'A12 Bionic chip',
			memory: {
				options: [
					{ name: '64GB', price: 0 },
					{ name: '128GB', price: 50 },
					{ name: '256GB', price: 100 },
				],
				default: '64GB',
			},
			camera: '12MP Wide camera',
			operatingSystem: 'iOS 14',
			price: 599.99,
			availability: false,
			description:
				'The iPhone XR features a 6.1-inch display, the A12 Bionic chip, and a 12MP wide camera. It was discontinued by apple in 2020',
		},
		reviews: [
			{
				customerName: 'John Doe',
				review:
					'The iMac Pro is a beast of a machine. The performance is incredible and the display is stunning.',
				rating: 5,
			},
			{
				customerName: 'Jane Smith',
				review:
					'I am very happy with my iMac Pro purchase. It handles all of my professional needs with ease.',
				rating: 5,
			},
			{
				customerName: 'Bob Johnson',
				review: 'The iMac Pro is an impressive machine, but it is quite expensive.',
				rating: 4,
			},
		],
		countInStock: 5,
		commonRating: 4.7,
	},

	{
		name: 'iPhone SE (2nd generation)',
		image: '/images/iphone_se2.png',
		productName: 'iPhone SE (2nd generation)',
		brand: 'Apple',
		category: 'iphones',
		model: 'A2275',
		characteristics: {
			display: '4.7-inch Retina HD display',
			processor: 'A13 Bionic chip',
			memory: {
				options: [
					{ name: '64GB', price: 0 },
					{ name: '128GB', price: 50 },
					{ name: '256GB', price: 100 },
				],
				default: '64GB',
			},
			camera: '12MP Wide camera',
			operatingSystem: 'iOS 14',
			price: 399.99,
			availability: true,
			description:
				'The iPhone SE (2nd generation) features a compact 4.7-inch display, the A13 Bionic chip, and a 12MP wide camera all in an affordable package.',
		},
		reviews: [
			{
				customerName: 'John Doe',
				review:
					'The iMac Pro is a beast of a machine. The performance is incredible and the display is stunning.',
				rating: 5,
			},
			{
				customerName: 'Jane Smith',
				review:
					'I am very happy with my iMac Pro purchase. It handles all of my professional needs with ease.',
				rating: 5,
			},
			{
				customerName: 'Bob Johnson',
				review: 'The iMac Pro is an impressive machine, but it is quite expensive.',
				rating: 4,
			},
		],
		countInStock: 5,
		commonRating: 4.7,
	},

	{
		name: 'iPhone 8 Plus',
		image: '/images/iphone_8plus.png',
		productName: 'iPhone 8 Plus',
		brand: 'Apple',
		category: 'iphones',
		model: 'A1897',
		characteristics: {
			display: '5.5-inch Retina HD display',
			processor: 'A11 Bionic chip',
			memory: {
				options: [
					{ name: '64GB', price: 0 },
					{ name: '128GB', price: 50 },
					{ name: '256GB', price: 100 },
				],
				default: '64GB',
			},
			camera: 'Dual 12MP Wide-angle and Telephoto cameras',
			operatingSystem: 'iOS 14',
			price: 499.99,
			availability: false,
			description:
				'The iPhone 8 Plus features a 5.5-inch display, the A11 Bionic chip, and a dual 12MP camera system. It was discontinued by apple in 2018',
		},
		reviews: [
			{
				customerName: 'John Doe',
				review:
					'The iMac Pro is a beast of a machine. The performance is incredible and the display is stunning.',
				rating: 5,
			},
			{
				customerName: 'Jane Smith',
				review:
					'I am very happy with my iMac Pro purchase. It handles all of my professional needs with ease.',
				rating: 5,
			},
			{
				customerName: 'Bob Johnson',
				review: 'The iMac Pro is an impressive machine, but it is quite expensive.',
				rating: 4,
			},
		],
		countInStock: 5,
		commonRating: 4.7,
	},
	{
		name: 'iPhone 7',
		image: '/images/iphone_7.png',
		productName: 'iPhone 7',
		brand: 'Apple',
		category: 'iphones',
		model: 'A1660',
		characteristics: {
			display: '4.7-inch Retina HD display',
			processor: 'A10 Fusion chip',
			memory: {
				options: [
					{ name: '32GB', price: 0 },
					{ name: '128GB', price: 100 },
					{ name: '256GB', price: 200 },
				],
				default: '32GB',
			},
			camera: '12MP Wide camera',
			operatingSystem: 'iOS 14',
			price: 399.99,
			availability: false,
			description:
				'The iPhone 7 features a 4.7-inch display, the A10 Fusion chip, and a 12MP wide camera. It was discontinued by apple in 2017',
		},
		reviews: [
			{
				customerName: 'John Doe',
				review:
					'The iMac Pro is a beast of a machine. The performance is incredible and the display is stunning.',
				rating: 5,
			},
			{
				customerName: 'Jane Smith',
				review:
					'I am very happy with my iMac Pro purchase. It handles all of my professional needs with ease.',
				rating: 5,
			},
			{
				customerName: 'Bob Johnson',
				review: 'The iMac Pro is an impressive machine, but it is quite expensive.',
				rating: 4,
			},
		],
		countInStock: 5,
		commonRating: 4.7,
	},
];

export default products;
