const router = require('express').Router(),
  { getProducts } = require('../../db/actions/products');

router.get('/getProducts', (req, res) => {
  const { from, size, sorting } = req.query;

  // database action
  getProducts({ from, size, sorting: JSON.parse(sorting) })
    .then((products) => res.status(200).send(products))
    .catch((err) => res.status(0).send(err));
});

module.exports = router;
