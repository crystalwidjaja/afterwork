import React from "react";
import Link from "next/link";
import Logo from "../logo";
import './login-navbar.css';

// import Image from "next/AW_logo.PNG"

const Navbar = () => {
  return (
    <>
      <div className="w-full h-20 bg-white sticky top-0">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <Logo />
            <div className='vendors-button'>
              <img src='vendor-requests-button.png' alt="vendor-requests-button" width={215} height={50} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;