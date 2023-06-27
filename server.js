const http = require('node:http');

const server = http.createServer((req, res) => {
    res.end('Hello World');
}).listen(4001, () => console.log('Server running on port 4001'));