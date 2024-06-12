
import { resend } from "@/lib/resend";
import PasswordResetEmail from "../../emails/PasswordResetEmail";

export async function sendResetLink(name, resetUrl) {
  console.log(resetUrl);
  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "forhadairdrop@gmail.com",
      subject: "Password Reset Request Link",
      react: PasswordResetEmail({ name, resetUrl }),
    });
    return { success: true, message: "Email sent successfully,please check your inbox" };
  } catch (emailError) {
    console.error("Error sending reset email:", emailError);
    return { success: false, message: "Failed to send reset email." };
  }
}


