

// context
import { useContext, useState } from "react";

// images
import accessories from '@/assets/img/brands/accessories.jpg'
import cigar_collection from '@/assets/img/brands/cigar-collection.jpg'
import luxury_storage from '@/assets/img/brands/luxury-storage.png'
import liqure from '@/assets/img/brands/accessories.jpg'

//components
import MenuItem from "../MenuItem";
import BrandsCollection from "./BrandsCollection";
import Container from "@/components/shared/container/Container";
import { navbarContext } from "../../../Navbar";
import SmBrandLink from "./small-device/SmBrandLink";
import SMBrandCollection from "./small-device/SMBrandCollection";



const Brands = () => {

    // this state defined in main navbar
    const { isBrandHover, setIsBrandsHover } = useContext(navbarContext)
    
    const  style = 'hidden md:grid grid-cols-2 mx-auto justify-center  lg:flex gap0-4 md:gap-8 md:justify-around mt-44 lg:mt-32 '
    const [isClicked, setIsClicked] = useState(false)

 
    return (       

        <>
            <article
                onMouseEnter={() => setIsBrandsHover(true)}
                onMouseLeave={() => setIsBrandsHover(false)}
                className="z-20 hidden md:block"

            >
                <MenuItem {...{ isBrandHover }} path={'/brands'} isBrand={true} label={'BRANDS'} />
            </article >


            {/* BRANDS HIDDEN CONTENTS */}
            <article
                onMouseEnter={() => setIsBrandsHover(true)}
                onMouseLeave={() => setIsBrandsHover(false)}
                className={`
               ${isBrandHover ?
                        'visible ease-out  translate-y-[320px] opacity-100 cursor-pointer' :
                        'ease-in  invisible opacity-0 z-10 -translate-y-[320px]'}
                 
                        text-9xl absolute w-full
                        transition-all duration-700
                        h-32 z-10 -top-44
                
                    `}>
                {/* Large device  */}
                <Container className={style}>
                    <BrandsCollection title={'LIQURE'} img={liqure} />
                    <BrandsCollection title={'CIGAR COLLECTION'} img={cigar_collection} />
                    <BrandsCollection title={'ACCESSORIES'} img={accessories} />
                    <BrandsCollection title={'LUXURY'} img={luxury_storage} />
                </Container>
            </article>




            {/* Small device  */}
            <SmBrandLink {...{ isClicked, setIsClicked }} />
            <div className={`${isClicked ? 'h-28' : 'h-0'} md:hidden smooth-transition`}>

                <ul className={`
                        
                        ${isClicked ? 'visible opacity-100 translate-y-7' : 'invisible opacity-0 translate-y-0'}                        
                        smooth-transition 
                        grid grid-cols-2 gap-3
                        `}>

                    <SMBrandCollection title={'LIQURE'} img={liqure} />
                    <SMBrandCollection title={'CIGAR COLLECTION'} img={cigar_collection} />
                    <SMBrandCollection title={'ACCESSORIES'} img={accessories} />
                    <SMBrandCollection title={'LUXURY'} img={luxury_storage} />
                </ul>

            </div>
        </>
    );
};

export default Brands; 