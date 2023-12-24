import React, { useState, useEffect } from "react";
import MembersCard from "../card/MembersCard.js";

const MemberStack = () => {
  const [teamData, setTeamData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/members"); // Assuming you have set up the API route as mentioned in the previous example
        const data = await response.json();
        setTeamData(data.teamData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures that this effect runs once when the component mounts

  return (
    <div className="container mx-auto mb-20">
      <div className="max-w-8xl mx-auto text-center text-lg p-5 mt-10">
        <div className="px-auto overflow-hidden grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-8 p-1">
          {teamData.map((member, index) => (
            <MembersCard
              key={index}
              avatar={member.avatar}
              role={member.role}
              name={member.name}
              description={member.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MemberStack;
