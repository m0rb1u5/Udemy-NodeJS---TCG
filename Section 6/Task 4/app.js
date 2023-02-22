/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const usersRoutes = require('./routes/users');

const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(usersRoutes);

// eslint-disable-next-line no-unused-vars
app.use((req, res, next) => {
    res.status(404).render('404', { pageTitle: 'Page Not Found' });
});

app.listen(3000);