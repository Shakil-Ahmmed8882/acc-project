import React from "react";

const DeleteProductModal = ({ product, onClose }) => {
  const handleDelete = () => {
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Delete Product
          </h2>
        </div>
        <div className="px-4 py-6">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Are you sure you want to delete the product{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              {product.name}
            </span>
            ?
          </p>
          <div className="flex items-center justify-end space-x-2 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-lg dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleDelete}
              className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg dark:bg-red-700 hover:bg-red-700"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteProductModal;
