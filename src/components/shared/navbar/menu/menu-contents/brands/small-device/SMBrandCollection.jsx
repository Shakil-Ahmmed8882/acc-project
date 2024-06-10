import Image from "next/image";

const SMBrandCollection = ({ title, img }) => {
  return (
    <li className="flex cursor-pointer hover:text-standard-gold smooth-transition items-center gap-3 bg-[#454545a4] p-2  rounded-lg">
      <Image
        className=" rounded-lg hover:scale-110 size-4 sm:size-6 object-cover  transition-all duration-500 "
        src={img}
        alt=""
      />
      <h2 className="text-[7px] sm:text-[9px]">{title}</h2>
    </li>
  );
};

export default SMBrandCollection;
