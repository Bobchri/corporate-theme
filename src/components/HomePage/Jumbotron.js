import React from "react";
import Image from "next/image";
import jumbotron from "../HomePage/assets/jumbotron.jpg";
import Button from "../buttons/Button";

const Jumbotron = () => {
  return (
    <div className="container mx-auto overflow-hidden flex grid-cols-2 md:grid-cols-2 lg:grid-cols-2 p-10">
      {/*Jumbotron Background*/}
      <Image
        className="w-max h-64 md:w-max md:h-[25vw]"
        src={jumbotron}
        alt="Background"
        width={1000}
        height={1000}
      />

      {/*Info banner*/}
      <div className="h-max my-auto max-w-xl rounded shadow-lg bg-white py-10 -mx-16 px-5">
        <p className="text-center text-base md:text-lg lg:text-orange-500">
          WHAT WE DO
        </p>
        <h5 className="text-2xl text-center font-semibold m-3">
          Need a solid theme you can count on? Look no further!
        </h5>
        <p className=" max-w-md mx-auto text-base md:text-lg lg:text-neutral-400 ">
          We create interactive, modern websites. We help you build strong
          online presence for your business by creating a professional website
          which best suits your needs and target audience.
        </p>
        <div className="text-center">
          <Button
            bgColor="white"
            textColor="black"
            text="View More"
            className="text-center"
          />
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
