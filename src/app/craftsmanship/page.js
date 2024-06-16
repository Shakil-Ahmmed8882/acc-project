import ImageGallery from "@/components/page/craftsmanship/imgGallery";
import UnCraftsmanship from "@/components/page/craftsmanship/UnCraftsmanship";
import Hero from "@/components/shared/hero/Hero";
import hero1 from "@/assets/img/craftsmanship/banner/img1.png";
import CraftsmanShipVideo from "@/components/page/craftsmanship/CraftsmanShipVideo";
import SmoothScroll from "@/providers/SmoothScroll";

const Craftsmanship = () => {
  return (
    <SmoothScroll>
    <section>
      <Hero title={"Craftsmanship"} imagesArray={[hero1]} noOverlay={true} />
      <UnCraftsmanship />
      <CraftsmanShipVideo />
      <ImageGallery />
    </section>
    </SmoothScroll>
  );
};

export default Craftsmanship;
