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
  }, [cartItemLength]);
  const wishlistItemLength = getWishlist().length;
  console.log(cartItemLength);

  return (
    <div className=" ml-9 mr-9">
      <div
        className={`navbar  justify-around items-center ${
          pathname === "/" ? "bg-[#9538E2] mt-3 rounded-t-2xl " : "bg-slate-100"
        }`}
      >
        <div>
          <a
            className={`btn btn-ghost text-xl ${
              pathname === "/" ? "text-white font-bold" : ""
            }`}
          >
            Gadget Heaven
          </a>
        </div>

        <div>
          <ul
            className={`flex gap-8 ${
              pathname === "/" ? "text-white font-bold" : ""
            }`}
          >
            <li>
              {" "}
              <NavLink
                to="/"
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
            <li>
              {" "}
              <NavLink
                to="/faq"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#007BFF]  underline"
                    : ""
                }
              >
                FAQ and Support
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
              <div className="indicator bg-white rounded-full p-2">
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
            <p className="relative bg-white rounded-full p-2 ">
              <CiHeart className="text-2xl" />
              <span className="absolute -top-3 -right-0  rounded-full bg-slate-100 h-5 w-5">
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
