import dbConnect from "../../lib/dbConnect";
import { handleError } from "../../lib/utils";
import { UserModel } from "../../models/User";
import crypto from "crypto";

export async function POST(request) {
  try {
    const { token } = await request.json();
    await dbConnect();

    const hashedToken = crypto.createHash("sha256").update(token).digest("hex");

    const user = await UserModel.findOne({
      resetToken: hashedToken,
      resetTokenExpires: { $gt: Date.now() },
    }).lean(); // Use .lean() for performance if not modifying the document

    if (!user) {
      return createResponse({
        success: false,
        status: 400,
        message: "Invalid token or expired",
      });
    }

    return createResponse({
      success: true,
      status: 200,
      message: "User verified!",
      data: user,
    });
  } catch (err) {
    const errorResponse = handleError(err);
    return createResponse(errorResponse, 500);
  }
}

function createResponse(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
