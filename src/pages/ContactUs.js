"use client";
import React from "react";
import DefaultLayout from "@/layout/DefaultLayout";
import DetailsStack from "@/components/ContactUs/DetailsStack";
import ContactCrumb from "@/components/breadcrumbs/ContactCrumb";
import ContactBanner from "@/components/ContactUs/ContactBanner";

const ContactUs = () => {
  return (
    <DefaultLayout>
      <ContactBanner />
      <ContactCrumb />
      <DetailsStack />
    </DefaultLayout>
  );
};

export default ContactUs;
