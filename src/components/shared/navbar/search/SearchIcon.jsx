



import searchicon from '@/assets/img/shared/navbar/searchicon.png'
import Image from 'next/image';
import { useRouter } from "next/navigation";
// Component for the Search icon with transition and click handler
const SearchIcon = ({ isSwap, onClick,trigger }) => {
  const router = useRouter()
  

  const handleRedirect = () => {
    router.push(`/search?type=${trigger}`);
    onClick()
  }

  return (
    <Image
      onClick={handleRedirect}
      src={searchicon}
      className={`
        md:w-[20px] cursor-pointer
        ${isSwap ? ' -translate-x-2 md:translate-x-16' : ' -translate-x-0 md:-translate-x-7'} justify-self-end  z-30 transition-all p-[3px] md:p-0 duration-1000`}
        alt=''
    />
  );
};

export default SearchIcon;
// changed