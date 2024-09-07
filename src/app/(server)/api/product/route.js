

import dbConnect from "../../lib/dbConnect";
import {
  checkProductExists,
  getSearchParams,
  handleError,
  isValidObjectId,
} from "../../lib/utils";
import Product from "../../models/Product";



// create a product
export async function POST(request) {
  await dbConnect();
  try {
    const productData = await request.json();
    const result = await Product.create(productData);

    return new Response(
      JSON.stringify({
        success: true,
        message: `${
          "Product " + productData.name || " New product"
        } is successfully added.`,
        product: result,
      }),
      { status: 201 }
    );
  } catch (error) {
    const errorResponse = handleError(error);
    return new Response(JSON.stringify(errorResponse), { status: 500 });
  }
}

// get a single product or all products
export async function GET(request) {
  await dbConnect();
  const url = new URL(request.url, 'http://localhost')
  try {
    // Step 1: Get product id and search term
    const productId = getSearchParams(request, "id");
    const searchTerm = url.searchParams.get('q') || '';
    const bestSeller = getSearchParams(request, "bestSeller");

    const regex = new RegExp(searchTerm, "i");
    let query = {};

    if (searchTerm) {
      // Use a case-insensitive regex to match productType
      query.$or = [
        { productType: regex },
        { name: regex }
      ];
    }
    if (productId) {
      // If productId is present, fetch a single product
      isValidObjectId(productId);
      query = { _id: productId };
    }  else if (bestSeller) {
      // If bestSeller is present, filter by bestSeller
      query = { bestSeller: bestSeller === "true" };
    }

    // Step 4: Find products based on the query
    const products = await Product.find(query);

    // Step 5: Send response
    return new Response(
      JSON.stringify({
        success: true,
        message: "Successfully fetched the product(s)",
        products,
      }),
      { status: 200 }
    );
  } catch (error) {
    const errorResponse = handleError(error);
    return new Response(JSON.stringify(errorResponse), { status: 500 });
  }
}


// update  product
export async function PATCH(request) {
  await dbConnect();
  
  try {
    // Step 1: Get URL and search query
    const productId = getSearchParams(request, "id");

    // Step 2: check passed id is valid
    isValidObjectId(productId);

    // Step 3: check the the product exist
    await checkProductExists(productId);

    // step 4: get the updated product
    const updatingProduct = await request.json();

    // step 5: find and update
    const newUpdatedProduct = await Product.findOneAndUpdate(
      { _id: productId },
      updatingProduct,
      { new: true }
    );

    // step 6: not updated? throw error
    if (!Object.keys(newUpdatedProduct).length)
      throw new Error("Something went wrong!!");

    // step 7: send response
    return new Response(
      JSON.stringify({
        success: true,
        message: `successfully updated`,
        products: newUpdatedProduct,
      }),
      { status: 200 }
    );
  } catch (error) {
    const errorResponse = handleError(error);
    return new Response(JSON.stringify(errorResponse), { status: 500 });
  }
}

// delete  product
export async function DELETE(request) {
  await dbConnect();
  try {
    // Step 1: Get id
    const productId = getSearchParams(request, "id");

    // Step 2: check is the passed id  valid
    isValidObjectId(productId);

    // step 3: find and delete
    const product = await Product.findOneAndDelete({ _id: productId });

    // step 4: send response
    return new Response(
      JSON.stringify({
        success: true,
        message: `${
          "Product" + product.name || "Product"
        } is successfully deleted`,
        products: product,
      }),
      { status: 200 }
    );
  } catch (error) {
    const errorResponse = handleError(error);
    return new Response(JSON.stringify(errorResponse), { status: 500 });
  }
}