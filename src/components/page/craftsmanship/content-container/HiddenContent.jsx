const HiddenContent = ({ hiddenContent, isHovered }) => {
  const { title, description } = hiddenContent;
  return (
    <div
      className={`${
        isHovered ? 'opacity-100 visible translate-x-0' : 'invisible opacity-0 translate-x-32'
      } absolute flex flex-col gap-5 transition-all duration-700 justify-center items-center inset-0 bg-[#01000083] w-full h-full z-50`}
    >
      <h2 className="text-white text-4xl leading-10">{title || "Hello world"}</h2>
      <div className="text-white leading-6">{description || "This is the description"}</div>
    </div>
  );
};

export default HiddenContent;
