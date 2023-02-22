const Product = require('../models/product');

// eslint-disable-next-line no-unused-vars
exports.getAddProduct = (req, res, next) => {
    res.render('add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        activeAddProduct: true,
        productCSS: true,
    });
};

// eslint-disable-next-line no-unused-vars
exports.postAddProduct = (req, res, next) => {
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
};

// eslint-disable-next-line no-unused-vars
exports.getProducts = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render('shop', {
            prods: products,
            pageTitle: 'Shop',
            path: '/',
            hasProducts: (products.length > 0),
            activeShop: true,
            productCSS: true,
        });
    });
};
