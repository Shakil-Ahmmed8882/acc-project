import dbConnect from "@/app/(server)/lib/dbConnect";
import { handleError } from "@/app/(server)/lib/utils";
import Product from "@/app/(server)/models/Product";
import { isValidObjectId } from "mongoose";

export async function GET(request) {
  await dbConnect();
  try {
    const url = new URL(request.url);
    const pathname = url.pathname;
    const searchParams = new URLSearchParams(url.search);
    const productType = pathname.split("/").pop();
    const productId = searchParams.get("id");
    let query = {};

    if (productId) {
      if (isValidObjectId(productId)) {
        query = { _id: productId };
      } else {
        throw new Error("Invalid product ID");
      }
    } else if (productType) {
      query = { productType };
    } else {
      throw new Error("Product type or ID must be provided");
    }

    const products = await Product.find(query).sort({ orderCount: -1 });

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

export async function generateStaticParams() {
  const productTypes = ["cigar", "liquor", "accessories", "luxury-storage"];
  const staticParams = productTypes.map((type) => ({
    productType: type,
  }));
  return staticParams;
}
