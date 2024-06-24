"use client ";
import Banner from "@/components/page/home/banner/Banner";
import Craftsmanship from "@/components/page/home/CraftmanShip/CraftmanShip";
import FlagshipProducts from "@/components/page/home/flagshipProducts/FlagshipProducts";
import AccLifestyle from "@/components/page/home/lifeStyle/LifeStyle";


// cigar
import cigar1 from "@/assets/img/home/parallax/cigar1.webp";
import cigar2 from "@/assets/img/home/parallax/cigar2.webp";
import cigar3 from "@/assets/img/home/parallax/cigar3.webp";
import cigar4 from "@/assets/img/home/parallax/cigar4.webp";
import cigar5 from "@/assets/img/home/parallax/cigar5.webp";

// sprits
import sprit1 from "@/assets/img/home/parallax/spirit1.webp";
import sprit2 from "@/assets/img/home/parallax/spirit2.webp";
import sprit3 from "@/assets/img/home/parallax/spirit3.webp";
import sprit4 from "@/assets/img/home/parallax/spirit4.webp";
import sprit5 from "@/assets/img/home/parallax/spirit5.webp";

// accessories 
import accessories1 from "@/assets/img/home/parallax/accessories1.jpg";
import Newsletter from "@/components/shared/newsletter/Newsletter";


const Home = () => {
  const parallaxOneBgImages = [cigar1, cigar2, cigar3, cigar4, cigar5];
  const parallaxTwoBgImages = [sprit1,sprit2, sprit3, sprit4,sprit5];
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

      <FlagshipProducts />

      <AccLifestyle />
      <Craftsmanship />
      <Newsletter />
    </main>
  );
};
export default Home;
