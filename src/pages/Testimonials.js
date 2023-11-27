"use client";
import React from "react";
import DefaultLayout from "@/layout/DefaultLayout";
import TestimonialsBanner from "@/components/Testimonials/TestimonialsBanner";
import TestimonialsCrumb from "@/components/breadcrumbs/TestimonialsCrumb";
import FeedbackCard from "@/components/card/FeedbackCard";
import testimonialsData from "@/data/testimonialsData.json";

const Testimonials = () => {
  return (
    <DefaultLayout>
      <TestimonialsBanner />
      <div className="container mx-auto">
        <TestimonialsCrumb />
        <div className="max-w-8xl mx-auto text-center text-lg p-5 my-10">
          <div className="px-auto overflow-hidden grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 p-1">
            {testimonialsData.map((data, index) => (
              <FeedbackCard
                key={index}
                avatar={data.avatar}
                name={data.name}
                comment={data.comment}
                stars={data.stars}
                role={data.role}
              />
            ))}
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Testimonials;
