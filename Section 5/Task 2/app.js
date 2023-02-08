/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
const express = require('express');

const app = express();

// eslint-disable-next-line no-unused-vars
app.use('/', (req, res, next) => {
    console.log('This always run!');
    next();
});

// eslint-disable-next-line no-unused-vars
app.use('/users', (req, res, next) => {
    console.log('Users middleware!');
    res.send('<h1>The "Users" Page</h1><ul><li>User 1</li></ul><ul><li>User 2</li></ul>');
});

// eslint-disable-next-line no-unused-vars
app.use('/', (req, res, next) => {
    console.log('Main middleware!');
    res.send('<h1>Hello from Express!</h1>');
});

app.listen(3000);
