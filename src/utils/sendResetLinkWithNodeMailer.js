import { render } from "@react-email/render";
import PasswordResetEmail from "../../emails/PasswordResetEmail";
import { transporter } from "@/lib/nodeMailler";

export async function sendResetLinkWithNodeMailer(name, resetUrl,emailTemplate) {
  try {
    const emailHtml = render(emailTemplate);
    const options = {
      from: "forhadairdrop@gmail.com",
      to: "info@bismillahchinese.com",
      subject: "Password Reset Request Link",
      html: emailHtml,
    };
    const result = await transporter.sendMail(options);
    return {
      success: true,
      accepted: result.accepted,
      message: "Email sent successfully,please check your inbox",
    };
  } catch (emailError) {
    console.error("Error sending reset email:", emailError);
    return { success: false, message: "Failed to send reset email." };
  }
}
