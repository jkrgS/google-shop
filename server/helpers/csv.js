const { _csv } = require('../models/_csv');

const removeDuplicates = async (data) => {
  return await data.reduce((acc, current) => {
    const x = acc.find((item) => item.id === current.id);
    if (!x) {
      return acc.concat([current]);
    } else {
      return acc;
    }
  }, []);
};

const prepareCSV = async (data) => {
  const googleProducts = [];
  const googleProduct = {};

  for (let index = 0; index < data.length; index++) {
    const product = data[index];
    for (let i = 0; i < product.length; i++) {
      const element = product[i];

      if (_csv[i]) googleProduct[_csv[i]] = element;

      googleProducts.push({ ...googleProduct });
    }
  }

  return removeDuplicates(googleProducts);
};

module.exports = { prepareCSV };
