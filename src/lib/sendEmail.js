// emailService.js

import emailjs from "@emailjs/browser";

/**
 * Sends an email using EmailJS.
 *
 * @param {Object} templateParams - The parameters to be passed to the email template.
 * @param {Function} onSuccess - Callback function to be called on successful email sending.
 * @param {Function} onFailure - Callback function to be called on failure.
 */
const sendEmail = (templateParams, onSuccess, onFailure) => {
  const serviceID = "service_bvibghn";
  const templateID = "template_sbfb9sc";
  const userID = "VPi2ac1VouHqcj81G";

  emailjs
    .send(serviceID, templateID, templateParams, userID)
    .then((response) => {
      console.log("Email successfully sent!", response.status, response.text);
      onSuccess(response);
    })
    .catch((err) => {
      console.error("Failed to send email.", err);
      onFailure(err);
    });
};

export default sendEmail;
