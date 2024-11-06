import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Product from "./Product";
const MainContent = () => {
  const [products, setAllProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const data = useLoaderData();
  console.log(data);
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts =
    selectedCategory === "all"
      ? data
      : data.filter((product) => product.category === selectedCategory);

  return (
    <div>
      <h1 className="text-center text-4xl font-bold mb-10 ">
        Explore Cutting-Edge Gadgets
      </h1>
      <div className="flex mx-12">
        <div className="flex flex-col  border  p-3 rounded-lg w-[15%] h-[450px] space-y-4">
          <button
            className="bg-slate-100 p-3 rounded-lg hover:bg-purple-800 hover:text-white"
            onClick={() => handleCategoryClick("all")}
          >
            All
          </button>
          <button
            className="bg-slate-100 p-3 rounded-lg hover:bg-purple-800 hover:text-white"
            onClick={() => handleCategoryClick("phones")}
          >
            Mobile
          </button>
          <button
            className="bg-slate-100 p-3 rounded-lg hover:bg-purple-800 hover:text-white"
            onClick={() => handleCategoryClick("computers")}
          >
            Laptop
          </button>
          <button
            className="bg-slate-100 p-3 rounded-lg hover:bg-purple-800 hover:text-white"
            onClick={() => handleCategoryClick("smart watches")}
          >
            Smart Watches
          </button>
          <button
            className="bg-slate-100 p-3 rounded-lg hover:bg-purple-800 hover:text-white"
            onClick={() => handleCategoryClick("power banks")}
          >
            Power Banks
          </button>
          <button
            className="bg-slate-100 p-3 rounded-lg hover:bg-purple-800 hover:text-white"
            onClick={() => handleCategoryClick("accessories")}
          >
            Accessories
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ml-28 lg:w-[80%] ">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <Product key={product.id} product={product} />
            ))
          ) : (
            <h1 className="text-3xl">No products found</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainContent;
