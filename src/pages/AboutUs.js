"use client";
import React from "react";
import DefaultLayout from "@/layout/DefaultLayout";
import OurTeam from "@/components/AboutUs/OurTeam";
import Services from "@/components/AboutUs/Services";
import ChooseUs from "@/components/AboutUs/ChooseUs";

const AboutUs = () => {
  return (
    <DefaultLayout>
      <div className="p-5">
        <ChooseUs/>
        <Services/>
        <OurTeam/>
      </div>
    </DefaultLayout>
  );
};

export default AboutUs;
