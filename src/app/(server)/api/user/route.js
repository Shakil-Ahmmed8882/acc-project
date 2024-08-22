import dbConnect from "../../lib/dbConnect";
import { handleError } from "../../lib/utils";
import { UserModel } from "../../models/User";

export async function POST(request) {
  await dbConnect();

  try {
    const { email, password } = await request.json(); // Ensure you're receiving both email and password
    console.log("Received email and password:", email, password); // Debug log

    const isExistEmail = await UserModel.findOne({ email });
    if (isExistEmail) {
      throw new Error("This email already exists");
    }

    const result = await UserModel.create({ email, password }); // Save email and password
    console.log("Email and password saved successfully:", result); // Debug log

    return new Response(
      JSON.stringify({
        success: true,
        message: "Email and password saved successfully",
        data: result,
      }),
      { status: 201, headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("Error saving email and password:", err); // Detailed error log
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
    const result = await UserModel.find();

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
