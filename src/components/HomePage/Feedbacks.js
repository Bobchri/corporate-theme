import React from "react";
import FeedbackCard from "../Cards/FeedbackCard";

const Feedbacks = () => {
  return (
    <div className="container mx-auto p-10">
      <div className="max-w-7xl mx-auto text-center text-lg">
        <p className="text-base md:text-lg lg:text-neutral-500"><span className="text-orange-500 font-semibold">50,000+ </span>HAPPY USERS</p>
        <h1 className="text-4xl font-semibold mb-3">See why they love it so much!</h1>

        <p className=" max-w-md mx-auto text-base md:text-lg lg:text-neutral-400">
          BDesign is a very powerful theme which suits both users with no programming
        </p>

         <div className="px-auto overflow-hidden grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 p-1">
      {/* First Card */}
      <FeedbackCard
        avatar="/avatar-1.png"
        name="John Doe"
        comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat sagittis massa. Duis et cursus elit. Morbi lacinia luctus dui, lacinia imperdiet velit. Vestibulum eu dui turpis."
        stars={5}
        role="Customer"
      />

      {/* Second Card */}
      <FeedbackCard
        avatar="/avatar-1.png"
        name="Tom Jackson"
        comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat sagittis massa. Duis et cursus elit. Morbi lacinia luctus dui, lacinia imperdiet velit. Vestibulum eu dui turpis."
        stars={4}
        role="Customer"
      />

      {/* Third Card */}
      <FeedbackCard
        avatar="/avatar-1.png"
        name="Henry Harry"
        comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat sagittis massa. Duis et cursus elit. Morbi lacinia luctus dui, lacinia imperdiet velit. Vestibulum eu dui turpis."
        stars={5}
        role="Logistician"
      />

    </div>

      </div>
    </div>
  );
};

export default Feedbacks;
