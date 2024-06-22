const AnimatedVideo = ({className}) => {
  return (
    <video
      src="https://res.cloudinary.com/dcemlsxpc/video/upload/v1718296198/Client%20Project%20video/i56w5wi4v1j9kvj5pyyb.mp4"
      autoPlay
      muted
      loop
      playsInline
      className={`${className} w-full absolute  right-0 bottom-0 left-0 mix-blend-multiply
          !z-30 `}
    ></video>
  );
};

export default AnimatedVideo;
