import useGlobalContext from "@/hooks/useGlobalContext";
import Image from "next/image";
import Link from "next/link";

const SMBrandCollection = ({ title, img, path }) => {
  const { setIsMenuOpen } = useGlobalContext();
  const handleClick = () => {
    setIsMenuOpen(false);
  };

  // Ensure the path is an absolute path
  const formattedPath = path.startsWith('/') ? path : `/${path}`;

  return (
    <Link href={formattedPath} onClick={handleClick}>
      <li className="flex cursor-pointer hover:text-standard-gold smooth-transition items-center gap-3 bg-[#454545a4] p-2 rounded-lg">
        <Image
          className="rounded-lg hover:scale-110 size-4 sm:size-6 object-cover transition-all duration-500"
          src={img}
          alt=""
        />
        <h2 className="text-[7px] sm:text-[9px]">{title}</h2>
      </li>
    </Link>
  );
};

export default SMBrandCollection;
