import React from "react";
import "font-awesome/css/font-awesome.min.css";

const PriceCard = ({ price, plan, packageName, content }) => {
  return (
    <div class="max-w-xl rounded overflow-hidden shadow-lg bg-white py-10 px-5">
  <div class="text-5xl font-bold p-7 bg-orange-500">
<h1 className="text-gray-100">{price}<span className="text-base font-semibold">Monthly</span></h1>    
  </div>
  
  <div class="px-6 py-4">
    <p class="text-orange-500 text-base font-semibold">{plan}</p>
    <h2 class="text-2xl font-bold mb-2">{packageName}</h2>
    <p class="text-gray-700 text-base">{content}</p>
  </div>
  <div class="px-6 py-4">
    <a href="#" class="font-bold hover:text-orange-500 transition-colors duration-300 ">Purchase Now </a>
  </div>
</div>
  );
};

export default PriceCard;
