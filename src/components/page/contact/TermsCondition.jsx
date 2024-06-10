import { useState } from "react";

const TermsCondition = () => {
  const [selectedOption, setSelectedOption] = useState(false);
  return (
    <>
      <div className="flex mt-8">
        <div className="relative mt-2">
          <input
            className="w-4 h-4 transition-colors bg-inherit border rounded-full appearance-none cursor-pointer peer border-light-text focus:outline-none focus-visible:outline-none disabled:cursor-not-allowed disabled:border-slate-100 disabled:bg-slate-50"
            type="radio"
            value="huey2"
            id="huey2"
            name="drone2"
            onClick={() => setSelectedOption(!selectedOption)}
          />
          <svg
            className={`absolute mt-[1.5px] inset-0 w-4 h-4 transition-all duration-300 scale-50 opacity-0 pointer-events-none peer-disabled:cursor-not-allowed ${
              selectedOption &&
              "fill-white peer-checked:scale-100 peer-checked:opacity-100 peer-hover:fill-white peer-focus:fill-white"
            }`}
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

        <label
          htmlFor="remember-me"
          className={`ml-3 block text-lg text-[#fafafa80] ${
            selectedOption && "text-[#fafafafa]"
          }`}
        >
          By opting in, you&apos;ll get marketing communications about
          ACC&apos;s offerings. Expect personalized content based on your
          interests, preferences, and interactions with us. You may also receive
          invitations to provide feedback on your experience.
        </label>
      </div>
    </>
  );
};

export default TermsCondition;
