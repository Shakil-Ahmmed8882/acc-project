import ParallaxContents from "./ParallaxContents";

const ScrollParallax = () => {
  return (
    <section className="relative">
      <div className="relative ">
        <div className="section text-8xl -m-64 h-[125vh] bg-[#089193] overflow-hidden sticky top-0">
          <ParallaxContents />
        </div>
        <div className="section text-8xl mt-64 h-[125vh] bg-[#089193] overflow-hidden sticky top-0">
          <ParallaxContents />
        </div>
        <div className="section text-8xl mb-80  h-[100vh] bg-[#089193] overflow-hidden sticky top-0">
          <ParallaxContents />
        </div>
      </div>
    </section>
  );
};

export default ScrollParallax;
