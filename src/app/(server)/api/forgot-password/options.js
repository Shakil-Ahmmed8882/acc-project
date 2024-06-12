import emailjs from "@emailjs/browser";

const sendEmailServer = async (templateParams) => {
  const emailConfig = {
    serviceID: "service_bvibghn",
    templateID: "template_sbfb9sc",
    userID: "VPi2ac1VouHqcj81G",
  };

  try {
    const response = await emailjs.send(
      emailConfig.serviceID,
      emailConfig.templateID,
      templateParams,
      emailConfig.userID
    );
    console.log("Email successfully sent!", response.status, response.text);
    return response;
  } catch (err) {
    console.error("Failed to send email.", err);
    throw err;
  }
};

export default sendEmailServer;
