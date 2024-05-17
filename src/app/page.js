import Banner from "@/components/page/home/banner/Banner";
import Craftsmanship from "@/components/page/home/CraftmanShip/CraftmanShip";
import AccLifestyle from "@/components/page/home/lifeStyle/LifeStyle";

const Home = () => {
  return <>
    <section>
      {/* <Banner /> */}
      <AccLifestyle />
      <Craftsmanship/>
    </section>
  </>
};

export default Home;