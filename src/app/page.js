import TheWorldOfACC from "@/components/page/heritage/worl-of-acc/TheWorldOfACC";
import Banner from "@/components/page/home/banner/Banner";
import Craftsmanship from "@/components/page/home/CraftmanShip/CraftmanShip";
import FlagshipProducts from "@/components/page/home/flagshipProducts/FlagshipProducts";
import ProductSlider from "@/components/page/home/flagshipProducts/ProductSlider";
import AccLifestyle from "@/components/page/home/lifeStyle/LifeStyle";
import Newsletter from "@/components/shared/newsletter/Newsletter";

const Home = () => {
  return (
    <>
      <main className="relative z-40 min-h-[calc(100vh)]">
        <section>
          <Banner />
        </section>
        <AccLifestyle />
        <Craftsmanship />
        <Newsletter />
        {/* <ProductSlider/> */}
        <FlagshipProducts/>
      </main>
    </>
  );
};
export default Home;
