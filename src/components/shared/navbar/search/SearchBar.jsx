import { useState } from 'react';
import SearchIcon from './SearchIcon';
import SearchInput from './SearchInput';


// Main component that combines SearchIcon and SearchInput with state management
const SearchBar = () => {
  const [isSwap, setIsSwap] = useState(false);

  return (
    <div className='text-[#ffffffda] w-80 cursor-pointer flex gap-2 items-center'>
      <SearchIcon isSwap={isSwap} onClick={() => setIsSwap(!isSwap)} />
      <span
        onClick={() => setIsSwap(!isSwap)}
        className={`${isSwap ? '-translate-x-32 opacity-0' : '-translate-x-0 opacity-100'} transition-all duration-1000`}
      >
        Search
      </span>
      <SearchInput isSwap={isSwap} />
    </div>
  );
};

export default SearchBar;