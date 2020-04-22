'use strict';

const express = require('express');

const app = express();

// Global Middleware
app.use(express.json());
app.use(timestamp);
app.use(logger);
app.use('*', notFoundHandler);
app.use(errorHandler);

//------------------------------------
// set up the route
//------------------------------------
// since database is not connected to the server at this time, so I just send back some generic message to client for this lab exercise

// REST operations for /products routes
app.get('/products', (req, res) => {
  res.status(200).send('get all products successfully!');
});

app.post('/products', (req, res) => {
  console.log('my req body: ', req.body);
  res.status(201).send('a products item was created successfully!');
});

app.put('/products', (req, res) => {
  console.log('put req body: ', req.body);
  res.status(201).send('a products item was updated successfully!');
});

app.delete('/products/:productId', (req, res) => {
  const productId = req.params.productId;
  res.status(200).send(`a products item with prodcutId ${productId} was deleted successfully!`);
});

// REST operations for /categories routes
app.get('/categories', (req, res) => {
  res.status(200).send('get all categories successfully!');
});

app.post('/categories', (req, res) => {
  console.log('my req body: ', req.body);
  res.status(201).send('A category was created successfully!');
});

app.put('/categories', (req, res) => {
  console.log('my req body: ', req.body);
  res.status(201).send('A category was updated successfully!');
});

app.delete('/categories/:categoryId', (req, res) => {
  const categoryId = req.params.categoryId;
  res.status(200).send(`A category with categoryId ${categoryId} was deleted successfully!`);
});


//------------------------------------
// middleware
//------------------------------------
function timestamp(req, res, next) {
  req.requestTime = new Date();
  next();
}

function logger(req, res, next) {
  console.log('__REQ__', req.method, req.path, req.requestTime);
  next();
}

// error handler
function errorHandler(err, req, res, next) {
  res.status(500);
  res.statusMessage = 'Server Error';
  res.json({ error: err });
  next();
}

// not found handler
function notFoundHandler(req, res, next) {
  res.status(404);
  res.statusMessage = 'Resource Not Found';
  res.json({ error: 'Not Found' });
  next();
}
// Export an object with the whole server and a start method to start a server
module.exports = {
  server: app,
  start: port => {
    const PORT = port || process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  }
};