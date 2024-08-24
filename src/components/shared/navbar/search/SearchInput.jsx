
import useClickOutside from '@/hooks/useClickOutSide';
import { useEffect } from 'react';



// Component for the search input field with autofocus on swap
const SearchInput = ({ isSwap, setIsSwap, OnValueChange, inputRef  }) => {
  
  // UseEffect hook to focus the input field when isSwap is true
  useEffect(() => {
    if (isSwap) {
    // Add a slight delay to ensure the
    // input is fully rendered and visible
      setTimeout(() => {
        inputRef.current.focus();
      }, 300); 
    }
  }, [isSwap]);

  // if click out of field then collapse
  useClickOutside(inputRef,setIsSwap)
  useEffect(()=> {
    if(!isSwap){
      inputRef.current.value = ""
      OnValueChange("")
    }
  },[isSwap])


  return (
    <input
      onChange={(e)=> OnValueChange(e.target.value)}
      ref={inputRef}
      className={`absolute w-[80%] md:w-auto -right-24 md:right-auto text-white ${isSwap ? '-translate-x-28 md:-translate-x-[50px] opacity-100 border-b border-[#ffffff74]' : 'invisible translate-x-0 opacity-0 border-b-0'} transition-all duration-1000 bg-transparent w-44 focus-within:border-t-0 focus-within:border-l-0 focus-within:border-r-0 px-1 focus-within:outline-none border-b `}
      type="text"
    />
  );
};

export default SearchInput;
