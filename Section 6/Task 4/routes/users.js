/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
const express = require('express');

const router = express.Router();

const users = [];

// eslint-disable-next-line no-unused-vars
router.get('/users', (req, res, next) => {
    res.render('users', { usrs: users, pageTitle: 'Users', path: '/users' });
});

// eslint-disable-next-line no-unused-vars
router.get('/', (req, res, next) => {
    res.render('index', { pageTitle: 'Index', path: '/' });
});

// eslint-disable-next-line no-unused-vars
router.post('/add-user', (req, res, next) => {
    users.push({ title: req.body.title });
    res.redirect('/users');
});

module.exports = router;
