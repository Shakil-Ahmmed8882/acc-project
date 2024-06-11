const Input = ({ formData, handleChange }) => {
  return (
    <>
      <div className="relative mb-4 w-full">
        <input
          className="peer h-[50px] border-b w-full bg-[#1C1C1C] text-[#ffffff] px-2 pt-4 focus:outline-none"
          id="firstName"
          type="text"
          placeholder=""
          value={formData["firstName"]}
          onChange={handleChange}
        />
        <label
          className="absolute left-2 top-0.5 text-xs text-[#fafafa80] duration-300 peer-placeholder-shown:left-2 peer-placeholder-shown:top-[50%] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-2 peer-focus:top-0.5 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-[#fafafa]"
          htmlFor="firstName"
        >
          First Name
        </label>
      </div>
    </>
  );
};

export default Input;
