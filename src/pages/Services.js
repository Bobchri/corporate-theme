"use client";
import React from "react";
import DefaultLayout from "@/layout/DefaultLayout";
import RoleCardStack from "@/components/Services/RoleCardStack";

const Services = () => {
  return (
    <DefaultLayout>
      <div className="p-5 m-20">
        <RoleCardStack />
      </div>
    </DefaultLayout>
  );
};

export default Services;
