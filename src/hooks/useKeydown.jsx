// hooks/useKeydown.js
import { useEffect } from 'react';

const useKeydown = (onEnter, dependencies) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Enter' && typeof onEnter === 'function') {
        onEnter();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, dependencies);
};

export default useKeydown;
