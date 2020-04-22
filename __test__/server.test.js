'use strict';

const { server } = require('../lib/server.js');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('API Server: ', () => {
  it('should respond with a 500 if there is a server error', () => {
    return mockRequest.get('/error')
      .then(results => {
        expect(results.status).toBe(500);
      });
  });

  it('should responde with a 404 if the route requested is not defined', () => {
    return mockRequest.get('/errors')
      .then(results => {
        expect(results.status).toBe(404);
      });
  });

  it('GET: /products', () => {
    return mockRequest.get('/products')
      .then(results => {
        expect(results.status).toBe(200);
        expect(results.text).toEqual('get all products successfully!');
      });
  });

  it('POST: /products', () => {
    return mockRequest.post('/products')
      .then(results => {
        expect(results.status).toBe(201);
        expect(results.text).toEqual('a products item was created successfully!');
      });
  });

  it('PUT: /products', () => {
    return mockRequest.put('/products')
      .then(results => {
        expect(results.status).toBe(201);
        expect(results.text).toEqual('a products item was updated successfully!');
      });
  });

  it('DELETE: /products/:productId', () => {
    const productId = 10;
    return mockRequest.delete(`/products/${productId}`)
      .then(results => {
        expect(results.status).toBe(200);
        expect(results.text).toEqual(`a products item with prodcutId ${productId} was deleted successfully!`)
      });
  });

  it('GET: /categories', () => {
    return mockRequest.get('/categories')
      .then(results => {
        expect(results.status).toBe(200);
        expect(results.text).toEqual('get all categories successfully!');
      });
  });

  it('POST: /categories', () => {
    return mockRequest.post('/categories')
      .send({ name: "computer"})
      .then(results => {
        expect(results.status).toBe(201);
        expect(results.text).toEqual('A category was created successfully!');
      });
  });

  it('PUT: /categories', () => {
    return mockRequest.put('/categories')
      .then(results => {
        expect(results.status).toBe(201);
        expect(results.text).toEqual('A category was updated successfully!');
      });
  });

  it('DELETE: /categories/:categoryId', () => {
    const categoryId = 100;
    return mockRequest.delete(`/categories/${categoryId}`)
      .then(results => {
        expect(results.status).toBe(200);
        expect(results.text).toEqual(`A category with categoryId ${categoryId} was deleted successfully!`);
      }); 
  });
});