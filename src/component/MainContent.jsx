import React, { useEffect, useState } from "react";
import Product from "./Product";

const MainContent = () => {
  const [products, setAllProducts] = useState([]);

  useEffect(() => {
    fetch("./AllProductData.json")
      .then((res) => res.json())
      .then((json) => setAllProducts(json));
  }, []);
  return (
    <div>
      <h1 className="text-center text-3xl font-bold mb-7">
        Explore Cutting-Edge Gadgets
      </h1>
      <div className="flex mx-12">
        <div className="flex flex-col bg-slate-500 border-1 p-3 rounded-lg w-52 h-96 space-y-4">
          <button className="bg-white p-3 rounded-lg ">All</button>
          <button className="bg-white p-3 rounded-lg">Mobile</button>
          <button className="bg-white p-3 rounded-lg">Laptop</button>
          <button className="bg-white p-3 rounded-lg">Tablet</button>
        </div>
        <div className="grid grid-cols-3 gap-8 ml-44">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainContent;
