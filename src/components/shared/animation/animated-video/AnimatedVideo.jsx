


const AnimatedVideo = () => {
  return (
    <video
      src={`https://drive.google.com/file/d/1RlZYrbOP48GsCEayijJy7r4OFKuvHz3Q/view?usp=sharing`}
      autoPlay
      muted
      loop
      playsInline
      style={{ width: "100%", height: "auto" }}
      className="absolute top-0 z-40 opacity-95 filter   mix-blend-overlay  "
    ></video>
  );
};

export default AnimatedVideo;
