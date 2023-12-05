import React from "react";
import Link from "next/link";
import Logo from "./logo";

// import Image from "next/AW_logo.PNG"

const Navbar = () => {
  return (
    <>
      <div className="w-full h-20 bg-white sticky top-0">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            {/* Check the styles applied to the Logo component */}
            <Logo className="max-h-full" />

            {/* Ensure that the ul element doesn't affect the positioning */}
            <ul className="hidden md:flex gap-x-6 text-black overflow-hidden flex-shrink-0">
              <li>
                <Link href="/about">
                  <p>Case Studies</p>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <p>Pricing</p>
                </Link>
              </li>
              <li>
                <Link href="/contacts">
                  <p>Planner</p>
                </Link>
              </li>
              <li>
                <Link href="/events">
                  <p>Events</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;