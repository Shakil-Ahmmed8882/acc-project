"use client ";
import Banner from "@/components/page/home/banner/Banner";
import Craftsmanship from "@/components/page/home/CraftmanShip/CraftmanShip";
import FlagshipProducts from "@/components/page/home/flagshipProducts/FlagshipProducts";
import AccLifestyle from "@/components/page/home/lifeStyle/LifeStyle";


// cigar
import cigar1 from "@/assets/img/home/parallax/cigar1.jpg";
import cigar2 from "@/assets/img/home/parallax/cigar2.jpg";
import cigar3 from "@/assets/img/home/parallax/cigar3.jpg";
import cigar4 from "@/assets/img/home/parallax/cigar4.jpg";
import cigar5 from "@/assets/img/home/parallax/cigar5.png";

// sprits
import sprit1 from "@/assets/img/home/parallax/sprit1.png";
import sprit2 from "@/assets/img/home/parallax/sprit2.jpg";
import sprit3 from "@/assets/img/home/parallax/sprit3.jpg";
import sprit4 from "@/assets/img/home/parallax/sprit4.jpg";

// accessories 
import accessories1 from "@/assets/img/home/parallax/accessories1.jpg";


import Newsletter from "@/components/shared/newsletter/Newsletter";
import AnimatedVideo from "@/components/shared/animation/animated-video/AnimatedVideo";

const Home = () => {
  const parallaxOneBgImages = [cigar1, cigar2, cigar3, cigar4, cigar5];
  const parallaxTwoBgImages = [sprit1,sprit2, sprit3, sprit4];
  const parallaxThreeBgImages = [accessories1];

  return (
    <main className="relative z-40 min-h-[calc(100vh)]">
      <Banner
        images={{
          parallaxOneBgImages,
          parallaxTwoBgImages,
          parallaxThreeBgImages,
        }}
      />
      <AnimatedVideo/>

      <FlagshipProducts />

      <AccLifestyle />
      <Craftsmanship />
      <Newsletter />
    </main>
  );
};
export default Home;
