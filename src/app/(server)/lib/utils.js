import mongoose from "mongoose";
import Product from "../models/Product";

// Logs errors and returns a standardized error response
export function handleError(error) {
  console.error(error);
  return { success: false, message: error.message || "An unexpected error occurred" };
}

// Extracts the 'search' parameter from the request URL
export const getSearchParams = (req,q) => {
  const url = new URL(req.url);
  return url.searchParams.get(q);
};

// Checks if a product exists by ID, throws an error if not found
export async function checkProductExists(productId) {
  const product = await Product.findById(productId);
  if (!product) throw new Error("Product not found");
  return product;
}

// Validates if the given ID is a valid MongoDB ObjectId
export function isValidObjectId(id) {
  return mongoose.Types.ObjectId.isValid(id);
}