import React from "react";
import RoleCard from "../card/RoleCard";
import { useState } from "react";
import { useEffect } from "react";

const RoleCardStack = () => {
  const [roleData, setRoleData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/role");
        const data = await response.json();
        setRoleData(data.roleData);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container my-5 px-auto overflow-hidden mx-auto -m-16 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 p-5">
      {roleData.map((data, index) => (
        <RoleCard
          key={index}
          avatar={data.avatar}
          service={data.service}
          description={data.description}
        />
      ))}
    </div>
  );
};

export default RoleCardStack;
