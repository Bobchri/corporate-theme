import { React, useState, useEffect } from "react";
import Card from "../card/Card";

const MainCardStack = () => {
  const [fieldData, setFieldData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/fields"); // Assuming you have set up the API route as mentioned in the previous example
        const data = await response.json();
        setFieldData(data.fieldData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container px-auto overflow-hidden mx-auto -m-16 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 p-5">
      {fieldData.map((data, index) => (
        <Card
          key={index}
          icon={data.icon}
          title={data.title}
          content={data.content}
        />
      ))}
    </div>
  );
};

export default MainCardStack;
