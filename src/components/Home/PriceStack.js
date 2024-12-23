import React from "react";
import PriceCard from "../card/PriceCard";

const PriceStack = () => {
  return (
    <div className="container mx-auto">
      <div className="max-w-8xl mx-auto text-center text-lg p-5">
        <p className="text-base md:text-lg lg:text-neutral-500 mb-3">
          OUR PRICING
        </p>
        <h1 className="max-w-xl mx-auto text-4xl font-semibold py-2">
          Choose the right plan for your business
        </h1>
        <div className="overflow-hidden grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 p-5">
          {/* First Card */}
          <PriceCard
            price="Ksh 12,000-20,000"
            plan={"Basic Plan"}
            packageName="Starter Website"
            Special="Google Analytics"
            products="5 Page website"
            Specifications="whatsapp chat integration"
            storage="6 month free maintenance"
            bandwidth="Free hosting for 1 year"
          />

          {/* Second Card */}
          <PriceCard
            price="Ksh 60,000-150,000"
            plan={"Standard Plan"}
            packageName="Corporate Websites"
            products="Upto 12 Pages"
            storage="1 year free maintenance"
            bandwidth="Hosting+Domain included"
            Special="E-commerce Support"
            Specifications="SEO optimization"
          />
          {/* Second Card */}
          <PriceCard
            price="Ksh 200,000-500,000"
            plan={"Premium Plan"}
            packageName="Custom softwares"
            products="CRM Softwares"
            storage="1 year free maintenance"
            bandwidth="Data Management"
            Special="ERP Softwares"
            Specifications="Automation"
          />

          {/* Second Card */}
          <PriceCard
            price="Ksh 3,000" 
            plan={"lipa mdogo monthly website"}
            packageName="Starter website"
            products="Only available for basic plan"
            storage="5 Page website"
            bandwidth="8 months duration"
            Special="Free hosting for 1 year"
            Specifications="whatsapp chat integration"
          />
          {/* Second Card */}
          <PriceCard
            price="Ksh 250,000"
            plan={"Cross platform Mobile App"}
            packageName="Mobile App"
            products="Upto 10 pages"
            storage="1 year free maintenance"
            bandwidth="Multi-Platform Compatibility"
            Special="Offline Functionality"
            Specifications="Responsive Design"
          />
          

          {/* Third Card */}
          <PriceCard
            price="Special projects"
            plan={"Business Automation"}
            packageName="AI data analytics"
            products="Project Management"
            storage="Talent recruitment"
            bandwidth="Digital marketing"
            Special="StartUp Idea Implimentation"
            Specifications="AI Chatbots & Mobile games"
          />
        </div>
      </div>
    </div>
  );
};

export default PriceStack;
