import { React, useState, useEffect } from "react";
import FeedbackCard from "../card/FeedbackCard";

const Feedbacks = () => {
  const [feedbackData, setFeedbackData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/feedbacks"); // Assuming you have set up the API route as mentioned in the previous example
        const data = await response.json();
        setFeedbackData(data.feedbackData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto">
      <div className="max-w-8xl mx-auto text-center text-lg p-5 my-10">
        <p className="text-base md:text-lg lg:text-neutral-500">
          <span className="text-orange-500 font-semibold">50,000+ </span>HAPPY
          USERS
        </p>
        <h1 className="text-4xl font-semibold mb-3">
          See why they love it so much!
        </h1>

        <p className=" max-w-md mx-auto text-base md:text-lg lg:text-neutral-400 mb-10">
          BDesign is a very powerful theme which suits both users with no
          programming
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
