const { where } = require('sequelize');
const Product = require('../Models/products');

exports.getProducts = (req, res, next) => {
    Product.findAll().then(products => {
        res.render('shop/product-list', {
            prods: products,
            pageTitle: 'All Products',
            path: '/products'
        });
    }).catch(err => console.log(err));
}

exports.getProduct = (req, res, next) => {
    const prodId = req.params.productId;
    Product.findAll({where: {id: prodId}}).then(products => {
        res.render('shop/product-detail', {
            product: products[0],
            pageTitle: products[0].title,
            path: '/products'
        });
    }).catch(err => console.log(err));
}

exports.getIndex = (req, res, next) => {
    Product.findAll().then(products => {
        res.render('shop/index', {
            prods: products,
            pageTitle: 'Shop',
            path: '/'
        });
    }).catch(err => console.log(err));
}

exports.getCart = (req, res, next) => {
    res.render('shop/cart', {
        path: '/cart',
        pageTitle: 'Your Cart'
    });
}

exports.getOrders = (req, res, next) => {
    res.render('shop/orders', {
        path: '/orders',
        pageTitle: 'Your Orders'
    });
}

exports.getCheckout = (req, res, next) => {
    res.render('shop/checkout', {
        path: '/checkout',
        pageTitle: 'Checkout'
    });
}