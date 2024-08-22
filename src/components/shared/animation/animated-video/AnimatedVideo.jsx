const AnimatedVideo = ({className}) => {
  return (
    <div className="w-full h-[300svh] hidden sm:grid items-stretch ">

      <video
        src="https://res.cloudinary.com/dcemlsxpc/video/upload/v1718296198/Client%20Project%20video/i56w5wi4v1j9kvj5pyyb.mp4"
        autoPlay
        muted
        loop
        playsInline
        className={`${className} w-full  absolute inset-0 mix-blend-multiply
            !z-30 `}
      ></video>
    </div>
  );
};

export default AnimatedVideo;
