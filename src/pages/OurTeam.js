"use client";
import React from "react";
import DefaultLayout from "@/layout/DefaultLayout";
import TeamBanner from "@/components/OurTeam/TeamBanner";

const OurTeam = () => {
  return (
    <DefaultLayout>
      <div>
        <TeamBanner/>
      </div>
    </DefaultLayout>
  );
};

export default OurTeam;
