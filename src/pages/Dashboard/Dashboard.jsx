import React, { useState, useEffect } from "react";
import DashboardBanner from "../../component/DashboardBanner/DashboardBanner";
import { deleteProduct, getProduct, getWishlist } from "../../utility";
import Card from "../../component/Card";
const Dashboard = () => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    const cart = getProduct();
    setCart(cart);
    console.log(cart);
  }, []);
  useEffect(() => {
    const wishlist = getWishlist();
    setWishlist(wishlist);
  }, []);
  const handleDelete = (id) => {
    deleteProduct(id);
    const cart = getProduct();
    setCart(cart);
  };

  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div>
      <DashboardBanner handleToggle={handleToggle} toggle={toggle} />
      <div className="">
        {toggle ? (
          // <div>
          //   <h1 className="text-center text-3xl font-bold mb-7">Cart</h1>
          //   {cart.map((product) => (
          //     <Card
          //       key={product.product_id}
          //       product={product}
          //       handleDelete={handleDelete}
          //     />
          //   ))}
          // </div>
          <div>
            <h1 className="text-center text-3xl font-bold mb-7">Wishlist</h1>
            {wishlist.map((product) => (
              <Card
                key={product.product_id}
                product={product}
                handleDelete={handleDelete}
              />
            ))}
          </div>
        ) : (
          <div>
            <h1 className="text-center text-3xl font-bold mb-7">Cart</h1>
            {cart.map((product) => (
              <Card
                key={product.product_id}
                product={product}
                handleDelete={handleDelete}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
