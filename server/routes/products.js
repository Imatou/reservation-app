const express = require('express');
const router = express.Router();
const Product = require('../model/products');

router.get('', function (req, res) {
  Product.find({}, function (err, foundProducts) {
    res.json(foundProducts);
  });
})

router.get('/:productId', function (req, res) {
  const productId = req.params.productId;
  Product.findById(productId, function (err, foundProduct) {
    if (err) {
      return res.status(422).send({ errors: [{ title: 'Product error', default: 'Product not found' }] });
    }
    return res.json(foundProduct);
  });
})

module.exports = router;
