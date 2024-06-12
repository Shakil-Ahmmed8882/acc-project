import Container from "@/components/shared/container/Container";
import VideoPlayer from "@/components/shared/video/VideoPlayer";

const CraftsmanShipVideo = () => {
  return (
    <Container className={"pb-6 lg:pb-24"}>
      <VideoPlayer videoUrl="https://res.cloudinary.com/dcemlsxpc/video/upload/v1717926969/jukkxcwnvbkj5gr2zio9.mp4" />
    </Container>
  );
};

export default CraftsmanShipVideo;
