import dbConnect from "../../lib/dbConnect";
import { handleError } from "../../lib/utils";
import { UserModel } from "../../models/User";

/**
 * Handles the POST request to update a user's password.
 *
 * @param {Request} request - The incoming request object containing the user's email and new password.
 * @returns {Promise<Response>} - A promise that resolves to a Response object indicating the result of the operation.
 */
export async function POST(request) {
  const { email, password } = await request.json();

  await dbConnect();

  try {
    const existingUser = await UserModel.findOne({ email });

    existingUser.password = password;
    existingUser.resetToken = undefined;
    existingUser.resetTokenExpires = undefined;
    await existingUser.save();

    return Response.json({
      success: true,
      status: 200,
      message: "User password updated",
      data: existingUser,
    });
  } catch (err) {
    const errorResponse = handleError(err);
    return new Response(JSON.stringify(errorResponse), { status: 500 });
  }
}
