import dbConnect from "@/lib/dbConnect";
import { handleError } from "@/lib/utils";
import Product from "@/models/Product";


export async function POST(request) {
  await dbConnect();
  try {
    const productData = await request.json();
    const result = await Product.create(productData);

    return new Response(
      JSON.stringify({
        success: true,
        message: "New product created successfully.",
        product: result,
      }),
      { status: 201 }
    );
  } catch (error) {
    const errorResponse = handleError(error);
    return new Response(JSON.stringify(errorResponse), { status: 500 });
  }
}

export async function GET() {
  await dbConnect();
  try {
    const products = await Product.find({});

    return new Response(
      JSON.stringify({
        success: true,
        products: products,
      }),
      { status: 200 }
    );
  } catch (error) {
    const errorResponse = handleError(error);
    return new Response(JSON.stringify(errorResponse), { status: 500 });
  }
}
