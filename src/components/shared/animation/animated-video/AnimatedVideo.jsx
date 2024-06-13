const AnimatedVideo = () => {
  return (
    <video
      src="https://res.cloudinary.com/dcemlsxpc/video/upload/v1718296198/Client%20Project%20video/i56w5wi4v1j9kvj5pyyb.mp4"
      autoPlay
      muted
      loop
      playsInline
      style={{ width: "1000px", height: "10000px" }}
      className="absolute top-0 z-[9999999] opacity-95 filter  mix-blend-overlay  "
    ></video>
  );
};

export default AnimatedVideo;
