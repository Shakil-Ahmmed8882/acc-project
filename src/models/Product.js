const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productTypeSchema = new Schema({
  name: { type: String, required: true },
});

const categorySchema = new Schema({
  name: { type: String, required: true },
  productType: {
    type: Schema.Types.ObjectId,
    ref: "ProductType",
    required: true,
  },
});

const productSchema = new Schema({
  name: { type: String, required: true },
  description: String,
  images: { type: [String], required: true },
  productType: {
    type: Schema.Types.ObjectId,
    ref: "ProductType",
    required: true,
  },
  category: { type: Schema.Types.ObjectId, ref: "Category", required: true },
});

const ProductType = mongoose.model("ProductType", productTypeSchema);
const Category = mongoose.model("Category", categorySchema);
const Product = mongoose.model("Product", productSchema);

module.exports = { ProductType, Category, Product };
