const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req);
    if (req.url === '/') {
        res.write('Hello There....!');
        res.end();
    } else if (req.url === '/name') {
        res.write('abhilash');
        res.end();
    }
});

server.on('connection', () => {
    console.log('new request ');
});

server.listen(50051);
console.log('listening on PORT:50051');
