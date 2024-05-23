import BrandWorldAcc from "@/components/page/brands/BrandWorldAcc";
import Banner from "@/components/page/home/banner/Banner";
import Craftsmanship from "@/components/page/home/CraftmanShip/CraftmanShip";
import FlagshipProducts from "@/components/page/home/flagshipProducts/FlagshipProducts";
 import AccLifestyle from "@/components/page/home/lifeStyle/LifeStyle";
import Newsletter from "@/components/shared/newsletter/Newsletter";
const Home = () => {
  return (
    <>
      <main className="relative mt-44 z-40 min-h-[calc(100vh)]">
        <section>
          <Banner />
        </section>
        <FlagshipProducts />
        <AccLifestyle />
        <Craftsmanship />
        <Newsletter /> 
        {/* <BrandWorldAcc/> */}
      </main>
    </>
  );
};
export default Home;
