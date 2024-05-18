


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
    <section className="pt-9 bg-[#121212]">
      <Container>
        <StoriesLink />
        <h1 className="text-3xl pt-11 text-white">THE WORLD OF ACC</h1>
        <ImageGrid />
        <div className="flex justify-center mt-24  mx-auto">
          <Button />
        </div>
      </Container>
    </section>
  );
};

export default TheWorldOfACC;
