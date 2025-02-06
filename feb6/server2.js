const port = 8080
const express = require('express')
const app = express()
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
  })
// Async route that might throw an error
// Simulating an asynchronous operation that throws an error
app.get('/', async (req, res, next) => {
    try {
        // Simulating an asynchronous operation that throws an error
        const result = await Promise.reject('Something went wrong')
        res.send(result)
    } catch (error) {
        next(error) // Pass the error to the error-handling middleware
    }
})
// Error-handling middleware for catching async errors
// Logs the error and sends a 500 status response
app.use((err, req, res, next) => {
    console.error(err) // Log the error for debugging
    res.status(500).send('Internal Server Error') // Respond with a 500 status code
})


/*
    Steps to Execute:
    >node server
    Visit http://localhost:8080/ to trigger the async error
*/
