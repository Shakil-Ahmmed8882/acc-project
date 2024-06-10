import Container from "@/components/shared/container/Container";
import VideoPlayer from "@/components/shared/video/VideoPlayer";

const CraftsmanShipVideo = () => {
  return (
    <Container className={"py-12 px-4 sm:px-6 lg:px-8 mx-auto bg-[#222222]"}>
      <VideoPlayer videoUrl="https://res.cloudinary.com/dcemlsxpc/video/upload/v1717926969/jukkxcwnvbkj5gr2zio9.mp4" />
    </Container>
  );
};

export default CraftsmanShipVideo;
