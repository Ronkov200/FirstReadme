const http = require('http');
const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
    res.write('Hello world!')
    res.end()
});

server.listen(port, hostname, () => {
    console.log('GOTOVO')
});