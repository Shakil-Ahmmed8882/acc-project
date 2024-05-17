import Banner from "@/components/page/home/banner/Banner";
import Craftsmanship from "@/components/page/home/CraftmanShip/CraftmanShip";
import AccLifestyle from "@/components/page/home/lifeStyle/LifeStyle";
import Newsletter from "@/components/shared/newsletter/Newsletter";

const Home = () => {
  return <>
    <main className="min-h-[calc(100vh)]">
      <section>
        {/* <Banner /> */}
        <AccLifestyle />
        <Craftsmanship />
      </section>
      <Newsletter />
    </main>
  </>

}
export default Home;
