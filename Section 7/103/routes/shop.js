/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
const express = require('express');

const productsController = require('../controllers/products');

const router = express.Router();

router.get('/', productsController.getProducts);

module.exports = router;
