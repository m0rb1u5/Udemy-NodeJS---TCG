/* eslint-disable no-console */
const http = require('http');

const server = http.createServer(
    // eslint-disable-next-line no-unused-vars
    (req, res) => {
        console.log(req);
        process.exit();
    },
);

server.listen(3000);
