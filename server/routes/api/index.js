const router = require('express').Router(),
  products = require('./products');

router.use('/', products);

module.exports = router;
