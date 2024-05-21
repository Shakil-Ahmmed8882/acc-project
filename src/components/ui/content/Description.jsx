const Description = ({text}) => {
  return (
    <p style={{lineHeight:2}} className="text-[#a4a4a4] text-[15px] sm:text-[16px] md:text-[18px] lg:text-[19px] text-justify">
     {text}
    </p>
  );
};

export default Description;
