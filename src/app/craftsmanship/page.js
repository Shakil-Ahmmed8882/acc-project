import ImageGallery from "@/components/page/craftsmanship/imgGallery";
import UnCraftsmanship from "@/components/page/craftsmanship/UnCraftsmanship";
import HeroSection from "@/components/shared/hero/Hero";
import hero1 from "@/assets/img/craftsmanship/banner/img1.png";
import CraftsmanShipVideo from "@/components/page/craftsmanship/CraftsmanShipVideo";

const Craftsmanship = () => {
  return (
    <section>
      <HeroSection
        title={"Craftsmanship"}
        imagesArray={[hero1]}
        noOverlay={true}
      />
      <UnCraftsmanship />
      <CraftsmanShipVideo/>
      <ImageGallery />
    </section>
  );
};

export default Craftsmanship;
