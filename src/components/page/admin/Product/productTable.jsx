import React from "react";

const products = [
  {
    name: "Premium Cigar",
    description: "A high-quality cigar from the PROPIO collection",
    price: 20.0,
    productType: "Cigar",
    category: "PROPIO", 
  },

];

const ProductTable = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokeDark dark:bg-boxDark sm:px-7.5 xl:pb-1 overflow-x-auto">
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-7">
                Name
              </th>
              <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white">
                Description
              </th>
              <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                Price
              </th>
              <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                Product Type
              </th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">
                Category
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td className="border-b border-[#eee] py-5 px-4 pl-5 dark:border-strokeDark xl:pl-7">
                  <div>
                    <h5 className="font-medium text-black dark:text-white">
                      {product.name}
                    </h5>
                  </div>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokeDark">
                  <p className="text-black dark:text-white">
                    {product.description}
                  </p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokeDark">
                  <p className="text-black dark:text-white">
                    ${product.price.toFixed(2)}
                  </p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokeDark">
                  <p className="text-black dark:text-white">
                    {product.productType}
                  </p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokeDark">
                  <p className="text-black dark:text-white">
                    {product.category}
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductTable;
