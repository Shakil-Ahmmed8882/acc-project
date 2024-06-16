import Image from "next/image";
import Link from "next/link";
import useGlobalContext from "@/hooks/useGlobalContext";

const BrandsCollection = ({ img, title, path }) => {
  const { setIsBrandsHover, setIsMenuOpen } = useGlobalContext();
  return (
    <section>
      <Link
        onClick={() => {
          setIsMenuOpen(false);
          setIsBrandsHover(false);
        }}
        href={`/product/${path}`}
        className=" mt-8 md:mt-0 justify-self-center group"
      >
        <div className=" text-center w-52 h-28 overflow-hidden">
          <Image
            className=" rounded-lg hover:scale-110 object-cover  transition-all duration-500 "
            src={img}
            alt=""
          />
        </div>

        <h3 className="group-hover:text-white text-[#c6c6c6] transition-all duration-500  text-[14px] mt-3">
          {title}
        </h3>
      </Link>
    </section>
  );
};

export default BrandsCollection;
