const port = 8080
// Import the express module
const express = require('express') // Express library for creating the server
//Create rest object
const app = express()


app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
// Application-level middleware to log the HTTP method and URL of each incoming request
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`) // Log the request method and URL
    next() // Pass control to the next middleware or route handler
})
  
  app.get('/', (req, res) => {
    res.send('Hello, World!') // Respond with 'Hello, World!' when the root URL is accessed
})

app.get('/hardik', (req, res) => {
    res.send('Hello, Hardik') // Respond with 'Hello, World!' when the root URL is accessed
})
  