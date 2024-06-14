import { UserModel } from "@/app/(server)/models/User";
import dbConnect from "../../lib/dbConnect";
import { handleError } from "../../lib/utils";
import { sendResetLinkWithNodeMailer } from "@/utils/sendEmail";
import PasswordResetEmail from "../../../../../emails/PasswordResetEmail";
import {
  clearUserResetToken,
  generateResetToken,
  hashResetToken,
  updateUserResetToken,
} from "./options";

export async function POST(request) {
  await dbConnect();
  try {
    const { email } = await request.json();
    if (!email) {
      return new Response(
        JSON.stringify({ success: false, message: "Email is required" }),
        { status: 400 }
      );
    }

    const existingUser = await UserModel.findOne({ email: email });
    if (!existingUser) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "This email does not exist",
        }),
        { status: 404 }
      );
    }

    const resetToken = generateResetToken();
    const hashedResetToken = hashResetToken(resetToken);
    const resetTokenExpires = Date.now() + 3600000; // 1 hour from now
    const resetUrl = `${process.env.BASE_URL_CLIENT}/update-password/${resetToken}`;

    const emailOptions = {
      emailTemplate: (
        <PasswordResetEmail
          name={existingUser?.name || ""}
          resetUrl={resetUrl}
        />
      ),
      recipientEmail: "info@bismillahchinese.com",
      fromEmail: email,
      subject: "Password Reset Request Link",
    };

    const emailRes = await sendResetLinkWithNodeMailer(emailOptions);

    if (emailRes.success) {
      await updateUserResetToken(
        existingUser,
        hashedResetToken,
        resetTokenExpires
      );
    } else {
      await clearUserResetToken(existingUser);
    }

    return new Response(JSON.stringify(emailRes), { status: 200 });
  } catch (err) {
    const errorResponse = handleError(err);
    console.error("Error:", errorResponse);
    return new Response(JSON.stringify(errorResponse), { status: 500 });
  }
}
