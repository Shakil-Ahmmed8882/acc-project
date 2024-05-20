import Banner from "@/components/page/home/banner/Banner";
import Craftsmanship from "@/components/page/home/CraftmanShip/CraftmanShip";
import AccLifestyle from "@/components/page/home/lifeStyle/LifeStyle";
import Newsletter from "@/components/shared/newsletter/Newsletter";


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
