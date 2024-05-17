import Button from "./Button";

const ParallaxContents = () => {
  return (
    <>
      <div className="absolute inset-0 bg-[#0c0505a7] w-full h-full z-30"></div>
      <img
        className="absolute w-full h-full object-cover z-20 filter brightness-"
        src="https://globalintergold.info/_files/70/39/1d/91/e0/70391d91e0b8bf130acf04b2d1eb1cc9.jpg"
        alt=""
      />
      <div className=" absolute inset-0 flex flex-col justify-center items-center text-white z-30">
        <h1 className=" text-3xl md:text-4xl lg:text-5xl font-thin">
          luxury accessories
        </h1>
        <Button />
      </div>
    </>
  );
};

export default ParallaxContents;
