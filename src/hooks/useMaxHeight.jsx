import { useState, useRef, useEffect } from 'react';

const useMaxHeight = (initialHeight, isExpanded) => {
  const containerRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState(initialHeight);

  useEffect(() => {
    if (containerRef.current) {
      setMaxHeight(
        isExpanded ? `${containerRef.current.scrollHeight}px` : initialHeight
      );
    }
  }, [isExpanded, initialHeight]);

  return { containerRef, maxHeight };
};

export default useMaxHeight;
