import mongoose from "mongoose";

// Prodcut shema 
const ProductSchema = new mongoose.Schema(
  {
    productType: {
      type: String,
      required: [true, 'Product type is required'],
    },
    name: {
      type: String,
      required: [true, 'Product name is required'],
    },
    price: {
      type: Number,
      required: [true, 'Product price is required'],
      min: [0, 'Price cannot be negative'],
    },
    description: {
      type: String,
      required: [true, 'Product description is required'],
    },
    category: {
      type: String,
      required: [true, 'Product category is required'],
    },
    images: {
      type: [String],
      validate: {
        validator: function (array) {
          return array.length > 0;
        },
        message: 'At least one image URL is required',
      },
    },
  },
  { timestamps: true }
);

// Create and export the Product model
const Product = mongoose.models.Product || mongoose.model("Product", ProductSchema);

export default Product;
