import React from "react";
import ContactCard from "../card/ContactCard";

const DetailsStack = () => {
  return (
    <div className=" py-20 justify-center my-3">
      <div className="container px-auto text-center overflow-hidden mx-auto flex flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 p-5">
          {/* First Card */}
          <ContactCard
            icon="fa-light fa-database"
            title="Our location"
            address="Rongai-Kenya"
          />
          {/* Second Card */}
          <ContactCard
            icon="fa-light fa-database"
            title="Business Hours"
            address="We are open 6 days a week from 7am to 9pm, Sunday closed."
          />
          {/* Third Card */}
          <ContactCard
            icon="fa-light fa-database"
            title="Let's Talk"
            address="Phone Number: +254703274032 Whatsapp: 0703274032"
          />
        </div>
      </div>
    </div>
  );
};

export default DetailsStack;
