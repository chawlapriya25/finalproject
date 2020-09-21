var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Product = require('../models/product');


/* GET home page. */
router.get('/', function(req, res, next) {

  Product.find(function (err, products) {
    if (err) return console.error(err);
    res.render('index', { title: 'Shopit' , products: products});
  });
});

router.get('/product/:title', function(req,res,next){
    var slug = req.params.title;

    Product.find({ title: slug}, function (err, product) {
      if (err) return console.error(err);
      res.render('product', { title: product[0].title, img: product[0].img, price: product[0].price, desc: product[0].desc});
    });
});

router.get('/contact', function(req,res,next){
  res.render('contact');
});

module.exports = router;