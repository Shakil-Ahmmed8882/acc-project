// The Card component remains the same, just ensuring the class names are appropriate for styling and responsiveness.
"use client";
import { LucideEdit2, LucideTrash2 } from "lucide-react";
import Image from "next/image";
import { createContext, useContext, useEffect, useState } from "react";
import Link from "next/link";
import {
  deleteSingleProduct,
  fetchSingleProduct,
  updateSingleProduct,
} from "@/utils";
import DeleteConfirmation from "./DeleteConfirmation";
import AddProductModal from "./AddProductModal";

export const productContext = createContext({});

const Card = ({ product, trigger, setTrigger }) => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [isDelete, setIsDelete] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);

  useEffect(() => {
    if (isAddModalOpen && product?._id) {
      const fetchCurrentProduct = async () => {
        const results = await fetchSingleProduct(product._id);
        setCurrentProduct(results.products[0]);
      };
      fetchCurrentProduct();
    }
  }, [isAddModalOpen, product]);

  const updateProduct = async (updatedProduct) => {
    const response = await updateSingleProduct(product?._id, updatedProduct);
    if (response?.success) {
      setTrigger(!trigger);
    }
  };

  const contextValues = {
    ...product,
    trigger,
    setTrigger,
    isAddModalOpen,
    setIsAddModalOpen,
    singleProduct: currentProduct,
    setIsDelete,
    isDelete,
  };

  return (
    <productContext.Provider value={contextValues}>
      <section className="group relative  lg:h-60 bg-[#262626] p-4 rounded-lg shadow-lg">
        <Link
          href={`/admin/${product?._id}`}
          className="flex flex-col lg:flex-row gap-3"
        >
          <Image
            width={500}
            height={400}
            src={product?.images[0]}
            className="w-full md:w-[40%] h-32 md:h-48 rounded object-cover"
            alt=""
          />
          <Contents
            showFullDescription={showFullDescription}
            setShowFullDescription={setShowFullDescription}
            id={product?._id}
          />
        </Link>
        <DeleteAndEdit />

        {isAddModalOpen && (
          <AddProductModal
            onAdd={updateProduct}
            {...{ setIsAddModalOpen, singleProduct: currentProduct }}
          />
        )}
        {isDelete && (
          <DeleteConfirmation
            onCancel={() => setIsDelete(false)}
            onDelete={() =>
              handleDeleteProduct(
                product?._id,
                setTrigger,
                trigger,
                setIsDelete
              )
            }
          />
        )}
      </section>
    </productContext.Provider>
  );
};

export default Card;

function DeleteAndEdit() {
  const { setIsDelete, setIsAddModalOpen } = useContext(productContext);

  const handlePropagation = (e) => {
    e.stopPropagation();
  };

  const handleUpdateProduct = (event) => {
    event.preventDefault();
    setIsAddModalOpen(true);
  };

  return (
    <div
      onClick={handlePropagation}
      className="space-x-1 p-3 
      translate-y-8 group-hover:translate-y-0
       smooth-transition group-hover:opacity-100 opacity-0 flex
        absolute top-0 right-0 z-40"
    >
      <button
        className="text-white 
      font-medium rounded-lg text-sm px-3 py-1.5"
      >
        <LucideEdit2
          onClick={handleUpdateProduct}
          className="w-8 h-8 p-[8px]"
        />
      </button>
      <button className="text-red-700" onClick={() => setIsDelete(true)}>
        <LucideTrash2 className="w-8 h-8 p-[6px]" />
      </button>
    </div>
  );
}

function Contents({ showFullDescription, id }) {
  const { name, description, category } = useContext(productContext);

  const truncatedDescription =
    description.length > 100
      ? `${description.substring(0, 100)}...`
      : description;

  return (
    <article className="space-y-2 p-4">
      <h2 className="text-[18px] font-semibold text-white">{name}</h2>
      <p className="text-[#b3b3b3] inline-block">Category: {category}</p>
      <p className="text-[#b0b0b0]">
        {showFullDescription ? description : truncatedDescription}
        {description.length > 100 && (
          <Link href={`/admin/${id}`} className="text-blue-500">
            {showFullDescription ? " See Less" : " See More"}
          </Link>
        )}
      </p>
    </article>
  );
}

// Utility function to handle product deletion
async function handleDeleteProduct(_id, setTrigger, trigger, setIsDelete) {
  const response = await deleteSingleProduct(_id);
  if (response.success) {
    setTrigger(!trigger);
    setIsDelete(false);
  } else {
    console.error("Failed to delete product");
  }
}
