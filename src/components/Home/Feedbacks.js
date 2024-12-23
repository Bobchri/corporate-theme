import React from "react";
import FeedbackCard from "../card/FeedbackCard";
import feedbackData from "@/data/feedbackData";

const Feedbacks = () => {
  return (
    <div className="container mx-auto">
      <div className="max-w-8xl mx-auto text-center text-lg p-5 my-10">
        <p className="text-base md:text-lg lg:text-neutral-500">
          <span className="text-orange-500 font-semibold">10,000+ </span>HAPPY
          CLIENTS
        </p>
        <h1 className="text-4xl font-semibold mb-3">
          See why they love it so much!
        </h1>

        <p className=" max-w-md mx-auto text-base md:text-lg lg:text-neutral-400 mb-10">
        we provide innovative software solutions designed to bring your ideas to life. Let’s create something amazing together
        </p>

        <div className="px-auto overflow-hidden grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 p-1">
          {feedbackData.map((data, index) => (
            <FeedbackCard
              key={index}
              avatar={data.avatar}
              name={data.name}
              comment={data.comment}
              stars={data.stars}
              role={data.role}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feedbacks;
