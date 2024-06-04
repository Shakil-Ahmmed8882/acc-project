"use client"

import BrandWorldAcc from "@/components/page/brands/brandWordAcc/BrandWorldAcc";
import Banner from "@/components/page/home/banner/Banner";
import AccLifestyle from "@/components/page/home/lifeStyle/LifeStyle";
import Tabs from "@/components/page/products/acc-cigars/tabs/Tabs";
import Newsletter from "@/components/shared/newsletter/Newsletter";

const page = () => {

  const titles = {
    title1:"Brand 1",
    title2:"Brand 2",
    title3:"Brand 3",
  }
  return (
    <div>
      <Banner titles={titles}/>
      <Tabs/>
      <AccLifestyle />
      <BrandWorldAcc />
      <Newsletter />
    </div>
  );
};
export default page;
