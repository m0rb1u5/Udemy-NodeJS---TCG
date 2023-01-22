/* eslint-disable no-console */

const requestHandler = (req, res) => {
    const { url, method } = req;
    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Task 1</title></head>');
        res.write('<body>');
        res.write('<h1>Task 1: Time to Practice</h1>');
        res.write('<h2>See the users page: <a href="/users">link</a></h2>');
        res.write('<h2>Create a user');
        res.write('<h3>Username: ');
        res.write('<form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form>');
        res.write('</h3></h2>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/users') {
        res.write('<html>');
        res.write('<head><title>Task 1</title></head>');
        res.write('<body>');
        res.write('<h1>Task 1: Time to Practice</h1>');
        res.write('<ul><li>User 1</li></ul>');
        res.write('<ul><li>User 2</li></ul>');
        res.write('<ul><li>User 3</li></ul>');
        res.write('<ul><li>User 4</li></ul>');
        res.write('<ul><li>User 5</li></ul>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/create-user' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            console.log(message);
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        });
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Task 1</title></head>');
    res.write('<body>');
    res.write('<h1>Task 1: Time to Practice</h1>');
    res.write('<h2>Return to the home: <a href="/">link</a></h2>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
};

exports.handler = requestHandler;
