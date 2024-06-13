import dbConnect from "../../lib/dbConnect";
import Email from "../../models/Email";
import { handleError } from "../../lib/utils"; 

export async function POST(request) {
  await dbConnect();

  try {
    const { email } = await request.json();
    const isExistEmail = await Email.findOne({ email });
    if (isExistEmail) {
      throw new Error("This email already exists");
    }

    const result = await Email.create({ email });

    return new Response(
      JSON.stringify({
        success: true,
        message: "Email saved successfully",
        data: result,
      }),
      { status: 201, headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    const errorResponse = handleError(err);
    return new Response(JSON.stringify(errorResponse), {
      status: errorResponse.status || 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function GET() {
  await dbConnect();

  try {
    const result = await Email.find();

    return new Response(
      JSON.stringify({
        success: true,
        message: "Emails retrieved successfully",
        data: result,
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    const errorResponse = handleError(err);
    return new Response(JSON.stringify(errorResponse), {
      status: errorResponse.status || 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
