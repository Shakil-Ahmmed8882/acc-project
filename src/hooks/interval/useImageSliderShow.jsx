import { useState, useEffect } from "react";

function useImageSlideshow(images, intervalDuration) {
  const [index, setIndex] = useState(0);


  // intervalling and looping throwing imgs array 
  // every interval duration
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, intervalDuration);

    return () => clearInterval(interval);
  }, [index, intervalDuration, images]);

  return { index };
}

export default useImageSlideshow;
