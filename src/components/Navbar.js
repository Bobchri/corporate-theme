"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [selectedLink, setSelectedLink] = useState("Home");
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showPagesSubNav, setshowPagesSubNav] = useState(false);
  const [showNewsSubNav, setNewsSubNav] = useState(false);

  const handleLinkClick = (linkText) => {
    setSelectedLink(linkText);
  };

  useEffect(() => {
    setSelectedLink("Home"); // Set the initial selected link here if needed.
  }, []);

  const toggleMobileMenu = () => {
    setShowMobileMenu((prevShowMobileMenu) => !prevShowMobileMenu);
  };

  return (
    <nav className="relative top-0 left-0 w-full bg-black py-1 px-6 flex flex-col">
      {/* Company Logo */}
      <div className="flex items-center mb-4 pl-10 pt-2">
        {/* Company Logo */}
        <div className="flex items-center mb-4 pl-10 pt-2">
          <Image
            src="/navbar-logo.svg"
            alt="Company Logo"
            width={50}
            height={50}
            className="h-10 w-auto ml-[5%]"
          />
        </div>
      </div>

      {/* Navigation Links */}
      <div className="hidden lg:flex justify-center space-x-8 mt-4">
        <Link
          id="strike"
          href="/"
          className={`text-white hover:text-gray-300 ${
            selectedLink === "Home" ? "selected" : ""
          }`}
          onClick={() => handleLinkClick("Home")}
        >
          Home
        </Link>

        {/*Pages*/}
        <div
          className="relative"
          onMouseEnter={() => setshowPagesSubNav(true)}
          onMouseLeave={() => setshowPagesSubNav(false)}
        >
          <a
            id="strike"
            href="#"
            className={`text-white hover:text-gray-300 ${
              selectedLink === "Pages" ? "selected" : ""
            }`}
            onClick={() => handleLinkClick("Pages")}
          >
            Pages
          </a>
          {showPagesSubNav && (
            <ul
              className="absolute left-0 mt-2 text-sm px-5 bg-slate-100 border rounded border-white w-52"
              onMouseEnter={() => setshowPagesSubNav(true)} // Keep the dropdown open when the user hovers over the dropdown list
              onMouseLeave={() => setshowPagesSubNav(false)} // Close the dropdown when the user stops hovering over both the link and the dropdown list
              style={{ top: "80%" }}
            >
              {/* Sub-navigation: Pages */}
              <li className="py-2">
                <Link
                  className="text-black hover:text-orange-500"
                  href="/AboutUs"
                >
                  About Us
                </Link>
              </li>
              <li className="py-2">
                <Link
                  className="text-black hover:text-orange-500"
                  href="/ContactUs"
                >
                  Contact Us
                </Link>
              </li>
              <li className="py-2">
                <Link
                  className="text-black hover:text-orange-500"
                  href="/Services"
                >
                  Services
                </Link>
              </li>
              <li className="py-2">
                <Link
                  className="text-black hover:text-orange-500"
                  href="/Testimonials"
                >
                  Testimonials
                </Link>
              </li>
              <li className="py-2">
                <Link
                  className="text-black hover:text-orange-500"
                  href="Error404"
                >
                  Error 404
                </Link>
              </li>
              {/* Add more sub-navigation items if needed */}
            </ul>
          )}
        </div>

        {/*Portfolio*/}
        <a
          id="strike"
          href="#"
          className={`text-white hover:text-gray-300 ${
            selectedLink === "Portfolios" ? "selected" : ""
          }`}
          onClick={() => handleLinkClick("Portfolios")}
        >
          Portfolios
        </a>

        {/*Our Team*/}
        <Link
          id="strike"
          href="/OurTeam"
          className={`text-white hover:text-gray-300 ${
            selectedLink === "Our-Team" ? "selected" : ""
          }`}
          onClick={() => handleLinkClick("Our-Team")}
        >
          Our Team
        </Link>

        {/*News*/}
        <div
          className="relative"
          onMouseEnter={() => setNewsSubNav(true)}
          onMouseLeave={() => setNewsSubNav(false)}
        >
          <a
            id="strike"
            href="#"
            className={`text-white hover:text-gray-300 ${
              selectedLink === "News" ? "selected" : ""
            }`}
            onClick={() => handleLinkClick("News")}
          >
            News
          </a>
          {showNewsSubNav && (
            <ul
              className="absolute left-0 mt-2 text-sm px-5 bg-slate-100 border rounded border-white w-52"
              onMouseEnter={() => setNewsSubNav(true)} // Keep the dropdown open when the user hovers over the dropdown list
              onMouseLeave={() => setNewsSubNav(false)} // Close the dropdown when the user stops hovering over both the link and the dropdown list
              style={{ top: "80%" }}
            >
              {/* Sub-navigation link: News*/}
              <li className="py-2">
                <a href="#" className="text-black hover:text-orange-500">
                  Classic
                </a>
              </li>
              <li className="py-2">
                <a href="#" className="text-black hover:text-orange-500">
                  Grid
                </a>
              </li>
              <li className="py-2">
                <a href="#" className="text-black hover:text-orange-500">
                  Masonary
                </a>
              </li>
              <li className="py-2">
                <a href="#" className="text-black hover:text-orange-500">
                  Timeline
                </a>
              </li>
              <li className="py-2">
                <a href="#" className="text-black hover:text-orange-500">
                  Single Post
                </a>
              </li>
              {/* Add more sub-navigation items if needed */}
            </ul>
          )}
        </div>

        {/*Contact Us Button*/}
        <div className="flex justify-center lg:mt-0">
          <a
            href="#contact-us"
            className="bg-orange-600 text-white hover:bg-orange-800 ml-5 mb-3 p-2 rounded"
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {showMobileMenu && (
        <div className="lg:hidden flex flex-col mt-1 space-y-2">
          <a
            id="strike"
            href="#"
            className={`text-white hover:text-gray-300 ${
              selectedLink === "Home" ? "selected" : ""
            }`}
            onClick={() => {
              handleLinkClick("Home");
              toggleMobileMenu();
            }}
          >
            Home
          </a>

          {/* Add other mobile navigation links and apply the same pattern */}
          <a
            href="#"
            className={`text-white hover:text-orange-500 ${
              selectedLink === "Pages" ? "selected" : ""
            }`}
            onClick={() => {
              handleLinkClick("Pages");
              toggleMobileMenu();
            }}
          >
            Pages
          </a>

          <a
            href="#"
            className={`text-white hover:text-orange-500 ${
              selectedLink === "Portfolio" ? "selected" : ""
            }`}
            onClick={() => {
              handleLinkClick("Portfolio");
              toggleMobileMenu();
            }}
          >
            Portfolio
          </a>

          <Link
            href="/OurTeam"
            className={`text-white hover:text-orange-500 ${
              selectedLink === "Our-Team" ? "selected" : ""
            }`}
            onClick={() => {
              handleLinkClick("Our-Team");
              toggleMobileMenu();
            }}
          >
            Our Team
          </Link>

          <a
            href="#"
            className={`text-white hover:text-orange-500 ${
              selectedLink === "News" ? "selected" : ""
            }`}
            onClick={() => {
              handleLinkClick("News");
              toggleMobileMenu();
            }}
          >
            News
          </a>

          <a
            href="#"
            className={`text-white hover:text-orange-500 ${
              selectedLink === "Elements" ? "selected" : ""
            }`}
            onClick={() => {
              handleLinkClick("Elements");
              toggleMobileMenu();
            }}
          >
            Elements
          </a>
        </div>
      )}

      {/* Hamburger Icon (Mobile) */}
      <div className="lg:hidden flex items-center justify-end">
        <button
          onClick={toggleMobileMenu}
          className="text-white hover:text-orange-500 focus:outline-none pb-2"
          aria-label="Open Mobile Menu"
        >
          <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
            {showMobileMenu ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1 5h22v2H1V5zm0 7h22v2H1v-2zm0 7h22v2H1v-2z"
              />
            ) : (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1 5h22v2H1V5zm0 7h22v2H1v-2zm0 7h22v2H1v-2z"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Style for the underline */}
      <style jsx>
        {`
          .selected::after {
            content: "";
            display: block;
            width: 100%;
            height: 2px;
            background-color: #ff6600;
            margin-top: 10px;
          }
          #strike:hover::after {
            content: "";
            display: block;
            width: 100%;
            height: 2px;
            background-color: #ff6600;
            margin-top: 10px;
          }
        `}
      </style>
    </nav>
  );
};

export default Navbar;
