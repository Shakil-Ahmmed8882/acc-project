import useGlobalContext from "@/hooks/useGlobalContext";

const BgOverlay = () => {

  const {isBrandHover} = useGlobalContext()

  


  return (
    <div
      className={`fixed -z-10 top-0 right-0 bottom-0 left-0 w-full h-full ${
        isBrandHover ? "h-screen bg-[red] mix-blend-multiply visible -z-40" : "invisible !-z-50 h-0"
      } transition-all  duration-700`}
    ></div>

  );
};

export default BgOverlay;
