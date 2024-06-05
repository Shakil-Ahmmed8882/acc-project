import { LucidePlus } from "lucide-react";

const AddProductButton = ({setIsAddModalOpen}) => {
  return (
    <>
      <button
        onClick={()=>setIsAddModalOpen(true)}
        className=" text-gold border-none hover:bg-gold smooth-transition hover:text-black rounded-lg text-sm px-5 py-2.5 flex"
        type="button"
      >
        <LucidePlus className="w-5 h-5 mr-2" />
        Add new product
      </button>
    </>
  );
};

export default AddProductButton;
