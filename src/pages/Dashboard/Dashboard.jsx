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
  const [isModalOpen, setIsModalOpen] = useState(false);

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
  useEffect(() => {
    const wishlist = getWishlist();
    setWishlist(wishlist);
  }, []);
  const handleDelete = (id) => {
    deleteProduct(id);
    const cart = getProduct();
    setCart(cart);
  };

  // const wishListDelete = (id) => {
  //   deleteWishlist(id);
  //   const wishlist = getWishlist();
  //   setWishlist(wishlist);
  // };

  const handleToggle = (name) => {
    if (name === "cart") {
      setToggle(false);
    } else {
      setToggle(true);
    }
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
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
    totalPrices();
    openModal();
    localStorage.removeItem("cart");
    setCart([]);

    // navigate("/");
  };

  const handleHome = () => {
    closeModal();
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
              <h1 className="text-3xl font-bold ">Cart</h1>
              <div className="flex items-center gap-10">
                <h1 className="text-2xl font-bold">
                  Total Price :${totalPrice}
                </h1>
                <div>
                  <button
                    onClick={handleSortByPrice}
                    className="btn btn-outline w-32 rounded-full text-[#9538E2] font-bold"
                  >
                    Sort By Price
                  </button>
                  <button
                    onClick={handlePurchase}
                    className="btn btn-secondary w-32 rounded-full ml-3 font-bold"
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

      {isModalOpen && (
        <dialog
          id="my_modal_5"
          className="modal modal-bottom sm:modal-middle"
          open={isModalOpen}
        >
          <div className="modal-box">
            <h3 className="font-bold text-lg">Congratulations!</h3>
            <p className="py-4">Total Purchase Amount: ${totalPrice}</p>
            <div className="modal-action">
              <form method="dialog">
                <button className="btn" onClick={handleHome}>
                  Close
                </button>
              </form>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default Dashboard;
