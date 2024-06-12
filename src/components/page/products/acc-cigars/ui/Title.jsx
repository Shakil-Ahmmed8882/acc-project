const Title = ({ title , ...props }) => {
  return (
    <h3
      style={{ letterSpacing: 2 }}
      className={`${props} text-white py-3 border-b border-[#bfbfbf] text-[18px] md:text-[20px] lg:text-[22px] mt-6 md:mt-4 md:mb-9 inline-block`}
    >
      {title}
    </h3>
  );
};

export default Title;
