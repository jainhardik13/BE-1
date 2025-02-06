const express = require('express'); // Import express module
const app = express();
const router = express.Router(); // Create a router instance
const port = 8081; // Define the port

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

const cache = {};

// Router-level middleware to cache data for "/products" routes
router.use('/products', (req, res, next) => {
    console.log(`Received request for ${req.url}`);
    if (cache[req.url]) { // Check if the request URL is cached
        console.log(`Serving cached data for ${req.url}`);
        return res.json(cache[req.url]); // Serve cached data
    }
    next(); // Continue to the next handler if no cache exists
});

router.get('/products', (req, res) => {
    console.log(`Fetching data for ${req.url}`);
    const products = [{ id: 1, name: 'Product 1' }];
    cache[req.url] = products; // Cache the response data
    res.json(products); // Send the response
});

app.use('/api', router); // Apply the router to routes starting with "/api"

console.log(`Server setup complete. Listening on port ${port}`);

/*
    Steps to Execute:
    >node server
    Open Postman and send a GET request to `http://localhost:8080/api/products`.
    The first request will fetch and cache the data. Subsequent requests (if any) will serve the cached data.
*/
