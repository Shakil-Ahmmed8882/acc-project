const VerticalAnimatedProgressbar = ({className}) => {
  return (
    <>
      <div
        className={` ${className} w-[2px] bg-[#8d8d8d] left-1/2 h-80 relative z-40 `}
      >
        <div className={`w-[2px] top-0 bg-[#d1d1d1] h-32 animate-progress absolute !z-50 `}></div>
      </div>
    </>
  );
};

export default VerticalAnimatedProgressbar;
