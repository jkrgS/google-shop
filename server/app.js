require('./db/mongoose');
const { countProducts, insertProducts } = require('./db/actions/products'),
  { readCsv } = require('./services/csvReader'),
  express = require('express'),
  cors = require('cors'),
  routes = require('./routes'),
  app = express();

// allow body parsing
app.use(express.json());
// allow cors requests from any origin and with credentials
app.use(
  cors({
    origin: (origin, callback) => callback(null, true),
    credentials: true,
  })
);
// use routers
app.use(routes);

// check if products are already set in db, otherwise insertion takes place
countProducts()
  .then((count) => {
    if (count) return;
    readCsv().then((products) => insertProducts(products));
  })
  .catch((err) => console.log({ err }));

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}!`);
});
