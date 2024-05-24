import ParallaxContents from "./ParallaxContents";
import parallaxImg1 from "@/assets/img/home/parallax/parallax1.png";
import parallaxImg2 from "@/assets/img/home/parallax/parallax2.png";
import parallaxImg3 from "@/assets/img/home/parallax/parallax3.png";
// import parallaxImg2 from "@/assets/img/home/parallax/parallax2";
// import parallaxImg3 from "@/assets/img/home/parallax/parallax3";
import AnimatedVideo from "../animation/animated-video/AnimatedVideo";
import useGlobalContext from "@/hooks/useGlobalContext";


const ScrollParallax = () => {

  const {isMenuOpen} = useGlobalContext()
  return (
    <section>
      <div className="relative ">0
        <div
          className={`  ${isMenuOpen?'-mt-[800px] md:-mt-96':'-mt-96'}   transition-all h-[125vh] duration-1000 section text-8xl bg-[#089193] overflow-hidden sticky top-0`}
        >
          <AnimatedVideo/>
          <ParallaxContents
            img={parallaxImg1}
            title={"LUXURY & VINTAGE CIGARS"}
            page={1}
          />
        </div>
        <div className="section    text-8xl  mt-64 h-screen bg-[#089193] overflow-hidden sticky top-0">
          
          
          <ParallaxContents
            img={parallaxImg2}
            title={"LUXURY & VINTAGE SPIRITS"}
          />
        </div>
        <div className=" section text-8xl mt-64  h-screen bg-[#089193] overflow-hidden sticky top-0">
          <ParallaxContents 
          img={parallaxImg3}
          title={"LUXURY & "}
          page={'last'}
          />
        </div>

        
      </div>
      
    </section>
  );
};

export default ScrollParallax;
