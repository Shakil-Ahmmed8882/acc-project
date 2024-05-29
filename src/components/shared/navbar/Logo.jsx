import logo from '@/assets/img/shared/navbar/logo.png'

import Image from 'next/image';

const Logo = ({isSecondParallaxInView, width = 180, height = 100}) => {


    return (
        <div className={`md:flex-1 `}>
            {
                isSecondParallaxInView?
                <Image className={` transition-all duration-1000 size-16 sm:size-20 md:size-28 object-cover`}
                 width={width} height={height} src={logo} alt='logo' />
                 :
            <Image className={` transition-all duration-1000 size-16 sm:size-20 md:size-28 object-cover`}
             width={width} height={height} src={''} alt='logo' />
            }
        </div>
    );
};

export default Logo; 