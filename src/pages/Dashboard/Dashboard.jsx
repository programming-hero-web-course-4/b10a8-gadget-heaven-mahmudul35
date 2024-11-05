import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../component/Card";
import DashboardBanner from "../../component/DashboardBanner/DashboardBanner";
import { deleteProduct, getProduct, getWishlist } from "../../utility";
const Dashboard = () => {
  useEffect(() => {
    document.title = "Dashboard";
  }, []);
  const navigate = useNavigate();
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
  const totalPrices = () => {
    const total = cart.reduce((acc, item) => acc + item.price, 0);
    setTotalPrice(total);
  };
  const handleSortByPrice = () => {
    const sortedCart = [...cart].sort((a, b) => b.price - a.price);
    setCart(sortedCart);
  };

  useEffect(() => {
    totalPrices();
  }, [cart]);

  const handlePurchase = () => {
    localStorage.removeItem("cart");
    setCart([]);

    alert("Purchase Successful");
    navigate("/");
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
                <h1>Total Price :${totalPrice}</h1>
                <div>
                  <button onClick={handleSortByPrice} className="btn btn-ghost">
                    Sort By
                  </button>
                  <button
                    onClick={handlePurchase}
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
