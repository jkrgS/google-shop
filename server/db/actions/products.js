const ProductsSchema = require('../models/productsSchema');
const { IProducts } = require('../../interfaces/products');

// check if products exists
const checkProducts = async () => {
  return await ProductsSchema.countDocuments({}, (error, count) =>
    !error ? count : error
  );
};

const insertProducts = async (products = IProducts) => {
  try {
    const productsInsert = products.map((product) => ({
      key: product.id,
      ...product,
    }));
    await ProductsSchema.insertMany(productsInsert);
  } catch (error) {
    console.error(error);
  }
};
module.exports = { checkProducts, insertProducts };
