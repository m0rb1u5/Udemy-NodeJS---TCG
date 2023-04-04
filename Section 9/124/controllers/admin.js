const Product = require('../models/product');

// eslint-disable-next-line no-unused-vars
exports.getAddProduct = (req, res, next) => {
    res.render('admin/edit-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        activeAddProduct: true,
        productCSS: true,
    });
};

// eslint-disable-next-line no-unused-vars
exports.postAddProduct = (req, res, next) => {
    const {
        title, imageUrl, price, description,
    } = req.body;
    const product = new Product(title, imageUrl, description, price);
    product.save();
    res.redirect('/');
};

// eslint-disable-next-line no-unused-vars
exports.getEditProduct = (req, res, next) => {
    const editMode = req.query.edit;
    if (!editMode) {
        res.redirect('/');
        return;
    }
    res.render('admin/edit-product', {
        pageTitle: 'Edit Product',
        path: '/admin/edit-product',
        activeAddProduct: true,
        productCSS: true,
        editing: editMode,
    });
};

// eslint-disable-next-line no-unused-vars
exports.getProducts = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render('admin/products', {
            prods: products,
            pageTitle: 'Admin Products',
            path: '/admin/products',
        });
    });
};
