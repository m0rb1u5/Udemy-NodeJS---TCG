const products = [];

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
    products.push({ title: req.body.title });
    res.redirect('/');
};

// eslint-disable-next-line no-unused-vars
exports.getProducts = (req, res, next) => {
    res.render('shop', {
        prods: products,
        pageTitle: 'Shop',
        path: '/',
        hasProducts: (products.length > 0),
        activeShop: true,
        productCSS: true,
    });
};
