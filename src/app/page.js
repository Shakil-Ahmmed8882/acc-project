// import TheWorldOfACC from "@/components/page/heritage/worl-of-acc/TheWorldOfACC";
import Banner from "@/components/page/home/banner/Banner";
import Craftsmanship from "@/components/page/home/CraftmanShip/CraftmanShip";
import AccLifestyle from "@/components/page/home/lifeStyle/LifeStyle";
// import FlagshipProducts from "@/components/page/home/flagshipProducts/FlagshipProducts";
// import ProductSlider from "@/components/page/home/flagshipProducts/ProductSlider";
import Newsletter from "@/components/shared/newsletter/Newsletter";
// import Fslider from "@/components/test/Fslider";
// import Fslider2 from "@/components/test/Fslider2/Fslider2";

const Home = () => {
  return (
    <>
      <main className="relative mt-44 z-40 min-h-[calc(100vh)]">
        <section>
          <Banner />
        </section>
      <AccLifestyle />
      <Craftsmanship />
      <Newsletter />
      </main>
    </>
  );
};
export default Home;
