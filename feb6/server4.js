const express = require('express'); // Import express module
const cors = require('cors'); // Import cors module
const port = 8080;

// Create rest object
const app = express();

// Use cors middleware to enable cross-origin requests
// This will allow requests from any domain
app.use(cors()); // This enables CORS for all incoming requests

// Define a simple route for testing
app.get('/', (req, res) => {
  res.send('CORS is enabled'); // Respond with a message
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

/*
    Steps to Execute:
    >node server4.js
    Visit http://localhost:8080/ to confirm CORS is working
*/
