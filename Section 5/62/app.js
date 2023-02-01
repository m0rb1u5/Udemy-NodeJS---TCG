/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
const express = require('express');

const app = express();

// eslint-disable-next-line no-unused-vars
app.use((req, res, next) => {
    console.log('In the middleware!');
    next(); // Allows the request to continue to the next middleware in line
});

// eslint-disable-next-line no-unused-vars
app.use((req, res, next) => {
    console.log('In another middleware!');
    res.send('<h1>Hello from Express!</h1>');
});

app.listen(3000);
