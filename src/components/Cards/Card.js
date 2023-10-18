import React from "react";
import "font-awesome/css/font-awesome.min.css";

const Card = ({ icon, title, content }) => {
  return (
    <div class="max-w-xs rounded overflow-hidden shadow-lg bg-white py-10 px-5">
 
  <div class="text-4xl text-gray-600 px-5">
    <i class={`text-4xl text-gray-500 fa ${icon} mb-4`}></i>
  </div>
  
  <div class="px-6 py-4">
    <h2 class="text-2xl font-semibold mb-2">{title}</h2>
    <p class="text-gray-700 text-base">{content}</p>
  </div>
  <div class="px-6 py-4">
    <a href="#" class="font-bold hover:text-orange-500 transition-colors duration-300 underline underline-offset-8">Read More</a>
  </div>
</div>
  );
};

export default Card;
