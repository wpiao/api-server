'use strict';

const express = require('express');

const app = express();

// Global Middleware
app.use(express.json());

// Export an object with the whole server and a start method to start a server
module.exports = {
  server: app,
  start: port => {
    const PORT = port || process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  }
};