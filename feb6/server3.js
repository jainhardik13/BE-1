//initialyse project
//>npm init -y
//download express module
//>yarn add express --save
//Define port
const port = 8080
// Import the express and morgan module
const express = require('express') // Express library for creating the server
const morgan = require('morgan') // Morgan library for logging HTTP requests
//Create rest object
const app = express()
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

// Use morgan for HTTP request logging in 'dev' format
// This will log concise info about each request
app.use(morgan('dev')) // Logs requests with concise info
// Define a simple route for testing
app.get('/', (req, res) => {
    res.send('Hello World') // Respond to a GET request with a message
})

/*
    Steps to Execute:
    >node server
    Visit   http://localhost:8080/ 
            AND
            http://localhost:8080/hello to see the logs in the console
*/
