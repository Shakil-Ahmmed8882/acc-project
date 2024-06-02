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
  try {
    // step 1 get product id
    const productId = getSearchParams(request);

    let query = {};

    if (productId) {
      // Step 2: check passed id is valid
      isValidObjectId(productId);

      // Step 3: set query for filter
      query = { _id: productId };
    }



    //step 4: find one product else all products
    const products = await Product.find(query);


    //step 5: send response
    return new Response(
      JSON.stringify({
        success: true,
        message: "Successfully fetched the product",
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
    const productId = getSearchParams(request);

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
    const productId = getSearchParams(request);

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
