'use client '
import Banner from "@/components/page/home/banner/Banner";
import Craftsmanship from "@/components/page/home/CraftmanShip/CraftmanShip";
import FlagshipProducts from "@/components/page/home/flagshipProducts/FlagshipProducts";
import AccLifestyle from "@/components/page/home/lifeStyle/LifeStyle";

import img1 from '@/assets/img/shared/parallax/p1bg1.jpg'
import img2 from '@/assets/img/shared/parallax/p2bg2.jpg'
import parallaxImg1 from "@/assets/img/home/parallax/parallax1.png";
import parallaxImg2 from "@/assets/img/home/parallax/parallax2.png";
import parallaxImg3 from "@/assets/img/home/parallax/parallax3.png";

// import InitialAnimateContainer from "@/components/shared/animation/framer-motion/initialAnimateContainer";
import Newsletter from "@/components/shared/newsletter/Newsletter";
const Home = () => {

  const parallaxOneBgImages = [parallaxImg1,img1]
  const parallaxTwoBgImages = [parallaxImg2,img2]
  const parallaxThreeBgImages = [parallaxImg3,img2]


  return (
    
    // <InitialAnimateContainer>
      <main className="relative mt-44 z-40 min-h-[calc(100vh)]">
        <Banner images={{parallaxOneBgImages,parallaxTwoBgImages,parallaxThreeBgImages}}/>
        <FlagshipProducts />
        <AccLifestyle />
        <Craftsmanship />
        <Newsletter />
      </main>

    // </InitialAnimateContainer>
  
  );
};
export default Home;
