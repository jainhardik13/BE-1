const port = 8080
// Import the express module
const express = require('express') // Express library for creating the server
//Create rest object
const app = express()
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
  })

// Application-level middleware to require authentication for all routes
app.use((req, res, next) => {
    if (!req.headers.authorization) { // Check if authorization header exists
        return res.status(403).send('Forbidden') // Respond with Forbidden if no authorization
    }
    next() // Pass control to the next middleware or route handler
})


app.get('/', (req, res) => {
    res.send('Hello, World!')
})

/*
Steps to Execute:
    >node server
    Open Postman and make a GET request to 'http://localhost:8080/' . 
    - Without any `Authorization` header, the response should be `403 Forbidden`.
    - Add an `Authorization` header with any value to see the successful response.
*/
