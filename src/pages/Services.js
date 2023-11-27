"use client";
import React from "react";
import DefaultLayout from "@/layout/DefaultLayout";
import RoleCardStack from "@/components/Services/RoleCardStack";
import ServiceBanner from "@/components/Services/ServiceBanner";
import ServiceCrumb from "@/components/breadcrumbs/ServiceCrumb";

const Services = () => {
  return (
    <DefaultLayout>
      <ServiceBanner />
      <ServiceCrumb />
      <RoleCardStack />
    </DefaultLayout>
  );
};

export default Services;
