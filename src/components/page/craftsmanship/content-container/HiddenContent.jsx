const HiddenContent = ({ hiddenContent, isHovered }) => {
  const { title, description } = hiddenContent;
  return (
    <div
      className={`
      ${
        isHovered ? 'opacity-100 visible translate-x-0' : 'invisible opacity-0 translate-x-32'
      }
      absolute flex p-3 flex-col gap-5 transition-all duration-700 md:justify-center items-center inset-0 bg-[#01000083] w-full h-full z-50`}
    >
      <div className="text-white p-3 absolute  md:text-center top-32 md:top-44 leading-6 ">
      <h2 className={`text-white text-2xl md:text-3xl lg:text-4xl leading-10 `}>{title || "CRAFTING PROCESS"}</h2>
      <div className={`text-[#d1d1d1] pt-4 md:text-center leading-6 `}>{description || "The initial stage where the soil is prepared for seeding"}</div>
        
      </div>
    </div>
  );
};

export default HiddenContent;
