// import http module

let http = require('http')
let server = http.createServer((req, res) => {

    // set MIME type
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write('<h1>Welcome to HTTP server</h1>')
    res.write('<p> My name is Lakhan</p>')
    res.end()
})

// asign port no
server.listen(8080)
console.log('Server listening port no 8080')
// node server
// url http://localhost:8080/