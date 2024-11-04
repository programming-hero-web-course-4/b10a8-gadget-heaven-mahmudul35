import React from "react";
import { CiHeart } from "react-icons/ci";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const homepage = location.pathname === "/";
  return (
    <div className={`${homepage ? "bg-black " : ""}`}>
      <div className="navbar bg-base-100 justify-around items-center">
        <div>
          <a className="btn btn-ghost text-xl">Gadget Heaven</a>
        </div>

        <div>
          <ul className="flex ">
            <li>
              {" "}
              <Link
                to="/"
                // className={
                //   location.pathname === "/" ? "underline btn btn-ghost" : ""
                // }
                className="btn btn-ghost"
              >
                Home
              </Link>
            </li>
            <li>
              {" "}
              <Link to="/statistics" className="btn btn-ghost">
                Statistics
              </Link>
            </li>
            <li>
              {" "}
              <Link to="/dashboard" className="btn btn-ghost">
                Dashboard
              </Link>
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
                <span className="badge badge-sm indicator-item">8</span>
              </div>
            </div>
          </div>
          <div>
            <p>
              <CiHeart className="text-2xl" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
