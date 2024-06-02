"use client";

import { LucideEdit2, LucideTrash2 } from "lucide-react";
import Image from "next/image";
import product1 from "@/assets/img/brands/accessories.jpg";
import { createContext, useContext } from "react";
import Link from "next/link";

export const productContext = createContext({});

const Card = ({product}) => {
  
  return (
    <productContext.Provider value={product}>
      <Link href={`/admin2/${product?._id}`}>
      <section className="bg-[#262626] cursor-pointer flex flex-col md:flex-row gap-3 group relative rounded-lg">
        <Image
          width={500}
          height={500}
          src={product1}
          className="md:w-[40%] h-40 md:h-full rounded object-cover"
          alt=""
        />
        <Contents />

        <DeleteAndEdit />
      </section>
      </Link>
    </productContext.Provider>
  );
};

export default Card;

function DeleteAndEdit() {
  return (
    <div className="space-x-1 p-3 md:bg-[#262626] translate-y-8 group-hover:translate-y-0
     smooth-transition group-hover:opacity-100 opacity-0 flex absolute top-0 right-0">
      <button
        className="text-white 
      font-medium rounded-lg text-sm px-3 py-1.5"
      >
        <LucideEdit2 className="w-4 h-4" />
      </button>
      <button className=" text-red-700 ">
        <LucideTrash2 className="w-4 h-4" />
      </button>
    </div>
  );
}

function Contents() {
  const { name, description, category } = useContext(productContext);

  return (
    <article className="space-y-2 p-4">
      <h2 className="text-[18px] font-semibold text-white ">{name}</h2>
      <p className=" text-[#b3b3b3] inline-block">Category: {category}</p>
      <p className="text-[#b0b0b0]">{description}</p>
    </article>
  );
}
