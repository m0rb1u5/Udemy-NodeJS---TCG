/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
const express = require('express');

const adminData = require('./admin');

const router = express.Router();

// eslint-disable-next-line no-unused-vars
router.get('/', (req, res, next) => {
    const { products } = adminData;
    res.render('shop', { prods: products, pageTitle: 'Shop', path: '/' });
});

module.exports = router;
