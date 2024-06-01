// import mongoose from "mongoose";

<<<<<<< Updated upstream
const { Schema } = mongoose;


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
  description: { type: String },
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
const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export { ProductType, Category, Product };
=======
// const ProductSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   price: {
//     type: Number,
//     required: true,
//   },
//   description: {
//     type: String,
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
// });

// const Product =
//   mongoose.models.Product || mongoose.model("Product", ProductSchema);

// export default Product;




const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productTypeSchema = new Schema({
  name: { type: String, required: true },
  description: String,
});

const categorySchema = new Schema({
  name: { type: String, required: true },
  description: String,
  productType: { type: Schema.Types.ObjectId, ref: 'ProductType', required: true }
});

const productSchema = new Schema({
  name: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  productType: { type: Schema.Types.ObjectId, ref: 'ProductType', required: true },
  category: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
  images: [String]
});

const ProductType = mongoose.model('ProductType', productTypeSchema);
const Category = mongoose.model('Category', categorySchema);
const Product = mongoose.model('Product', productSchema);

module.exports = { ProductType, Category, Product };
>>>>>>> Stashed changes
