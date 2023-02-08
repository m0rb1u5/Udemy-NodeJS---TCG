/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
const express = require('express');

const router = express.Router();

// eslint-disable-next-line no-unused-vars
router.get('/add-product', (req, res, next) => {
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
});

// eslint-disable-next-line no-unused-vars
router.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;
