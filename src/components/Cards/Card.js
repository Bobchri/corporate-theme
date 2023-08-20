import React from "react";
import "font-awesome/css/font-awesome.min.css"; // Import Font Awesome CSS

const Card = ({ icon, title, content }) => {
  return (
    <div className="max-w-md mx-auto  rounded-xl shadow-2xl overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <div className="p-8">
            <i
              className={`text-4xl text-gray-500 fa ${icon} mb-4`}
              aria-hidden="true"
            ></i>
            <h3 className="text-2xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">{content}</p>
            <a
              href="#"
              className="font-bold hover:text-orange-600 transition-colors duration-300 underline underline-offset-8"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
