import logo from '@/assets/img/shared/navbar/logo.png';
import acclogo from '@/assets/img/shared/navbar/acc.png';
import Image from 'next/image';

const Logo = ({ isSecondParallaxInView, width = 100, height = 100 }) => {
  return (
    <div className="relative flex-1 w-32 h-[130px]"> {/* Ensure container size is specified */}
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
