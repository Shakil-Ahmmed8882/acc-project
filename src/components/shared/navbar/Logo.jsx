import logo from '@/assets/img/shared/navbar/logo.png';
import acclogo from '@/assets/img/shared/navbar/acc.png';
import Image from 'next/image';
import { useScrollDirection } from '@/hooks/useScrollDirection';

const Logo = ({ isSecondParallaxInView, width = 100, height = 100 }) => {
    const direction = useScrollDirection()
    const scrollUp = direction === 'up' 

  return (
    <div className={`relative flex-1 w-32 ${scrollUp?'h-[118px] ':'h-[95px]'} transition-all duration-700`}> {/* Ensure container size is specified */}
      <Image
        className={`absolute top-11 left-0 transition-opacity duration-1000 ${isSecondParallaxInView ? 'opacity-100' : 'opacity-0'}`}
        width={width}
        height={height}
        src={acclogo}
        alt="logo"
      />
      <Image
        className={`absolute top-4 left-0 transition-opacity duration-1000 ${isSecondParallaxInView ? 'opacity-0' : 'opacity-100'}`}
        width={width}
        height={height}
        src={logo}
        alt="acc logo"
      />
    </div>
  );
};

export default Logo;
