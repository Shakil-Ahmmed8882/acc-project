import HorizontalLine from "@/components/ui/visuals/HorizontalLine";
import FilterIcon from "./FilterIcon";
import Container from "@/components/shared/container/Container";



const Filter= () => {
  return (
    <Container className="">
        <article className="flex justify-between items-center w-full py-6  md:py-8 text-white">
        <h3 className="text-[16px] md:text-[20px] px-1">Filter</h3>
        <FilterIcon/>
        </article>
        <HorizontalLine />
    </Container>
  );
};

export default Filter; 