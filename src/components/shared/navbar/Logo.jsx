
import logo from '@/assets/img/shared/navbar/logo.png'
import Image from 'next/image';

const Logo = (width = 180, height = 100) => {
    return (
        <Image className={` size-28 object-cover`} width={width} height={height} src={logo} />
    );
};

export default Logo; 