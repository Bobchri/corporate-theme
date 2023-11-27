import React from "react";
import OurTeamCrumb from "../breadcrumbs/OurTeamCrumb";

const TeamBanner = () => {
  return (
    <div className="team-cover">
      <div className="container mx-auto px-10">
        {/*Banner Goes Here*/}
        <div className=" py-10 md:py-10 lg:py-10 xl:py-10 text-black">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="justify-center mt-5 md:mt-10 md:ml-20 md:text-3xl lg:text-3xl xl:text-3xl font-semibold text-2xl mb-4 text-gray-400">
              Members
            </h1>
            <div className="flex items-center justify-center">
              <p className="md:text-3xl lg:text-3xl xl:text-3xl font-semibold text-2xl text-gray-400">
                <OurTeamCrumb />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamBanner;
