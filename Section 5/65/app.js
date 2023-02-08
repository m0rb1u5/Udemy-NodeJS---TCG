/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

// eslint-disable-next-line no-unused-vars
app.use('/add-product', (req, res, next) => {
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
});

// eslint-disable-next-line no-unused-vars
app.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

// eslint-disable-next-line no-unused-vars
app.use('/', (req, res, next) => {
    res.send('<h1>Hello from Express!</h1>');
});

app.listen(3000);
