const ProductsSchema = require('../models/productsSchema');
const { IProducts } = require('../../interfaces/products');

// check if products exists
const countProducts = async () => {
  return await ProductsSchema.countDocuments({}, (error, count) =>
    !error ? count : error
  );
};

// insert products
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

const getProducts = async (args) => {
  try {
    const { from = 1, size = 10, sorting = { title: 1 } } = args; // deconstruct arguments
    let productsCount; // constant for keeping the count of documents in db

    await countProducts().then((count) => (productsCount = count)); // get the count of documents from existing action
    // get products sorted and paginated
    const products = await ProductsSchema.find({})
      .sort(sorting)
      .skip((+from - 1) * +size)
      .limit(+size)
      .exec();

    return { products, count: productsCount };
  } catch (error) {
    return error;
  }
};

module.exports = { countProducts, insertProducts, getProducts };
