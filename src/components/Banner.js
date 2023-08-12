import React from "react";
import Button from "../components/Button";

const Banner = () => {
  return (
    <div className="container mx-auto px-20">
      {/*Banner Goes Here*/}
      <div className="  text-black p-20">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-base font-semibold mb-2">Welcome to BDESIGN!</h1>
          <h1 className="text-5xl font-semibold ">
            Join over{" "}
            <span className="text-6xl font-bold text-orange-500">50K+</span>
          </h1>
          <h1 className="text-5xl font-semibold mb-4">
            Customers who Love It!
          </h1>
          <p className="text-lg">Offering web solutions since June 04. 2011</p>
          <Button bgColor="blue-500" textColor="white" text="View More" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
