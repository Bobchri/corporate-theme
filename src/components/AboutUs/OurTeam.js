import React from "react";
import OurTeamCard from "../card/OurTeamCard";
import Member1 from "../AboutUs/assets/member-1.jpg";
import Member2 from "../AboutUs/assets/member-2.jpg";
import Member3 from "../AboutUs/assets/member-3.jpg";
import Button from "../buttons/Button";

const OurTeam = () => {
  return (
    <div className="container mx-auto">
      <div className="max-w-8xl mx-auto text-center text-lg p-5 mt-10">
        <p className="text-base md:text-lg lg:text-neutral-500">OUR TEAM</p>
        <h1 className="text-4xl font-semibold mb-10">Company Leadership</h1>

        <div className="px-auto overflow-hidden grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 p-1">
          {/* First Card */}
          <OurTeamCard
            avatar={Member1}
            name="Chrispin Odiwuor"
            role="Founder"
            description="Chrispin Odiwuor is the founder of Implimenta and a software engineer passionate about solving complex business problems through innovative solutions. With a keen interest in technology, Chrispin leverages expertise to create impactful software that drives business growth and efficiency."
          />
          {/* Second Card */}
          <OurTeamCard
            avatar={Member2}
            name="Victoria"
            role="Co-Founder"
            description="I’m Victoria, a passionate data scientist with a deep love for transforming data into actionable insights. I specialize in data analytics and machine learning, always seeking innovative solutions to complex problems. As a cofounder, I work together with the team to  create impactful and data-driven solutions that empower businesses to make smarter decisions and achieve their goals."
          />
          {/* Third Card */}
          <OurTeamCard
            avatar={Member3}
            name="Mwangi Whitney"
            role="CFO"
            description="Mwangi Whitney is a seasoned Chief Financial Officer (CFO) with extensive experience in financial management and strategic planning. With a keen eye for detail and a strong background in financial analysis, Robin helps businesses optimize their financial operations, drive growth, and ensure long-term sustainability. Passionate about data-driven decision-making, Robin works closely with leadership teams to align financial strategies with company objectives."
          />
        </div>
      </div>
      <div className="mx-auto flex justify-center">
        <Button bgColor="white" textColor="black" text="Contact Us" />
      </div>
    </div>
  );
};

export default OurTeam;
