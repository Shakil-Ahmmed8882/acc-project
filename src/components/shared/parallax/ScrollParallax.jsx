import ParallaxContents from "./ParallaxContents";
import parallaxImg1 from "@/assets/img/home/hero/parallax1.jpg";
import parallaxImg2 from "@/assets/img/home/hero/parallax2.jpg";
import AnimatedVideo from "../animation/animated-video/AnimatedVideo";


const ScrollParallax = () => {
  return (
    <section>
      <div className="relative ">
        <div
          className={`  -mt-96 filter  transition-all h-screen duration-1000 section text-8xl bg-[#089193] overflow-hidden sticky top-0`}
        >
          <AnimatedVideo/>
          <ParallaxContents
            img={parallaxImg1}
            title={"LUXURY & VINTAGE CIGARS"}
          />
        </div>
        <div className="section    text-8xl  mt-64 h-screen bg-[#089193] overflow-hidden sticky top-0">
          
          
          <ParallaxContents
            img={parallaxImg2}
            title={"LUXURY & VINTAGE SPIRITS"}
          />
        </div>
        <div className=" section text-8xl mt-64  h-screen bg-[#089193] overflow-hidden sticky top-0">
          <ParallaxContents img={parallaxImg1} title={"LUXURY & "} />
        </div>
      </div>
    </section>
  );
};

export default ScrollParallax;
