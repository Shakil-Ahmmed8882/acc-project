"use client";

import HorizontalLine from "@/components/ui/visuals/HorizontalLine";
import FilterIcon from "./FilterIcon";
import Container from "@/components/shared/container/Container";
import useProductContext from "@/hooks/useProductContext";
import HiddenFilterButtons from "./HiddenFilterButtons";

const Filter = ({ isSeeMoreAll, setIsSeeMoreAll }) => {
  const { openFilter } = useProductContext();

  return (
    <Container className="relative">
      <article className="flex relative !z-50 justify-between items-center w-full py-6  md:py-6 text-white ">
        <h3 className="text-[16px] md:text-[20px] px-1">Filter</h3>
        <FilterIcon />
      </article>
      <HorizontalLine />
      <HiddenFilterButtons
        isSeeMoreAll={isSeeMoreAll}
        setIsSeeMoreAll={setIsSeeMoreAll}
        {...{ openFilter }}
      />
    </Container>
  );
};

export default Filter;
