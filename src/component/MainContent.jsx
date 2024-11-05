import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Product from "./Product";
const MainContent = () => {
  const [products, setAllProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  // useEffect(() => {
  //   fetch("./AllProductData.json")
  //     .then((res) => res.json())
  //     .then((json) => setAllProducts(json));
  // }, []);
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
      <h1 className="text-center text-3xl font-bold mb-7">
        Explore Cutting-Edge Gadgets
      </h1>
      <div className="flex mx-12">
        <div className="flex flex-col bg-slate-500 border-1 p-3 rounded-lg w-52 h-96 space-y-4">
          <button
            className="bg-white p-3 rounded-lg hover:bg-purple-800 hover:text-white"
            onClick={() => handleCategoryClick("all")}
          >
            All
          </button>
          <button
            className="bg-white p-3 rounded-lg hover:bg-purple-800 hover:text-white"
            onClick={() => handleCategoryClick("phones")}
          >
            Mobile
          </button>
          <button
            className="bg-white p-3 rounded-lg hover:bg-purple-800 hover:text-white"
            onClick={() => handleCategoryClick("computers")}
          >
            Laptop
          </button>
          <button
            className="bg-white p-3 rounded-lg hover:bg-purple-800 hover:text-white"
            onClick={() => handleCategoryClick("smart watches")}
          >
            Smart Watches
          </button>
          <button
            className="bg-white p-3 rounded-lg hover:bg-purple-800 hover:text-white"
            onClick={() => handleCategoryClick("power banks")}
          >
            Power Banks
          </button>
          <button
            className="bg-white p-3 rounded-lg hover:bg-purple-800 hover:text-white"
            onClick={() => handleCategoryClick("accessories")}
          >
            Accessories
          </button>
        </div>
        <div className="grid grid-cols-3 gap-8 ml-44">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <Product key={product.id} product={product} />
            ))
          ) : (
            <h1>No products found</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainContent;
