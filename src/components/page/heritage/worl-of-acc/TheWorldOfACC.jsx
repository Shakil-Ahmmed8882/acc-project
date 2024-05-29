// This file defines TheWorldOfACC component, which renders
//a section containing a title,a stories link, an image grid,
// and a centered button, using various reusable components
//for modularity and readability.

import Container from "@/components/shared/container/Container";
import Button from "@/components/shared/parallax/Button";
import ImageGrid from "./ImageGrid";
import StoriesLink from "./StoriesLink";

const TheWorldOfACC = () => {
  return (
    <Container className={" bg-[#121212]"}>
      <StoriesLink />
      <h1 className="text-3xl pt-11 text-white">THE WORLD OF ACC</h1>
      <ImageGrid />
      <div className="flex justify-center py-16  mx-auto">
        <Button customStyle={'text-white'} />
      </div>
    </Container>
  );
};

export default TheWorldOfACC;
