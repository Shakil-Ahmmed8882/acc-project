import Hero from "@/components/page/products/acc-cigars/Hero";
import BestSeller from "@/components/page/products/acc-cigars/best-seller/BestSeller";
import Filter from "@/components/page/products/acc-cigars/filter/Filter";


const AccCigars = () => {
  return (
    <>
      <main className="bg-[#090b0d] relative mt-44 z-40 min-h-[calc(100vh)]">
        <Hero/>
        
        <Filter/>
        <BestSeller/>
      </main>
    </>
  );
};
export default AccCigars;
