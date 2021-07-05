const mongoose = require('mongoose');

const ProductsSchema = new mongoose.Schema({
  key: { type: String, unique: true, required: true },
  title: { type: String },
  description: { type: String },
  link: { type: String },
  image_link: { type: String },
  availability: { type: String },
  price: { type: String },
  brand: { type: String },
  gtin: { type: String },
  mpn: { type: String },
  condition: { type: String },
  shipping: { type: String },
  identifier_exists: { type: String },
  google_product_category: { type: String },
  adult: { type: String },
  gender: { type: String },
  color: { type: String },
});

ProductsSchema.index({ key: 1, title: 1 });

const model = mongoose.model('Products', ProductsSchema);

module.exports = model;
