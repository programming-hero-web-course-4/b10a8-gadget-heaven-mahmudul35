import React from "react";
import { Link } from "react-router-dom";
const Product = ({ product, mobile }) => {
  const {
    product_id,
    product_title,
    rating,
    price: product_price,
    product_image,
    category,
    price,
    description,
  } = product;

  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src={product_image}
            alt="Shoes"
            className="h-[300px] p-3 rounded-xl"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product_title}</h2>
          <p>{product_price}</p>
          <div className="card-actions ">
            <Link to={`/product/${product_id}`}>
              <button className="border-2 border-[#9538E2] text-[#9538E2] px-4 py-2 rounded-full">
                View Details{" "}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
