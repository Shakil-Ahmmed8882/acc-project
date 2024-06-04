const BgOverlay = ({ isTrue }) => {



  return (
    <div
      className={`fixed -z-10 top-0 right-0 bottom-0 left-0 w-full h-full ${
        isTrue ? "h-screen bg-[#0a090376] mix-blend-multiply visible -z-40" : "invisible -z-50 h-0"
      } transition-all  duration-700`}
    ></div>

  );
};

export default BgOverlay;
