require('./db/mongoose');
const { checkProducts, insertProducts } = require('./db/actions/products');
const { readCsv } = require('./services/csvReader');

// check if products are already set in db, otherwise insertion takes place
checkProducts()
  .then((count) => {
    if (count) return;
    readCsv().then((products) => insertProducts(products));
  })
  .catch((err) => console.log({ err }));
