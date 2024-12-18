// // context
// import { useState } from "react";

// // images
// import cigar_collection from "@/assets/img/brands/banner/cigar-collection.jpg";
// import accessories from "@/assets/img/brands/banner/accessories.jpg";
// import luxury_storage from "@/assets/img/brands/banner/luxury-storage.png";
// import spirits from "@/assets/img/brands/liqure.png";

// //components
// import MenuItem from "../MenuItem";
// import BrandsCollection from "./BrandsCollection";
// import Container from "@/components/shared/container/Container";
// import SmBrandLink from "./small-device/SmBrandLink";
// import SMBrandCollection from "./small-device/SMBrandCollection";
// import useGlobalContext from "@/hooks/useGlobalContext";

// const Brands = () => {
//   const { isBrandHover, setIsBrandsHover } = useGlobalContext();
//   const [isClicked, setIsClicked] = useState(false);

//   const handleMouseEnter = () => setIsBrandsHover(true);
//   const handleMouseLeave = () => setIsBrandsHover(false);

//   const largeDeviceStyle = `hidden md:grid grid-cols-2 mx-auto justify-center lg:flex
//     gap-4 md:gap-8 md:justify-around `;
//   const smallDeviceStyle = `${
//     isClicked ? "h-28" : "h-0"
//   } md:hidden smooth-transition`;
//   const smallDeviceUlStyle = `${
//     isClicked
//       ? "visible opacity-100 translate-y-7 "
//       : "invisible opacity-0 translate-y-0 "
//   } smooth-transition grid mx-8 grid-cols-2 gap-3`;

//   return (
//     <>
//       <article
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}
//         className="z-20 hidden md:block"
//       >
//         <MenuItem path="/brands" isBrand label="BRANDS" />
//       </article>

//       <article
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}
//         className={`
//            mx-auto
//           ${
//           isBrandHover
//             ? " visible -translate-y-[120px] opacity-100 cursor-pointer "
//             : "invisible opacity-0 -translate-y-[200px]"
//         } ease-out bg-red text-9xl h-[50vh] absolute w-full transition-all duration-700 z-10`}
//       >
//         <div className="bg-[#00000074] absolute -left-32 top-[172px] pl-44 right-0 pb-8">
//           <Container className={largeDeviceStyle}>
//             <BrandsCollection
//               path="cigar"
//               title="CIGAR COLLECTION"
//               img={cigar_collection}
//             />
//             <BrandsCollection
//               path="spirits"
//               title="SPIRITS COLLECTION"
//               img={spirits}
//             />

//             <BrandsCollection
//               path="accessories"
//               title="ACCESSORIES"
//               img={accessories}
//             />
//             <BrandsCollection
//               path="luxury-storage"
//               title="LUXURY"
//               img={luxury_storage}
//             />
//           </Container>
//         </div>
//       </article>

//       <SmBrandLink isClicked={isClicked} setIsClicked={setIsClicked} />
//       <div className={smallDeviceStyle}>
//         <ul className={smallDeviceUlStyle}>
//           <SMBrandCollection path={"product/spirits"} title="SPIRITS" img={spirits} />
//           <SMBrandCollection
//             path={"product/cigar"}
//             title="CIGAR COLLECTION"
//             img={cigar_collection}
//           />
//           <SMBrandCollection path={"product/accessories"} title="ACCESSORIES" img={accessories} />
//           <SMBrandCollection path={"product/luxury-storage"} title="LUXURY" img={luxury_storage} />
//         </ul>
//       </div>
//     </>
//   );
// };

// export default Brands;

// context
import { useState } from "react";

// images
import cigar_collection from "@/assets/img/brands/banner/cigar-collection.jpg";
import accessories from "@/assets/img/brands/banner/accessories.jpg";
import luxury_storage from "@/assets/img/brands/banner/luxury-storage.png";
import spirits from "@/assets/img/brands/liqure.png";

//components
import MenuItem from "../MenuItem";
import BrandsCollection from "./BrandsCollection";
import Container from "@/components/shared/container/Container";
import SmBrandLink from "./small-device/SmBrandLink";
import SMBrandCollection from "./small-device/SMBrandCollection";
import useGlobalContext from "@/hooks/useGlobalContext";

const Brands = () => {
  const { isBrandHover, setIsBrandsHover } = useGlobalContext();
  const [isClicked, setIsClicked] = useState(false);

  const handleMouseEnter = () => setIsBrandsHover(true);
  const handleMouseLeave = () => setIsBrandsHover(false);
  

  const largeDeviceStyle = `hidden md:grid grid-cols-2 mx-auto justify-center lg:flex 
    gap-4 md:gap-8 md:justify-around `;
  const smallDeviceStyle = `${
    isClicked ? "h-28" : "h-0"
  } md:hidden smooth-transition`;
  const smallDeviceUlStyle = `${
    isClicked
      ? "visible opacity-100 translate-y-7 "
      : "invisible opacity-0 translate-y-0 "
  } smooth-transition grid mx-8 grid-cols-2 gap-3`;

  return (
    <>
      <article
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="z-20 hidden md:block"
      >
        <MenuItem path="/brands" isBrand label="BRANDS" />
      </article>

      <article
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`
           mx-auto
          ${
            isBrandHover
              ? " visible -translate-y-[80px] opacity-100 cursor-pointer "
              : "invisible opacity-0 -translate-y-[100px]"
          } ease-out bg-red text-9xl  absolute  w-full transition-all duration-500 z-10`}
      >
        <div className=" bg-[#00000011] absolute h-[180px]   -left-32 top-[130px] pl-44 right-0 ">

          <div className="bg-transparent size-32 rounded-full right-[350px] -top-14 absolute"></div>
          <Container  className={largeDeviceStyle}>
            <BrandsCollection
              path="cigar"
              title="CIGAR COLLECTION"
              img={cigar_collection}
            />
            <BrandsCollection
              path="spirits"
              title="SPIRITS COLLECTION"
              img={spirits}
            />

            <BrandsCollection
              path="accessories"
              title="ACCESSORIES"
              img={accessories}
            />
            <BrandsCollection
              path="luxury-storage"
              title="LUXURY"
              img={luxury_storage}
            />
          </Container>
        </div>
      </article>

      <SmBrandLink isClicked={isClicked} setIsClicked={setIsClicked} />
      <div className={smallDeviceStyle}>
        <ul className={smallDeviceUlStyle}>
          <SMBrandCollection
            path={"product/spirits"}
            title="SPIRITS"
            img={spirits}
          />
          <SMBrandCollection
            path={"product/cigar"}
            title="CIGAR COLLECTION"
            img={cigar_collection}
          />
          <SMBrandCollection
            path={"product/accessories"}
            title="ACCESSORIES"
            img={accessories}
          />
          <SMBrandCollection
            path={"product/luxury-storage"}
            title="LUXURY"
            img={luxury_storage}
          />
        </ul>
      </div>
    </>
  );
};

export default Brands;
