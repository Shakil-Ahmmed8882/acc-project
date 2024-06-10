"use client"

import Tabs from "@/components/page/brands/Tabs";
import BrandWorldAcc from "@/components/page/brands/brandWordAcc/BrandWorldAcc";
import Banner from "@/components/page/home/banner/Banner";
import AccLifestyle from "@/components/page/home/lifeStyle/LifeStyle";
import Newsletter from "@/components/shared/newsletter/Newsletter";


import img1 from '@/assets/img/shared/parallax/p1bg1.jpg'
import img2 from '@/assets/img/shared/parallax/p2bg2.jpg'
import parallaxImg1 from "@/assets/img/home/parallax/parallax1.png";
import parallaxImg2 from "@/assets/img/home/parallax/parallax2.png";
import parallaxImg3 from "@/assets/img/home/parallax/parallax3.png";


const page = () => {

  const parallaxOneBgImages = [parallaxImg1,img1]
  const parallaxTwoBgImages = [parallaxImg2,img2]
  const parallaxThreeBgImages = [parallaxImg3,img2]

  
  const titles = {
    title1:"Brand 1",
    title2:"Brand 2",
    title3:"Brand 3",
  }
  return (
    <div>
      <Banner images={{parallaxOneBgImages,parallaxTwoBgImages,parallaxThreeBgImages}} titles={titles}/>
      <AccLifestyle />
      <Tabs/>
      <BrandWorldAcc />
      <Newsletter />
    </div>
  );
};
export default page;
