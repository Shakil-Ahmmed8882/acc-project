import HeroSection from "@/components/shared/hero/Hero";
import heroImag from '@/assets/img/products/acc-cigars/hero.png'
import img2 from "@/assets/img/heritage/world-of-acc/img3.png";

const Hero= () => {
  return (
    <div className="-mt-40">
        <HeroSection 
        imagesArray={[heroImag,img2]} 
        title={'ACC CIGARS'}
         description={'collection'}/>
    </div>
  );
};

export default Hero; 