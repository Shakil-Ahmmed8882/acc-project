
// import searchicon from '@/assets/img/shared/navbar/searchicon.png'
// import Image from 'next/image';

// // Component for the Search icon with transition and click handler
// const SearchIcon = ({ isSwap, onClick }) => {
  
//   return (
//     <Image
//       onClick={onClick}
//       src={searchicon}
//       className={`
//         md:w-[20px]
//         md:-mb-8
//         ${isSwap ? ' md:-mb-6 translate-x-16 md:translate-x-16' : ' -translate-x-0 md:-translate-x-7'} translate-x-16 justify-self-end pb-1 z-30 transition-all p-[3px] md:p-0 duration-1000`}
//         alt=''
//     />
//   );
// };

// export default SearchIcon;
// // changed





import searchicon from '@/assets/img/shared/navbar/searchicon.png'
import Image from 'next/image';

// Component for the Search icon with transition and click handler
const SearchIcon = ({ isSwap, onClick }) => {
  
  return (
    <Image
      onClick={onClick}
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