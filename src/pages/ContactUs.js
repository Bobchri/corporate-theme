"use client";
import React from "react";
import DefaultLayout from "@/layout/DefaultLayout";
import DetailsStack from "@/components/ContactUs/DetailsStack";
import ContactBreadCrumb from "@/components/breadcrumbs/contactBreadCrumb";

const ContactUs = () => {
  return (
    <DefaultLayout>
      <div className="p-5">
        <ContactBreadCrumb />
        <DetailsStack />
      </div>
    </DefaultLayout>
  );
};

export default ContactUs;
