import React from "react";
import ServicesCard from "../card/ServicesCard";
import Service1 from "../AboutUs/assets/service-1.png";
import Service2 from "../AboutUs/assets/service-2.png";
import Service3 from "../AboutUs/assets/service-3.png";

const Services = () => {
  return (
    <div className="container mx-auto">
      <div className="max-w-8xl mx-auto text-center text-lg p-5 my-10">
        <p className="text-base md:text-lg lg:text-neutral-500 mb-3">
          SERVICES
        </p>
        <h1 className="max-w-md text-4xl mx-auto font-semibold mb-10">
          We provide high quality services
        </h1>

        <div className="px-auto overflow-hidden grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 p-1">
          {/* First Card */}
          <ServicesCard
            avatar={Service1}
            serviceName="Software Development"
            description="We are a software development company focused on delivering innovative, scalable solutions tailored to your business needs. Our team creates high-quality web and mobile applications to drive growth and streamline operations."
          />
          {/* Second Card */}
          <ServicesCard
            avatar={Service2}
            serviceName="SEO and Marketing Services"
            description="We offer services to boost your online visibility, drive targeted traffic, and convert leads into loyal customers.We optimize your website for top search engines like Google, Bing, and Yahoo, using proven strategies to enhance organic search performance and maximize reach."
          />
          {/* Third Card */}
          <ServicesCard
            avatar={Service3}
            serviceName="Continuous Support"
            description="Our commitment to excellence goes beyond launching your website. We offer ongoing support and maintenance to keep your site secure, up-to-date, and performing at its best. From troubleshooting to scaling your infrastructure, we’re here to support your online success every step of the way."
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
