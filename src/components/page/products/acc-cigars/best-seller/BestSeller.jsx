"use client";

import Card from "@/components/shared/product/product-card/Card";
import cards from "./data";
import Container from "@/components/shared/container/Container";
import Button from "@/components/shared/parallax/Button";

import Title from "../ui/Title";
import useMaxHeight from "@/hooks/useMaxHeight";
import { useState } from "react";



const BestSeller = () => {
  const [isSeeMore, setIsSeeMore] = useState(false);
  const { containerRef, maxHeight } = useMaxHeight('1500px', isSeeMore);


  return (
    <section>
      <Container className="min-h-screen py-12">
        <Title />
        <article
          ref={containerRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-11 md:gap-20 lg:gap-24 transition-all duration-1000 ease-in-out overflow-hidden"
          style={{ maxHeight }}
        >
          {cards.slice(0, isSeeMore ? cards.length : 6).map((card, index) => (
            <Card key={index} card={card} />
          ))}
        </article>

        <div
          onClick={() => setIsSeeMore(!isSeeMore)}
          className="flex justify-center h-32 items-center"
        >
          <Button
            text={`${isSeeMore ? "See less" : "See more"}`}
            customStyle={"border-[white]"}
          />
        </div>
      </Container>
    </section>
  );
};

export default BestSeller;
