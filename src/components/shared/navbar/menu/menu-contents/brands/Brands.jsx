import { useContext } from "react";
import MenuItem from "../MenuItem";
import accessories from '@/assets/img/brands/accessories.jpg'
import cigar_collection from '@/assets/img/brands/cigar-collection.jpg'
import luxury_storage from '@/assets/img/brands/luxury-storage.png'
import liqure from '@/assets/img/brands/accessories.jpg'
import BrandsCollection from "./BrandsCollection";
import Container from "@/components/shared/container/Container";
import { navbarContext } from "../../../Navbar";



const Brands = () => {

    // this state defined in main navbar
    const { isBrandHover, setIsBrandsHover } = useContext(navbarContext)
    const style = 'flex gap-8 justify-around mt-32'



    return (

        <>
            <article
                onMouseEnter={() => setIsBrandsHover(true)}
                onMouseLeave={() => setIsBrandsHover(false)}
                className="z-20 "

            >
                <MenuItem {...{ isBrandHover }} path={'/'} isBrand={true} label={'BRANDS'} />
            </article >


            {/* BRANDS HIDDEN CONTENTS */}
            <article
                onMouseEnter={() => setIsBrandsHover(true)}
                onMouseLeave={() => setIsBrandsHover(false)}
                className={`
               ${isBrandHover ?
                        ' visible translate-y-[320px] opacity-100 cursor-pointer' :
                        'invisible opacity-0 z-10 -translate-y-[320px]'}
                 
                        text-9xl absolute w-full
                        transition-all duration-700
                        h-32 z-10 -top-44
                
                    `}>
                <Container {...{ style }}>
                    <BrandsCollection title={'LIQURE'} img={liqure} />
                    <BrandsCollection title={'CIGAR COLLECTION'} img={cigar_collection} />
                    <BrandsCollection title={'ACCESSORIES'} img={accessories} />
                    <BrandsCollection title={'LUXURY'} img={luxury_storage} />
                </Container>
            </article>
        </>
    );
};

export default Brands; 