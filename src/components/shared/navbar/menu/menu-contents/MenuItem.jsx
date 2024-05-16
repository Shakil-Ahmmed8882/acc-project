import Link from "next/link";

const MenuItem = ({ path, label }) => {
  return (
    <Link  className="relative hover:text-hover-txt-clr hover:smooth-transition before:content-[''] before:bg-hover-txt-clr before:w-0 before:h-1 before:mt-11 before:absolute before:transition-all before:duration-300 before:ease-linear hover:before:w-full" href={path}>
      
        {label}
      
    </Link>
  );
};

export default MenuItem;
