import { render } from "@react-email/render";
import { transporter } from "@/lib/nodeMailler";

export async function sendResetLinkWithNodeMailer({
  emailTemplate,
  recipientEmail,
  fromEmail,
  subject,
}) {
  try {
    const emailHtml = render(emailTemplate);
    const mailOptions = {
      from: fromEmail,
      to: recipientEmail,
      subject: subject,
      html: emailHtml,
    };

    const result = await transporter.sendMail(mailOptions);

    return {
      success: true,
      accepted: result.accepted,
      message: "Email sent successfully, please check your inbox",
    };
  } catch (error) {
    console.error("Error sending reset email:", error);
    return {
      success: false,
      message: `Failed to send reset email: ${error.message}`,
    };
  }
}
