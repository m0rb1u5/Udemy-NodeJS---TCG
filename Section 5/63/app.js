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
app.use('/add-product', (req, res, next) => {
    console.log('In another middleware!');
    res.send('<h1>The "Add Product" Page</h1>');
});

// eslint-disable-next-line no-unused-vars
app.use('/', (req, res, next) => {
    console.log('In another middleware!');
    res.send('<h1>Hello from Express!</h1>');
});

app.listen(3000);
