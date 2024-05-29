const HiddenContent = ({hiddenContent}) => {
  const {title,description} = hiddenContent
  return (
    <div className="absolute flex flex-col gap-5 group-hover:visible group-hover:opacity-100 invisible opacity-0  transition-all duration-700 justify-center items-center inset-0 bg-[#01000083] w-full h-full z-50 ">
      <h2 className="text-white text-4xl leading-10">{title || "Hello world"}</h2>
      <div className="text-white leading-6">{description || " This is the description"}</div>
    </div>
  );
};

export default HiddenContent;
