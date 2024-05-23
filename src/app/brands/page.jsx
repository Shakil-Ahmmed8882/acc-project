import BrandWorldAcc from "@/components/page/brands/brandWordAcc/BrandWorldAcc";
import Banner from "@/components/page/home/banner/Banner";
import AccLifestyle from "@/components/page/home/lifeStyle/LifeStyle";
import Newsletter from "@/components/shared/newsletter/Newsletter";

const page = () => {
  return (
    <div>
      <Banner />
      <AccLifestyle />
      <BrandWorldAcc />
      <Newsletter />
    </div>
  );
};
export default page;
