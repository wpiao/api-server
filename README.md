# api-server
This lab exercise is for setting up a basic Express server for API routes. I set up 9 API routes and 5 middlewares. This Express server doesn't connect to database, so the response from API routes are all generic message. This server also doesn't connect to the front end interface, so use postman or swagger or other tools to interact with this server.

### How to use this app
  1. Fork and clone this repository to your local.
  2. Run command 'npm install' to install all required dependencies.
  3. Run command 'npm start' or 'npm run start' to start the server.
  4. Use postman or swagger or other tools to interact with API routes.
  5. Run command 'npm run test' to test the code.

### API routes
  * End point: /products
    * GET: /products - get all products
    * POST: /products - create a product
    * PUT: /products - update a product
    * DELETE: /products/:productId - delete a product with specific productId
  * End point: /categories
    * GET: /categories - get all categories
    * POST: /categories - create a category
    * PUT: /categories - update a category
    * DELETE: /categories/:categoryId - delete a category with specific categoryId
  * End point: all other undefined routes - handle by notFoundHandler middleware and send 404 status code to client

### Middlewares
  * express.json(): get proper formatted req.body
  * timestamp: add timestamp to req object
  * logger: track every request and log method, path, and time to terminal for each request
  * errHandler: handle server side errors and send it back to the client
  * notFoundHandler: handle the request on all undefined routes and send 404 status code to the client
