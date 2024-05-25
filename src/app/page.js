'use client '

import BrandWorldAcc from "@/components/page/brands/brandWordAcc/BrandWorldAcc";
import Banner from "@/components/page/home/banner/Banner";
import Craftsmanship from "@/components/page/home/CraftmanShip/CraftmanShip";
import FlagshipProducts from "@/components/page/home/flagshipProducts/FlagshipProducts";
import AccLifestyle from "@/components/page/home/lifeStyle/LifeStyle";
import InitialAnimateContainer from "@/components/shared/animation/framer-motion/initialAnimateContainer";
import Newsletter from "@/components/shared/newsletter/Newsletter";
const Home = () => {
  return (
    
    <InitialAnimateContainer>
      <main className="relative mt-44 z-40 min-h-[calc(100vh)]">
        <Banner />
        <FlagshipProducts />
        <AccLifestyle />
        <Craftsmanship />
        <Newsletter />
        <BrandWorldAcc />
      </main>

    </InitialAnimateContainer>
  
  );
};
export default Home;
