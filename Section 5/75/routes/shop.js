/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

// eslint-disable-next-line no-unused-vars
router.get('/', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;
