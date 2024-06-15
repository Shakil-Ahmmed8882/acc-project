import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    images: {
      type: [String],
      required: true,
      validate: {
        validator: (images) => images.length > 0,
        message: "Product must have at least one image",
      },
    },
    video: {
      type: String,
    },
    productType: {
      type: String,
      required: true,
      enum: ["cigar", "spirits", "accessories", "luxury-storage"],
      message:
        "Category must be one of the following: Cigar, spirits, Accessories, Luxury storage",
    },
    category: {
      type: String,
      required: true,
    },
    bestSeller: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Product =
  mongoose.models.Product || mongoose.model("Product", ProductSchema);

export default Product;
