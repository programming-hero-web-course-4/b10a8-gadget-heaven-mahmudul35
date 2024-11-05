import React from "react";
import { MdDelete } from "react-icons/md";
const Card = ({ product, handleDelete }) => {
  const {
    product_id,
    product_title,
    rating,
    price,
    product_image,
    category,
    description,
  } = product;

  return (
    <div className="flex justify-between items-center bg-slate-100 p-5 rounded-xl m-3 w-[1000px] mx-auto mt-5">
      <div className="flex items-center gap-8">
        <div>
          <img
            src={product_image}
            alt=""
            className="h-[100px] w-[150px] rounded-lg"
          />
        </div>
        <div>
          <h1 className="text-2xl font-semibold">{product_title}</h1>
          <p>{description}</p>
          <p>{price}</p>
        </div>
      </div>
      <p>
        <button onClick={() => handleDelete(product_id)}>
          <MdDelete className="text-3xl" />
        </button>
      </p>
    </div>
  );
};

export default Card;
