

import ParallaxContents from "./ParallaxContents";

import parallaxImg1 from '@/assets/img/home/hero/parallax1.jpg'
import parallaxImg2 from '@/assets/img/home/hero/parallax2.jpg'

const ScrollParallax = () => {
  return (
    <section className="relative">
      <div className="relative ">
        <div className="section text-8xl -mt-44  h-[125vh] bg-[#089193] overflow-hidden sticky top-0">
          <ParallaxContents img={parallaxImg1}/>
        </div>
        <div className="section text-8xl  mt-64 h-[125vh] bg-[#089193] overflow-hidden sticky top-0">
          <ParallaxContents img={parallaxImg2}/>
        </div>
        <div className="section text-8xl mt-64  h-[100vh] bg-[#089193] overflow-hidden sticky top-0">
          <ParallaxContents img={parallaxImg1}/>
        </div>
      </div>
    </section>
  );
};

export default ScrollParallax;
