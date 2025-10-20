import React, { useState } from "react";
import FyersLogo from '../assets/fyres_logo.png';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#182BFF] fixed top-0 left-0 right-0 z-50 h-[72px]">
      {/* Centered container with asymmetric padding so logo+menu sit slightly more left */}
       <div className="w-full max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        {/* Left group: logo + menu (keeps items together, won't shrink) */}
        <div className="flex items-center gap-8 sm:gap-16  xl:-ml-36  flex-shrink-0">
          <img src={FyersLogo} alt="Fyers" className="h-8 object-contain" />

          <div className="hidden md:flex items-center gap-4 sm:gap-6 lg:gap-8 whitespace-nowrap">
            <a className="text-white hover:text-yellow-400 inline-flex items-center gap-2 font-medium leading-none" href="#">
              Products
              <svg className="w-4 h-4 text-white inline-block align-middle" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </a>

            <a className="text-white hover:text-yellow-400 inline-flex items-center gap-2 font-medium leading-none" href="#">
              Offerings
              <svg className="w-4 h-4 text-white inline-block align-middle" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </a>

            <a className="text-white hover:text-yellow-400 inline-flex items-center gap-2 font-medium leading-none" href="#">
              Learning
              <svg className="w-4 h-4 text-white inline-block align-middle" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </a>

            <a className="text-white hover:text-yellow-400 inline-flex items-center gap-2 font-medium leading-none" href="#">
              About Us
            </a>

            <a className="text-white hover:text-yellow-400 inline-flex items-center gap-2 font-medium leading-none" href="#">
              More
              <svg className="w-4 h-4 text-white inline-block align-middle" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right group: login / signup / hamburger */}
        <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0 2xl:-mr-20">
          <button className="hidden md:block bg-[#182BFF] hover:bg-[#4352f1] text-white px-4 py-1 border border-white">Login</button>
          <button className="hidden md:block bg-[#F5FF0A] hover:bg-[#eef193] text-black px-4 py-1 ">Sign Up</button>
          <button className="md:hidden p-2" onClick={() => setMenuOpen(v => !v)}>
            <span className="block w-6 h-1 bg-white mb-1"></span>
            <span className="block w-6 h-1 bg-white mb-1"></span>
            <span className="block w-6 h-1 bg-white"></span>
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-blue-700 flex flex-col items-center py-4 md:hidden">
          <a className="text-white py-2" href="#">Products</a>
          <a className="text-white py-2" href="#">Offerings</a>
          <a className="text-white py-2" href="#">Learning</a>
          <a className="text-white py-2" href="#">About Us</a>
          <a className="text-white py-2" href="#">More</a>
          <button className="bg-[#182BFF] hover:bg-[#acb2f7] text-white px-4 py-1 rounded my-2">Login</button>
          <button className="bg-[#F5FF0A] hover:bg-[#f0f1ba] text-black px-4 py-1 rounded">Sign Up</button>
        </div>
      )}
    </nav>
  );
}