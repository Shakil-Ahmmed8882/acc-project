"use client";
import { useState, useRef } from "react";
// import videoUrl from "";
const HeritageVideo = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className={`relative ${isPlaying && "z-[99999999]"}`}>
      <video
        ref={videoRef}
        controls={isPlaying}
        autoPlay
        controlsList="nodownload"
        className="w-full"
        onClick={handlePlayPause}
      >
        <source src="/ACC-Video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {!isPlaying && (
        <button
          onClick={handlePlayPause}
          className="inset-0 flex items-center justify-center text-white text-2xl"
        >
          <div className="rounded-full p-6 bg-[#0404047d]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              className="size-16"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </button>
      )}
    </div>
  );
};

export default HeritageVideo;
