import HeroSection from "@/components/shared/hero/Hero";
import heroImag from "@/assets/img/products/acc-cigars/hero.png";
import img2 from "@/assets/img/heritage/world-of-acc/img3.png";
import ScrollParallax from "@/components/shared/parallax/ScrollParallax";
import img1 from "@/assets/img/shared/parallax/p1bg1.jpg";
// import img2 from "@/assets/img/shared/parallax/p2bg2.jpg";
import parallaxImg1 from "@/assets/img/home/parallax/parallax1.png";
import parallaxImg2 from "@/assets/img/home/parallax/parallax2.png";
import parallaxImg3 from "@/assets/img/home/parallax/parallax3.png";
const Hero = ({ title }) => {
  const parallaxOneBgImages = [parallaxImg1, img1];
  const parallaxTwoBgImages = [parallaxImg2, img2];
  const parallaxThreeBgImages = [parallaxImg3, img2];

  return (
    <div className="-mt-40">
      <HeroSection 
        imagesArray={[heroImag,img2]} 
        title={title}
         description={'collection'}/>
    </div>
  );
};

export default Hero;
