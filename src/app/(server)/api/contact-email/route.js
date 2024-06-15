import { sendEmail } from "@/utils/sendEmail";
import ContactEmailTemplate from "../../../../../emails/ContactEmailTemplate";
import dbConnect from "../../lib/dbConnect";
import { handleError } from "../../lib/utils";

export async function POST(request) {
  await dbConnect();
  try {
    const { formData } = await request.json();
    const emailOptions = {
      emailTemplate: (
        <ContactEmailTemplate
          firstName={formData?.firstName}
          lastName={formData?.lastName}
          countryCode={formData?.countryCode}
          phone={formData.phone}
          email={formData?.email}
          enquiry={formData?.enquiry}
        />
      ),
      recipientEmail: "info@bismillahchinese.com",
      fromEmail: formData.email,
      subject: "New enquiry from the contact form website",
    };

    const emailRes = await sendEmail(emailOptions);

    return new Response(JSON.stringify(emailRes), { status: 200 });
  } catch (err) {
    const errorResponse = handleError(err);
    console.error("Error:", errorResponse);
    return new Response(JSON.stringify(errorResponse), { status: 500 });
  }
}
