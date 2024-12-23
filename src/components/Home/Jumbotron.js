import React from "react";
import Image from "next/image";
import jumbotron from "../Home/assets/jumbotron.jpg";
import Button from "../buttons/Button";

const Jumbotron = () => {
  return (
    <div className="container mx-auto flex flex-col md:flex-row items-center p-10">
      {/* Jumbotron Background */}
      <div className="w-full md:w-1/2 md:order-1">
        <Image
          className="w-full h-auto md:h-[25vw]"
          src={jumbotron}
          alt="Background"
          width={1000}
          height={1000}
        />
      </div>

      {/* Info banner */}
      <div className="w-full md:w-1/2 md:order-2 md:ml-5">
        <div className="h-max rounded shadow-lg bg-white py-10 px-5">
          <p className="text-center text-base md:text-lg lg:text-orange-500">
          AI for Real Impact
          </p>
          <h5 className="text-black text-2xl text-center font-semibold m-3">
          Ready to bring your vision to life? Explore our services and get started today!
          </h5>
          <p className="max-w-md mx-auto text-base md:text-lg lg:text-neutral-400">
          Unlock the power of AI-driven automation and data analytics to transform your business. Discover hidden opportunities, boost productivity, and achieve unmatched efficiency. Start making smarter decisions today!
          </p>
          <div className="text-center">
            <Button
              bgColor="white"
              textColor="black"
              text="Get started"
              className="text-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
