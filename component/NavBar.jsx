"use client";
import React, { useState, useEffect } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false); // Start closed

  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) setIsOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  return (
    <>
      <nav className="pt-[1.6rem] px-[16px]">
        <div className="max-w-[1300px] border-2 border-black mx-auto mt-[1.2rem] mb-[28px]">
          <div className="w-full flex justify-between items-center px-[2.8rem]">
            <div className="border-r-2 border-black flex-shrink-0 py-[12px] pr-[2.8rem]">
              <a href="/">
                <img
                  className="w-[16rem] cursor-pointer"
                  src="/nav-logo.svg"
                  alt="logo"
                />
              </a>
            </div>
            <div className="hidden md:block overflow-y-auto pl-[2.4rem]">
              <ul className="flex gap-[4.2rem] whitespace-nowrap text-[16px]">
                <li>
                  <a
                    href="/"
                    className="hover:underline underline-offset-8 decoration-2 decoration-[#C5A880] cursor-pointer"
                  >
                    HOME
                  </a>
                </li>
                <li>
                  <a
                    href="/#shop"
                    className="hover:underline underline-offset-8 decoration-2 decoration-[#C5A880] cursor-pointer"
                  >
                    SHOP
                  </a>
                </li>
                <li>
                  <a
                    href="/connect"
                    className="hover:underline underline-offset-8 decoration-2 decoration-[#C5A880] cursor-pointer"
                  >
                    CONNECT
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="hover:underline underline-offset-8 decoration-2 decoration-[#C5A880] cursor-pointer"
                  >
                    ABOUT US
                  </a>
                </li>
                <li>
                  <a
                    href="/search"
                    className="hover:underline underline-offset-8 decoration-2 decoration-[#C5A880] cursor-pointer"
                  >
                    SEARCH
                  </a>
                </li>
                <li>
                  <a
                    href="/cart"
                    className="hover:underline underline-offset-8 decoration-2 decoration-[#C5A880] cursor-pointer"
                  >
                    CART
                  </a>
                </li>
                <li>
                  <a
                    href="/account/login"
                    className="hover:underline underline-offset-8 decoration-2 decoration-[#C5A880] cursor-pointer"
                  >
                    ACCOUNT
                  </a>
                </li>
              </ul>
            </div>

            <div className="md:hidden pl-[2.4rem]">
              <button
                className="absolute top-18 right-16 z-50"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
              >
                <div
                  className={`transition-transform duration-500 ease-in-out ${
                    isOpen ? "rotate-90" : "rotate-0"
                  }`}
                >
                  {isOpen ? (
                    <svg
                      className="w-[24px] h-[24px]"
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      ></path>
                    </svg>
                  ) : (
                    <svg
                      className="w-[24px] h-[24px]"
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="0"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      ></path>
                    </svg>
                  )}
                </div>
              </button>
              <div
                className={`fixed top-0 bottom-0 w-1/2 pt-[70px] px-[18px] z-40 bg-[#f3efe4] shadow-[0_-2px_18px_rgba(0,0,0,0.1)] transition-all duration-500 ease-in-out ${
                  isOpen ? "right-0" : "-right-[500px]"
                }`}
              >
                <ul className="flex flex-col gap-[4.2rem] justify-center items-center whitespace-nowrap text-[16px]">
                  <li>
                    <a
                      href="/"
                      className="hover:underline underline-offset-8 decoration-2 decoration-[#C5A880] cursor-pointer"
                    >
                      HOME
                    </a>
                  </li>
                  <li>
                    <a
                      href="/#shop"
                      onClick={() => setIsOpen(!isOpen)}
                      className="hover:underline underline-offset-8 decoration-2 decoration-[#C5A880] cursor-pointer"
                    >
                      SHOP
                    </a>
                  </li>
                  <li>
                    <a
                      href="/connect"
                      className="hover:underline underline-offset-8 decoration-2 decoration-[#C5A880] cursor-pointer"
                    >
                      CONNECT
                    </a>
                  </li>
                  <li>
                    <a
                      href="/about"
                      className="hover:underline underline-offset-8 decoration-2 decoration-[#C5A880] cursor-pointer"
                    >
                      ABOUT US
                    </a>
                  </li>
                  <li>
                    <a
                      href="/search"
                      className="hover:underline underline-offset-8 decoration-2 decoration-[#C5A880] cursor-pointer"
                    >
                      SEARCH
                    </a>
                  </li>
                  <li>
                    <a
                      href="/cart"
                      className="hover:underline underline-offset-8 decoration-2 decoration-[#C5A880] cursor-pointer"
                    >
                      CART
                    </a>
                  </li>
                  <li>
                    <a
                      href="/account/login"
                      className="hover:underline underline-offset-8 decoration-2 decoration-[#C5A880] cursor-pointer"
                    >
                      ACCOUNT
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
