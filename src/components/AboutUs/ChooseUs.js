import React from "react";
import ChooseUsCard from "../card/ChooseUsCard";

const ChooseUs = () => {
  return (
    <div className="container mx-auto">
      <div className="max-w-8xl mx-auto text-center text-lg p-5 mt-10">
        <p className="text-base md:text-lg lg:text-neutral-500 pb-2">
          WHY CHOOSE US
        </p>
        <h1 className="max-w-md text-4xl mx-auto font-semibold mb-10">
        Innovative solutions, reliable support, exceptional results.
        </h1>

        <div className="px-auto overflow-hidden grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8">
          {/* First Card */}
          <ChooseUsCard
            number={5}
            statement="Years"
            description="Implimenta still remains the best software solutions provider in Kenya."
          />
          {/* Second Card */}
          <ChooseUsCard
            number={10000}
            statement="Satisfied Clients"
            description="We have many returning customers that trust us a solid partner."
          />
          {/* Third Card */}
          <ChooseUsCard
            number={300}
            statement="Project Done"
            description="Join the 10,000+ happy clients and learn why we've been the best in software market for so long"
          />
        </div>
      </div>
      <div className="mx-auto flex justify-center"></div>
    </div>
  );
};

export default ChooseUs;
