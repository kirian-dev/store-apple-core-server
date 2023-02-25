<h1>Apple Core store app</h1>

This is a sample Store App implemented using Node.js, TypeScript, Express, Bcrypt, JSON Web Token (JWT) and Mongoose.
-The src directory contains all the source code.

* The controllers directory contains the controller classes for handling HTTP requests.

* The middleware directory contains the authentication middleware for verifying JWT tokens.

* The models directory contains the Mongoose schema definitions for the data models.

* The routes directory contains the route definitions for the HTTP endpoints.

* The app.ts file contains the Express application configuration.

* The config.ts file contains the environment configuration (port, database URL, etc.).

* The server.ts file starts the Express server.

* The utils.ts file contains utility functions.

* The .env.example file contains the example environment variables used in the project.

* The package.json file contains the dependencies and scripts for the project.

* The README.md file contains the documentation for the project.

* The tsconfig.json file contains the TypeScript compiler configuration.

## Getting Started

Follow these steps to get started with the project:

1.Clone the repository: 

### `https://github.com/kirian-dev/store-apple-core-server-node.git`

2.Navigate to the project directory: 

## `cd store-apple-core-server-node`

3.Install the dependencies:

### `npm install`

4.Start the development server:

### `npm run start`

The server will start listening on port 3000 by default.

## Usage

### Authentication

The authentication endpoint is used for generating JWT tokens for authenticating requests to the protected endpoints. The /api/auth/login endpoint accepts a POST request with the user's email and password in the request body. If the email and password are valid, the server will respond with a JWT token that should be included in the Authorization header of all subsequent requests to protected endpoints.

### Products

The product endpoints are used for managing the products in the store. The /api/products endpoint accepts a GET request to retrieve all products, and a POST request to create a new product. The /api/products/:id endpoint accepts a GET request to retrieve a specific product, a PUT request to update a product, and a DELETE request to delete a product.

### Orders

The order endpoints are used for managing the orders placed by users. The /api/orders endpoint accepts a GET request to retrieve all orders, and a POST request to create a new order. The /api/orders/:id endpoint accepts a GET request to retrieve a specific order, a PUT request to update an order,
