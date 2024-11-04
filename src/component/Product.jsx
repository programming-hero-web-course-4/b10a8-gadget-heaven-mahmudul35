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
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product_title}</h2>
          <p>{product_price}</p>
          <div className="card-actions justify-end">
            <Link to={`/product/${product_id}`}>
              <button className="btn btn-primary">View Details </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
