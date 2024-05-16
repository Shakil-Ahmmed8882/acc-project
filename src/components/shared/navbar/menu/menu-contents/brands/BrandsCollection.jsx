import Image from "next/image";

const BrandsCollection = ({ img, title }) => {
    return (
        <section>
            <div className="w-52 h-28 overflow-hidden">
                <Image className=" hover:scale-110 object-cover  transition-all duration-500 " src={img} alt="" />
            </div>

            <h3 className="text-white text-[14px] mt-3">{title}</h3>
        </section>
    );
};

export default BrandsCollection; 