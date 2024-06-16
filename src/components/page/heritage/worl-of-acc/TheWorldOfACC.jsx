// This file defines TheWorldOfACC component, which renders
//a section containing a title,a stories link, an image grid,
// and a centered button, using various reusable components
//for modularity and readability.

import Container from "@/components/shared/container/Container";
import ImageGrid from "./ImageGrid";
import StoriesLink from "./StoriesLink";
import Link from "next/link";
import Button2 from "@/components/shared/button/Button2";

const TheWorldOfACC = () => {
  return (
    <Container bgClr="bg-black">
      <StoriesLink />
      <ImageGrid />
      <div className="flex justify-center py-16  mx-auto">
        <Link href={"/brands"} className="w-full flex justify-center py-16">
          <Button2 className={"w-3/6"}>SEE OUR PRODUCTS</Button2>
        </Link>
      </div>
    </Container>
  );
};

export default TheWorldOfACC;
