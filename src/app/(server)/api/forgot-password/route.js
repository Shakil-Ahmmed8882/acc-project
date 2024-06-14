import { UserModel } from "@/app/(server)/models/User";
import dbConnect from "../../lib/dbConnect";
import { handleError } from "../../lib/utils";
import crypto from "crypto";
import { sendResetLink } from "@/utils/sendRestLink";
import { sendResetLinkWithNodeMailer } from "@/utils/sendResetLinkWithNodeMailer";

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
    const passwordResetToken = hashResetToken(resetToken);
    const passwordResetExpires = Date.now() + 3600000; // 1 hour from now
    const resetUrl = `${process.env.BASE_URL_CLIENT}/update-password/${resetToken}`;

    const resetMsg = {
      name: existingUser.name || "User",
      url: resetUrl,
    };









    // const emailRes = await sendResetLink(resetMsg.name, resetUrl);
    const emailRes = await sendResetLinkWithNodeMailer(resetMsg.name, resetUrl);
console.log(emailRes);
    if (emailRes.success) {
      await updateUserResetToken(
        existingUser,
        passwordResetToken,
        passwordResetExpires
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

function generateResetToken() {
  return crypto.randomBytes(20).toString("hex");
}

function hashResetToken(resetToken) {
  return crypto.createHash("sha256").update(resetToken).digest("hex");
}

async function updateUserResetToken(user, token, expires) {
  user.resetToken = token;
  user.resetTokenExpires = new Date(expires);
  await user.save();
}

async function clearUserResetToken(user) {
  user.resetToken = undefined;
  user.resetTokenExpires = undefined;
  await user.save();
}
