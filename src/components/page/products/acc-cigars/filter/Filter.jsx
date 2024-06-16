"use client";

import HorizontalLine from "@/components/ui/visuals/HorizontalLine";
import FilterIcon from "./FilterIcon";
import Container from "@/components/shared/container/Container";
import useProductContext from "@/hooks/useProductContext";
import HiddenFilterButtons from "./HiddenFilterButtons";

const Filter = () => {
  const { openFilter } = useProductContext();

  return (
    <Container className="mt-44">
      <article className="flex justify-between items-center w-full py-6  md:py-8 text-white z-50">
        <h3 className="text-[16px] md:text-[20px] px-1">Filter</h3>
        <FilterIcon />
      </article>
      <HorizontalLine />
      <HiddenFilterButtons {...{ openFilter }} />
    </Container>
  );
};

export default Filter;
