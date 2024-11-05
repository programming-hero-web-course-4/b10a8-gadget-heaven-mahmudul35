import React, { useEffect, useState } from "react";
import { CiHeart } from "react-icons/ci";
import { NavLink, useLocation } from "react-router-dom";
import { getProduct, getWishlist } from "../../utility";
const Navbar = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  const [cartItemLength, setCartItemLength] = useState(0);

  useEffect(() => {
    const cart = getProduct();
    setCartItemLength(cart.length);
  }, []);
  const wishlistItemLength = getWishlist().length;
  console.log(cartItemLength);
  const location = useLocation();
  const homepage = location.pathname === "/";
  return (
    <div className={`${homepage ? "bg-black " : ""}`}>
      <div className="navbar bg-base-100 justify-around items-center">
        <div>
          <a className="btn btn-ghost text-xl">Gadget Heaven</a>
        </div>

        <div>
          <ul className="flex gap-8">
            <li>
              {" "}
              <NavLink
                to="/"
                // className={
                //   location.pathname === "/" ? "underline btn btn-ghost" : ""
                // }
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#007BFF]  underline "
                    : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink
                to="/statistics"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#007BFF]  underline"
                    : ""
                }
              >
                Statistics
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink
                to="/dashboard"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#007BFF]  underline"
                    : ""
                }
              >
                Dashboard
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex-none">
          <div>
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">
                  {cartItemLength}
                </span>
              </div>
            </div>
          </div>
          <div>
            <p className="relative">
              <CiHeart className="text-2xl" />
              <span className="absolute -top-4 -right-0  rounded-full  ">
                {wishlistItemLength}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
