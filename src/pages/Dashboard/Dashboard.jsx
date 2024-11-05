import React, { useEffect, useState } from "react";
import Card from "../../component/Card";
import DashboardBanner from "../../component/DashboardBanner/DashboardBanner";
import { deleteProduct, getProduct, getWishlist } from "../../utility";
const Dashboard = () => {
  useEffect(() => {
    document.title = "Dashboard";
  }, []);

  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
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

  const wishListDelete = (id) => {
    deleteWishlist(id);
    const wishlist = getWishlist();
    setWishlist(wishlist);
  };

  const handleToggle = (name) => {
    if (name === "cart") {
      setToggle(false);
    } else {
      setToggle(true);
    }
  };

  const handleSortByPrice = () => {
    const sortedCart = [...cart].sort((a, b) => b.price - a.price);
    setCart(sortedCart);
  };

  const handleTotalPrice = () => {
    alert("Purchase Successful");
  };
  return (
    <div>
      <DashboardBanner handleToggle={handleToggle} toggle={toggle} />
      <div className="">
        {toggle ? (
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
            <div className="flex justify-between items-center container mx-auto">
              <h1 className="text-3xl font-bold mb-7">Cart</h1>
              <div className="flex items-center gap-10">
                <h1>Total Price : {totalPrice}</h1>
                <div>
                  <button onClick={handleSortByPrice} className="btn btn-ghost">
                    Sort By
                  </button>
                  <button
                    onClick={handleTotalPrice}
                    className="btn btn-secondary"
                  >
                    Purchase
                  </button>
                </div>
              </div>
            </div>
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
