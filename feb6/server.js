const port = 8080
// Import the express module
const express = require('express') // Express library for creating the server
//Create rest object
const router = express.Router()
const app = express()
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
  })
let requestCount = 0
const RATE_LIMIT = 5
// Router-level middleware to limit requests for "/api" routes
router.use((req, res, next) => {
  requestCount++ // Increment request counter
  if (requestCount > RATE_LIMIT) { // Check if the rate limit is exceeded
    return res.status(429).send('Too many requests') // Respond with Too many requests
  }
  next() // Continue to the next handler
})
router.get('/api/', (req, res) => {
  res.send('Data accessed')
})
app.use(router) // Apply the router

/*
    Steps to Execute:
    >node server
    Open Postman and send multiple GET requests to `http://localhost:8080/api/`.
    After reaching the rate limit (5 requests), you will receive a `429 Too many requests` response.
*/
