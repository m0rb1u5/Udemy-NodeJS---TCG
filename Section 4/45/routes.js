/* eslint-disable no-console */
const fs = require('fs');

const requestHandler = (req, res) => {
    const { url, method } = req;
    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            // eslint-disable-next-line no-unused-vars
            fs.writeFile('message.txt', message, (err) => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello from my Node.js</h1></body>');
    res.write('</html>');
    return res.end();
};

// eslint-disable-next-line spaced-comment
/* module.exports = requestHandler;

module.exports = {
    handler: requestHandler,
    someText: 'Some hard code text',
};

module.exports.handler = requestHandler;
module.exports.someText = 'Some hard code text';*/

exports.handler = requestHandler;
exports.someText = 'Some hard code text';
