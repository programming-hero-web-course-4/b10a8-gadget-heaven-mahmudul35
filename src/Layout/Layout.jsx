import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../component/Footer/Footer";
import Navbar from "../component/Navbar/Navbar";
const Layout = () => {
  return (
    <div>
      <Navbar />

      <div className="min-h-[calc(100vh-244px)]">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
