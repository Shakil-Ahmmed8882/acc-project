import React from "react";

const PasswordResetEmail = ({ name, resetUrl }) => {
  console.log(resetUrl,name);
  return (
    <div className="bg-gray-100 p-4">
      <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-4">
          Password Reset Request
        </h2>
        <p>Hi {name},</p>
        <p className="mt-2">
          We received a request to reset your password. Please click link below
          to reset your password:
        </p>
        <div className="text-center mt-4">
          <a
            href={resetUrl}
            className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            {resetUrl}
          </a>
        </div>
        <p className="mt-4">
          If you did not request a password reset, please ignore this email or
          contact support if you have questions.
        </p>
        <p className="mt-4">
          Thank you,
          <br />
          Your Company Team
        </p>
      </div>
    </div>
  );
};

export default PasswordResetEmail;
