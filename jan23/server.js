// Importing the express module
const express = require('express');

// Creating an express application instance
const app = express();

// Application-level middleware to log the HTTP method and URL of each incoming request
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Route handler for the root URL
app.get('/', (req, res) => {
  console.log("Inside route handler");
  res.send("Hello, World!"); // Respond with 'Hello, World!' when the root URL is accessed
});

// Starting the server to listen on port 8088
app.listen(8088, () => {
  console.log('Server is running on port 8088'); // Log a message when the server is running
});

// Test URL: http://localhost:8088/