const http = require('node:http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });

    if (req.url === '/product') {
        res.end(JSON.stringify({
            message: 'product page',
        }));
    }

    if (req.url === '/users') {
        res.end(JSON.stringify({
            message: 'users page',
        }));
    }

    res.end(JSON.stringify({
        message: 'Not found',
    }));
}).listen(4001, () => console.log('Server running on port 4001'));