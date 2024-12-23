import React from "react";
import Button from "../buttons/Button";

const Recruitment = () => {
  return (
    <div className="container mx-auto p-10">
      <div className="max-w-5xl mx-auto text-center text-lg">
        <h1 className="text-4xl font-semibold mb-3">
          Hire with us
        </h1>

        <p className="max-w-md mx-auto text-base md:text-lg lg:text-neutral-400">
          We can help you pick the best talent for your company
        </p>

        <div className="overflow-x-auto">
          <div className="flex space-x-16">
            <div className="text-center p-8">
              <div className="w-28 h-28 shadow-lg  bg-white rounded-full flex items-center justify-center">
                <span className="text-orange-500 text-2xl font-semibold">
                  01
                </span>
              </div>
              <h5 className="text-xl font-semibold mt-4">Web Developers</h5>
              <p className="text-base md:text-base lg:text-neutral-400">
              Elevate your business with expert web developers! Our team delivers custom websites that drive results. Hire now and bring your vision to life!
              </p>
            </div>

            <div className="text-center p-8">
              <div className="w-28 h-28 shadow-lg  bg-white rounded-full flex items-center justify-center">
                <span className="text-orange-500 text-2xl font-semibold">
                  02
                </span>
              </div>
              <h5 className="text-xl font-semibold mt-4">App Development</h5>
              <p className="text-base md:text-base lg:text-neutral-400">
              Turn your ideas into powerful mobile apps! Our expert developers create high-performance, user-friendly apps. Hire now and go mobile!
              </p>
            </div>

            <div className="text-center p-8">
              <div className="w-28 h-28 shadow-lg bg-white rounded-full flex items-center justify-center">
                <span className="text-orange-500 text-2xl font-semibold">
                  03
                </span>
              </div>
              <h5 className="text-xl font-semibold mt-4">Digital Marketing</h5>
              <p className="text-base md:text-base lg:text-neutral-400">
              Boost your brand with expert digital marketers! We create results-driven campaigns that grow your business. Hire now and dominate online!
              </p>
            </div>

            <div className="text-center p-8">
              <div className="w-28 h-28 shadow-lg  bg-white rounded-full flex items-center justify-center">
                <span className="text-orange-500 text-2xl font-semibold">
                  04
                </span>
              </div>

              <h5 className="text-xl font-semibold mt-4">Data analysts</h5>
              <p className="text-base md:text-base lg:text-neutral-400">
              Unlock the power of your data with our expert analysts! We turn complex data into actionable insights for smarter decisions and growth. Hire now!
              </p>
            </div>
          </div>
        </div>

        <Button bgColor="white" textColor="black" text="Hire with us" />
      </div>
    </div>
  );
};

export default Recruitment;
