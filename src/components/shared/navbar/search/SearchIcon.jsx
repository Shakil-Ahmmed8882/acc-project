
import searchicon from '@/assets/img/shared/navbar/searchicon.png'
import Image from 'next/image';

// Component for the Search icon with transition and click handler
const SearchIcon = ({ isSwap, onClick }) => {
  return (
    <Image
      onClick={onClick}
      src={searchicon}
      className={`
        md:w-[17px]
        ${isSwap ? ' mb-2 translate-x-44 md:translate-x-16' : ' -translate-x-0 md:-translate-x-4'} justify-self-end pb-1 z-30 transition-all p-[3px] md:p-0 duration-1000`}
        alt=''
    />
  );
};

export default SearchIcon;
// changed