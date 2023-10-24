import React from "react";
import PriceCard from "../Cards/PriceCard";

const PriceStack = () => {
  return (
     <div className="container mx-auto">
        <div className="max-w-8xl mx-auto text-center text-lg p-20">
        <p className="text-base md:text-lg lg:text-neutral-500 mb-3">PREDICTABLE PRICING</p>
        <h1 className="max-w-xl mx-auto text-4xl font-semibold">Choose the right plan for your business</h1>
        <div className="overflow-hidden grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 p-5">
      
      {/* First Card */}
      <PriceCard
        price="$29"
        plan={"Basic Plan"}
        packageName="Starter Design"
        content="This was released more than 6 years ago and it is still one of the top selling themes, based on stable framework."
      />

      {/* Second Card */}
      <PriceCard
        price="$49"
        plan={"Normal Plan"}
        packageName="Medium Design"
        content="This is a consistent and reliable theme, we're improving it all the time adding new features, staying on top."
      />

      {/* Third Card */}
      <PriceCard
        price="$69"
        plan={"Pros Plan"}
        packageName="Premium Design"
        content="We have many returning customers that got to trust us as a solid partner. Join the 50,000+ happy BDesign users."
      />

    </div>
        </div>
     </div>

    
  );
};

export default PriceStack;
