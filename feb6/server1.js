const port = 8080
const express = require('express')
const app = express()
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
  })
app.get('/', (req, res) => {
    res.send('Home Route') // Respond with a message for valid requests
})
app.get('/gedi-route', (req, res) => {
    res.send('Gedi Route') // Respond with a message for valid requests
})
app.get('/kavita', (req, res) => {
    res.send('Hello Kavita Ji.') // Respond with a message for valid requests
})
// 404 Error-handling middleware (handles non-existing routes)
app.use((req, res, next) => {
    res.status(404).send('Page not found') // Respond with 404 for invalid URLs
})


/*
    Steps to Execute:
    >node server
    in postman
        Visit http://localhost:8080/ for the valid route
        Visit http://localhost:8080/invalid-route for a 404 error
*/
