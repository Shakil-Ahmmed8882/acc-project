import ImageGallery from "@/components/page/craftsmanship/imgGallery";
import UnCraftsmanship from "@/components/page/craftsmanship/UnCraftsmanship";
import HeroSection from "@/components/shared/hero/Hero";
import hero1 from "@/assets/img/craftsmanship/banner/img1.png";

const Heritage = () => {
  return (
    <section>
      <HeroSection
        title={"ACC Heritage"}
        imagesArray={[hero1]}
        noOverlay={true}
      />
      <UnCraftsmanship />
      <ImageGallery />
    </section>
  );
};

export default Heritage;
