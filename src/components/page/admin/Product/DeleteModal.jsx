import { useState } from "react";
import { Trash2, HelpCircle } from "lucide-react";
const BASE_URL = "http://localhost:3000/"

const DeleteModal = ({ id, refetch, endPoint }) => {
  const [openModal, setOpenModal] = useState(false);

  const handleDelete = async () => {
    try {
      const response = await fetch(`${BASE_URL}/api/${endPoint}/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to delete resource");
      }
      setOpenModal(false);
      refetch();
      console.log("Resource deleted successfully");
    } catch (error) {
      console.error("Error deleting resource:", error.message);
    }
  };

  return (
    <div className="mx-auto flex items-center justify-center">
      <button
        onClick={() => setOpenModal(true)}
        className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-gradient-to-br from-red-400 to-red-600 rounded-lg shadow-md shadow-gray-300 hover:scale-[1.02] transition-transform"
      >
        <Trash2 className="mr-2 w-5 h-5" />
        Delete
      </button>
      <div
        onClick={() => setOpenModal(false)}
        className={`fixed z-10 flex items-center justify-center ${
          openModal ? "opacity-1 visible" : "invisible opacity-0"
        } inset-0 bg-black/20 backdrop-blur-sm duration-100`}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`absolute rounded-lg bg-white p-6 text-center drop-shadow-2xl dark:bg-gray-800 dark:bg-boxDark dark:drop-shadow-none ${
            openModal
              ? "opacity-1 translate-y-0 duration-300"
              : "translate-y-20 opacity-0 duration-150"
          }`}
        >
          <div className="flex flex-col items-center justify-center space-y-4">
            <HelpCircle className="size-10" />
            <h6 className="text-center text-sm font-medium opacity-70">
              Are you sure?
            </h6>
            <h6 className="text-center text-sm font-medium opacity-70">
              You won&apos;t be able to revert this!
            </h6>
            <div className="flex gap-2">
              <button
                onClick={handleDelete}
                className="rounded-md bg-indigo-600 px-6 py-2 text-sm text-white"
              >
                Yes, Delete it!
              </button>
              <button
                onClick={() => setOpenModal(false)}
                className="rounded-md border border-rose-600 px-6 py-2 text-sm text-rose-600 hover:bg-rose-600 hover:text-white"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
