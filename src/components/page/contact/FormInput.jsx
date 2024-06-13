import { toast } from "sonner";
import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/plain.css";
import sendEmail from "@/app/(server)/lib/sendEmail";
import TermsCondition from "./TermsCondition";
import Input from "./Input";

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

  const handlePhoneChange = (value, country) => {
    setFormData((prevData) => ({
      ...prevData,
      phone: value,
      countryCode: country.dialCode,
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

  return (
    <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
      <Input
        formData={formData}
        handleChange={handleChange}
        type="firstName"
        Label="First Name"
      />
      <Input
        formData={formData}
        handleChange={handleChange}
        type="lastName"
        Label="Last Name"
      />
      <div className="relative w-full">
        <PhoneInput
          country={"us"}
          value={formData.phone}
          onChange={(value, country) => handlePhoneChange(value, country)}
          inputClass="peer h-[50px] border-b w-full bg-[#1C1C1C] text-[#ffffff] px-2 focus:outline-none bg-[#1C1C1C]"
          buttonClass="bg-[#1C1C1C] text-[#ffffff]"
          dropdownClass="bg-[#1C1C1C] text-[#ffffff]"
          placeholder=" "
          inputStyle={{
            background: "#1C1C1C",
            color: "#ffffff",
            borderBottom: "1px solid #ffffff",
            borderTop: "0px solid #ffffff",
            borderRight: "0px solid #ffffff",
            width: "100%",
            height: "50px",
          }}
        />
      </div>
      <Input
        formData={formData}
        handleChange={handleChange}
        type="email"
        Label="Email Address"
      />
      <div className="relative mb-4 w-full">
        <textarea
          className="peer h-[100px] border-b w-full bg-[#1C1C1C] text-[#ffffff] px-2 pt-4 focus:outline-none"
          id="enquiry"
          placeholder=" "
          value={formData["enquiry"]}
          onChange={handleChange}
          rows="4"
        ></textarea>
        <label
          className="absolute left-2 top-0.5 text-xs text-[#fafafa80] duration-300 peer-placeholder-shown:left-2 peer-placeholder-shown:top-[50%] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-2 peer-focus:top-0.5 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-[#fafafa]"
          htmlFor="enquiry"
        >
          Type Enquiry Here
        </label>
      </div>
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
          onClick={handleSubmit}
          className="group text-[#8C4C24]  bg-pale-gold hover:bg-[#F6DF65]  transition-all duration-500 text-sm md:text-base   py-2 md:py-4 px-8 md-16 lg:px-20 rounded-full border"
        >
          <span className="flex group items-center justify-center transition-all duration-500 hover:gap-4 gap-2">
            SEND REQUEST
          </span>
        </button>
      </div>
    </form>
  );
};

export default FormInput;
