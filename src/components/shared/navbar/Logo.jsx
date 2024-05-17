
import logo from '@/assets/img/shared/navbar/logo.png'
import Image from 'next/image';

const Logo = (width = 180, height = 100) => {
    return (
        <div className='flex-1'>
            <Image className={` size-16 sm:size-20 md:size-28 object-cover`} width={width} height={height} src={logo} />
        </div>
    );
};

export default Logo; 