import React from "react";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import Rating from "react-rating";
import { Link, useLoaderData, useParams } from "react-router-dom";
import DashboardBanner from "../../component/DashboardBanner/DashboardBanner";
import { addProduct } from "../../utility";
const ProductDetails = () => {
  const { productId } = useParams();
  const id = parseInt(productId);
  console.log(id);
  const data = useLoaderData();
  const product = data.find((product) => product.product_id === id);
  console.log(product);
  const {
    product_title,
    product_image,
    price: product_price,
    description,
    specification,
    rating,
  } = product;

  const addToCart = (product) => {
    addProduct(product);
  };

  return (
    <div className="relative">
      <DashboardBanner />
      <div className="flex h-[500px] w-[700px] mx-auto bg-white shadow-xl absolute left-0 right-0  top-52 p-4 rounded-xl">
        <div className="w-2/4">
          <p>img</p>
        </div>
        <div>
          <h2 className="text-[28px] font-semibold">{product_title}</h2>
          <p className="text-xl font-semibold">Price:${product_price}</p>
          <p className="text-gray-500 my-4">{description}</p>
          <p>
            <span className="font-bold mb-8">Specification:</span>
            <div>
              {specification.map((spec, index) => (
                <p className="text-gray-500">
                  {index + 1}. {spec}
                </p>
              ))}
            </div>
          </p>
          <p className="font-bold my-4">Rating</p>
          <div className="flex justify-between">
            <p>
              <Rating />
            </p>
            <p className="bg-slate-50 p-2 rounded-3xl">{rating}</p>
          </div>
          <div className="flex items-center gap-6 mt-4">
            <Link onClick={() => addToCart(product)}>
              <button className="flex items-center gap-3 bg-[#9538E2] px-5 py-3 rounded-full text-white font-bold">
                Add To Cart{" "}
                <span>
                  <IoCartOutline className="text-white text-2xl" />
                </span>
              </button>
            </Link>
            <div className="border-2 border-slate-300 rounded-full ">
              <Link>
                <CiHeart className="text-5xl" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
