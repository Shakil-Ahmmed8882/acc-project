import mongoose from "mongoose";

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
