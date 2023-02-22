/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

// eslint-disable-next-line no-unused-vars
app.use((req, res, next) => {
    res.status(404).render('404', { pageTitle: 'Page Not Found', path: '' });
});

app.listen(3000);
