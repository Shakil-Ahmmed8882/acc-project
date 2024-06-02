import { toast } from "sonner";

import React, { useState } from "react";
import sendEmail from "@/app/(server)/lib/sendEmail";

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
    // console.log(formData);

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
        // Handle success (e.g., clear the form, show a success message)
      },
      (error) => {
        console.error("Failed to send email.", error);
        // Handle error (e.g., show an error message)
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
      <div className="mb-4">
        <input
          className="w-full pl-4 p-3 text-lg bg-[#1C1C1C] text-gray-200 border-b-2 border-gray-600 rounded"
          id="firstName"
          type="text"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <input
          className="w-full pl-4 p-3 text-lg bg-[#1C1C1C] text-gray-200 border-b-2 border-gray-600 rounded"
          id="lastName"
          type="text"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <div className="flex">
          <select
            className="pl-4 p-3 text-lg bg-[#1C1C1C] text-gray-200 border-b-2 border-gray-600 rounded-l"
            id="countryCode"
            value={formData.countryCode}
            onChange={handleChange}
          >
            <option value="+1">+1</option>
          </select>
          <input
            className="flex-grow p-2 bg-[#1C1C1C] text-gray-200 border-b-2 border-gray-600 rounded-r"
            id="phone"
            type="text"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="mb-4">
        <input
          className="w-full pl-4 p-3 text-lg bg-[#1C1C1C] text-gray-200 border-b-2 border-gray-600 rounded"
          id="email"
          type="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <textarea
          className="w-full pl-4 p-3 text-lg bg-[#1C1C1C] text-gray-200 border-b-2 border-gray-600 rounded"
          id="enquiry"
          placeholder="Type Enquiry Here"
          rows="4"
          value={formData.enquiry}
          onChange={handleChange}
        />
      </div>

      <div className="mb-8">
        <h2 className="text-white text-lg mb-4">
          Stay Informed with Achievement Cigar Company :
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
        {/* <a href="#" className="text-blue-400 hover:underline">
          More Information
        </a> */}
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
function TermsCondition() {
  const [selectedOption, setSelectedOption] = useState(null);

  const onValueChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <>
      <div className="flex mt-8">
        <div className="relative mt-2 ">
          <input
            className="w-4 h-4 transition-colors bg-inherit border rounded-full appearance-none cursor-pointer peer border-light-white-clr checked:border-yellow-500 checked:bg-yellow-200 checked:hover:border-yellow-600 checked:hover:bg-yellow-300 focus:outline-none checked:focus:border-yellow-700 checked:focus:bg-yellow-400  focus-visible:outline-none disabled:cursor-not-allowed disabled:border-slate-100 disabled:bg-slate-50"
            type="radio"
            value="huey2"
            id="huey2"
            name="drone2"
            onChange={onValueChange}
          />
          <svg
            className="absolute inset-0  w-4 h-4 transition-all duration-300 scale-50 opacity-0 pointer-events-none fill-yellow-500 peer-checked:scale-100 peer-checked:opacity-100 peer-hover:fill-yellow-600 peer-focus:fill-yellow-700 peer-disabled:cursor-not-allowed"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-labelledby="title-04 description-04"
            role="graphics-symbol"
          >
            <title id="title-04">Circle Shape</title>
            <desc id="description-04">
              Circle shape to indicate whether the radio input is checked or
              not.
            </desc>
            <circle cx="8" cy="8" r="4" />
          </svg>
        </div>

        <label for="remember-me" class="ml-3 block text-lg text-gray-400">
          By opting in, you&apos;ll get marketing communications about
          ACC&apos;s offerings. Expect personalized content based on your
          interests, preferences, and interactions with us. You may also receive
          invitations to provide feedback on your experience.
        </label>
      </div>
    </>
  );
}
