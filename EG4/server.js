const port = 8080
// Import the express module
const express = require('express') // Express library for creating the server
//Create rest object
const app = express()
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
  })

// Application-level middleware to parse incoming JSON request bodies
// app.use(express.json()) // Parse JSON body


app.post('/', (req, res) => {
  res.send(`Received data: ${JSON.stringify(req.body)}`) // Respond with received data
})

/*
Steps to Execute:
    >node server
    Open Postman, set the request method to `POST`, and use the URL `http://localhost:8080/`.
    In the "Body" section, select `raw`, choose `JSON`, and add data like: 
    {
        "name": "Chitkara University",
        "department": "CSE"
    }
*/
