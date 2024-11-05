import React from "react";

const Footer = () => {
  return (
    <div className=" bg-base-300 py-16 mt-36">
      <div className="text-center border-b-2 ">
        <h1 className="text-3xl font-bold">Gadget Heaven</h1>
        <p>Leading the way in cutting-edge technology and innovation.</p>
      </div>

      <footer className="footer justify-evenly text-base-content pt-10">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
