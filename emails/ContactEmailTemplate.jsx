import React from "react";

const ContactEmailTemplate = ({
  firstName,
  lastName,
  countryCode,
  phone,
  email,
  enquiry,
}) => {
  return (
    <div className="font-sans text-gray-800 p-5 border border-gray-300 rounded max-w-lg mx-auto">
      <p className="text-lg font-bold">New Enquiry Received</p>
      <p>Dear ACC,</p>
      <p>
        We have received a new enquiry from the contact form on our website.
        Here are the details:
      </p>
      <ul className="list-none p-0">
        <li className="mb-2">
          <strong>First Name:</strong> {firstName}
        </li>
        <li className="mb-2">
          <strong>Last Name:</strong> {lastName}
        </li>
        <li className="mb-2">
          <strong>Country Code:</strong> {countryCode}
        </li>
        <li className="mb-2">
          <strong>Phone:</strong> {phone}
        </li>
        <li className="mb-2">
          <strong>Email:</strong> {email}
        </li>
        <li className="mb-2">
          <strong>Enquiry:</strong> {enquiry}
        </li>
      </ul>
      <p className="mt-5 text-sm text-gray-600">Best regards,</p>
      <p className="text-sm text-gray-600">ACC</p>
    </div>
  );
};

export default ContactEmailTemplate;
