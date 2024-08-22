 const Title = ({ title, className}) => {
  return (
    <h3
      style={{ letterSpacing: 2 }}
      className={`text-white py-3 border-b-2 border-[#bfbfbf] text-[18px] md:text-[20px] lg:text-[22px] mt-6 md:mt-4 md:mb-9 inline-block font-riviera transition-all duration-300 ${className}`}
    >
      {title}
    </h3>
  );
};

export default Title;
