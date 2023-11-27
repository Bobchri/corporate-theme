import React from "react";
import Link from "next/link";

const ServiceCrumb = () => {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="container inline-flex items-center space-x-1 md:space-x-3 m-4">
        <li className="inline-flex items-center">
          <Link
            href="/"
            className="inline-flex items-center text-sm font-normal text-gray-700 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange"
          >
            Home
          </Link>
        </li>
        <li>
          <div className="flex items-center">
            <svg
              className="w-3 h-3 text-gray-400 mx-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <p
              className="ml-1 text-sm font-normal text-gray-700 md:ml-2 dark:text-gray-400 dark:hover:text-orange"
            >
              Services
            </p>
          </div>
        </li>
      </ol>
    </nav>
  );
};

export default ServiceCrumb;
