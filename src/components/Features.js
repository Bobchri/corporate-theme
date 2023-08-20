import React from "react";
import Button from "../components/Button";

const Features = () => {
  return (
    <div className="container mx-auto px-20">
      {/*Banner Goes Here*/}
      <div className=" py-4 md:py-24 lg:py-32 xl:py-8 text-black">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-base md:text-xl lg:text-xl xl:text-base font-semibold mb-2 text-gray-400 uppercase">
            Features
          </h1>
          <h1 className="text-4xl font-semibold ">Create your own unique</h1>
          <h1 className="md:text-4xl lg:text-4xl xl:text-4xl font-semibold  text-4xl mb-4 ">
            website & have fun doing it!
          </h1>
          <p className="text-base md:text-lg lg:text- text-neutral-400 w-[40%]">
            BDesign was released more than 6 years ago. And it is a very
            powerful theme which suits both users with no programming background
            as well as professional web designers.​
          </p>
          <Button bgColor="transparent" textColor="black" text="View More" />
        </div>
      </div>
    </div>
  );
};

export default Features;
