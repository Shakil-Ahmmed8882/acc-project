import { Search } from 'lucide-react';


// Component for the Search icon with transition and click handler
const SearchIcon = ({ isSwap, onClick }) => {
  return (
    <Search
      onClick={onClick}
      className={`${isSwap ? ' mb-2 translate-x-16' : '-translate-x-0'} justify-self-end pb-1 z-30 transition-all duration-1000`}
    />
  );
};

export default SearchIcon;
