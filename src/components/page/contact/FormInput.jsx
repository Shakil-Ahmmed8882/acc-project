import { toast } from "sonner";
import React, { useState } from "react";
import sendEmail from "@/app/(server)/lib/sendEmail";
import TermsCondition from "./TermsCondition";

const FormInput = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    countryCode: "+1",
    phone: "",
    email: "",
    enquiry: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = () => {
    sendEmail(
      formData,
      (response) => {
        console.log("Email successfully sent!", response);
        toast.success("Email successfully sent!", {
          classNames: {
            success: "text-green-400",
            title: "text-black",
          },
        });
      },
      (error) => {
        console.error("Failed to send email.", error);
        toast.error("Failed to send email.", {
          classNames: {
            error: "text-red-400",
            title: "text-red-500",
          },
        });
      }
    );
  };

  const inputFields = [
    { id: "firstName", label: "First Name", type: "text" },
    { id: "lastName", label: "Last Name", type: "text" },
    { id: "phone", label: "Phone Number", type: "text" },
    { id: "email", label: "Email Address", type: "email" },
    { id: "enquiry", label: "Type Enquiry Here", type: "textarea" },
  ];

  return (
    <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
      {inputFields.map((field) => (
        <div key={field.id} className="relative mb-4 w-full">
          {field.type === "textarea" ? (
            <textarea
              className="peer h-[100px] border-b w-full bg-[#1C1C1C] text-gray-200 px-2 pt-4 focus:outline-none"
              id={field.id}
              placeholder=" "
              value={formData[field.id]}
              onChange={handleChange}
              rows="4"
            ></textarea>
          ) : (
            <input
              className="peer h-[50px] border-b w-full bg-[#1C1C1C] text-gray-200 px-2 pt-4 focus:outline-none"
              id={field.id}
              type={field.type}
              placeholder=" "
              value={formData[field.id]}
              onChange={handleChange}
            />
          )}
          <label
            className="absolute left-2 top-0.5 text-xs text-[#fafafa80] duration-300 peer-placeholder-shown:left-2 peer-placeholder-shown:top-[50%] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-2 peer-focus:top-0.5 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-[#fafafa]"
            htmlFor={field.id}
          >
            {field.label}
          </label>
        </div>
      ))}
      <div className="mb-8">
        <h2 className="text-white text-lg mb-4">
          Stay Informed with Achievement Cigar Company:
        </h2>
        <ul className="mb-4 list-disc pl-6 space-y-3">
          <li>
            Receive tailored updates on our latest products, services, and
            events.
          </li>
          <li>
            Choose your preferred method of communication for personalized
            messages.
          </li>
          <li>
            Join exclusive opportunities to share your feedback and shape the
            future of ACC.
          </li>
        </ul>
        <div className="mb-4">
          <TermsCondition />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <button
          className="bg-yellow-500 hover:bg-yellow-600 text-gray-800 font-bold py-2 px-4 rounded-full"
          type="button"
          onClick={handleSubmit}
        >
          SEND REQUEST
        </button>
      </div>
    </form>
  );
};

export default FormInput;

