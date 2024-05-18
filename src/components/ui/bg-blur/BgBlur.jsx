const BgBlur = ({ isTrue }) => {



  return (
    <div
      className={`fixed -z-10 top-0 right-0 bottom-0 left-0 w-full h-full ${
        isTrue ? "backdrop-blur-[5px] bg-[#0a09035f] visible -z-40" : "invisible -z-50"
      } transition-all  duration-700`}
    ></div>
  );
};

export default BgBlur;
