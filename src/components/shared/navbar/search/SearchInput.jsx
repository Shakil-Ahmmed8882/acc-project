import { useRef, useEffect } from 'react';



// Component for the search input field with autofocus on swap
const SearchInput = ({ isSwap }) => {
  const inputRef = useRef(null);

    // UseEffect hook to focus the input field when isSwap is true
  useEffect(() => {
    if (isSwap) {
    // Add a slight delay to ensure the input is fully rendered and visible
      setTimeout(() => {
        inputRef.current.focus();
      }, 300); 
    }
  }, [isSwap]);

  return (
    <input
      ref={inputRef}
      className={`${isSwap ? '-translate-x-16 opacity-100 border-b border-[#ffffff74]' : 'invisible translate-x-0 opacity-0 border-b-0'} transition-all duration-1000 bg-transparent w-48 focus-within:border-t-0 focus-within:border-l-0 focus-within:border-r-0 px-1 focus-within:outline-none border-b -mt-8`}
      type="text"
    />
  );
};

export default SearchInput;
