import { useState } from 'react';
import SearchIcon from './SearchIcon';
import SearchInput from './SearchInput';


// Main component that combines SearchIcon and SearchInput with state management
const SearchBar = () => {
  const [isSwap, setIsSwap] = useState(false);

  return (
    <div className='text-right'>
    <div className='text-[#ffffffda] ml-auto  cursor-pointer
     grid grid-cols-2 w-32 items-center '>
      <SearchIcon isSwap={isSwap} onClick={() => setIsSwap(!isSwap)} />
      <span
        onClick={() => setIsSwap(!isSwap)}
        className={`${isSwap ? ' -translate-x-32 opacity-0 pl-8 invisible' : '-translate-x-1 visible opacity-100'} transition-all duration-1000 justify-self-end`}
      >
        Search
      </span>
      <SearchInput isSwap={isSwap} />
    </div>
    </div>
  );
};

export default SearchBar;