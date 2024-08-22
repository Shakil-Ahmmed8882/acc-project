import { useEffect } from 'react';

function useClickOutside(ref, callback) {
  useEffect(() => {
    function handleClickOutside(event) {
      // Check if the click was outside the referenced element
      if (ref.current && !ref.current.contains(event.target)) {
        callback(false);
      }
    }

    // Add event listener when the component mounts
    document.addEventListener('mousedown', handleClickOutside);

    // Clean up event listener when the component unmounts
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, callback]);
}

export default useClickOutside;
