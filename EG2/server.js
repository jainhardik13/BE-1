const port = 8080
// Import the express module
const express = require('express') // Express library for creating the server
//Create rest object
const app = express()
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
  })

// Application-level middleware to set a custom header for all responses
app.use((req, res, next) => {
    res.setHeader('X-Powered-By', 'Hardik') // Set custom header 'X-Powered-By'
    next() // Pass control to the next middleware or route handler
  })
  
  
  app.get('/', (req, res) => {
    res.send('Hello, World!') // Respond with 'Hello, World!'
  })
  
  
  /*
  Steps to Execute:
      >node server
      Open a browser or Postman and navigate to `http://localhost:8080/`.
      Inspect the response headers in the browser's developer tools or in Postman to see the `X-Powered-By: Express` header.
  */
  