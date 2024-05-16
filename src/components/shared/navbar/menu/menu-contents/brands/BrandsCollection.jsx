import Image from "next/image";

const BrandsCollection = ({ img, title }) => {
    return (
        <section className=" group">
            <div className="w-52 h-28 overflow-hidden">
                <Image className=" hover:scale-110 object-cover  transition-all duration-500 " src={img} alt="" />
            </div>

            <h3 className="group-hover:text-white text-[#c6c6c6] transition-all duration-500  text-[14px] mt-3">{title}</h3>
        </section>
    );
};

export default BrandsCollection; 