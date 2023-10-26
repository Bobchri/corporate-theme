"use client";
import React from "react";
import DefaultLayout from "@/layout/DefaultLayout";
import DetailsStack from "@/components/ContactUs/DetailsStack";

const ContactUs = () => {
  return (
    <DefaultLayout>
      <div className="p-5">
        <DetailsStack />
      </div>
    </DefaultLayout>
  );
};

export default ContactUs;
