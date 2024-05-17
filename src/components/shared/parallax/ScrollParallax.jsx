import Button from "./Button";
import ParallaxSection from "./ParallaxSection";

const ScrollParallax= () => {
  return (
    <section className="relative">
      <div className="relative ">
      <ParallaxSection page={1}/>
      <ParallaxSection page={2}/>
      <ParallaxSection page={3}/>
      <ParallaxSection page={4}/>
   </div>

    </section>
  );
};

export default ScrollParallax; 