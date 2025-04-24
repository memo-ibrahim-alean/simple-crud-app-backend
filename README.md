# Simple CRUD API Backend

A RESTful CRUD API built with **Node.js**, **Express**, and **MongoDB** to manage products. This project was created by following Hitesh Choudhary's [CRUD API Tutorial](https://www.youtube.com/watch?v=_7UQPve99r4).

## Features
- Create, Read, Update, and Delete (CRUD) operations for products.
- MongoDB Atlas for database storage.
- Organized routes and controllers for scalability.
- Tested with Insomnia and Postman.

## Prerequisites
- [Node.js](https://nodejs.org/) (v16 or higher)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account
- [Git](https://git-scm.com/) for cloning the repository
- API testing tool (e.g., [Insomnia](https://insomnia.rest/) or [Postman](https://www.postman.com/))

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/memo-ibrahim-alean/simple-product-crud-api.git
   cd simple-product-crud-api
2. Install dependencies: `npm install`
3. Create a `.env` file in the root directory and add your MongoDB connection string:
   ```
   MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/node-api?retryWrites=true&w=majority
   ```
4. Start the development server:
```
npm run serve
```
## Usage
* The API runs on http://localhost:3000 by default.
* Use an API client like Insomnia or Postman to test the endpoints.
* Example: Send a POST request to http://localhost:3000/api/products with a JSON body:
json
```
{
  "name": "Pizza",
  "quantity": 10,
  "price": 5.99
}
```
## API Endpoints
| Method  | Endpoint             | Description                    |
|---------|----------------------|--------------------------------|
| GET     | `/api/products`      | Retrieve all products          |
| GET     | `/api/products/:id`   | Retrieve a single product by ID|
| POST    | `/api/products`      | Create a new product           |
| PUT     | `/api/products/:id`   | Update a product by ID         |
| DELETE  | `/api/products/:id`   | Delete a product by ID         |
## Technologies Used
* Node.js: JavaScript runtime
* Express: Web framework
* MongoDB: NoSQL database
* Mongoose: MongoDB object modeling
* Nodemon: Development server auto-restart
