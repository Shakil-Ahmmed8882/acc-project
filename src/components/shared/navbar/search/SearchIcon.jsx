import { Search } from 'lucide-react';


// Component for the Search icon with transition and click handler
const SearchIcon = ({ isSwap, onClick }) => {
  return (
    <Search
      onClick={onClick}
      className={`${isSwap ? 'translate-x-36 mb-2' : '-translate-x-0'} pb-1 z-30 transition-all duration-1000`}
    />
  );
};

export default SearchIcon;
