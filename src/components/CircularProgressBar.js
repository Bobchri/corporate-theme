"use client";
import React, { useEffect, useState } from "react";

const CircularProgressBar = ({ progress }) => {
  const [isVisible, setIsVisible] = useState(false);
  const strokeWidth = 20;
  const radius = 10;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(
        scrollY > 0 &&
          scrollY < document.documentElement.scrollHeight - window.innerHeight
      );
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`circular-progress-container ${isVisible ? "visible" : ""}`}
    >
      <svg className="circular-progress" height="100" width="100">
        <circle
          className="circular-progress-background"
          strokeWidth={strokeWidth}
          r={radius}
          cx="50"
          cy="50"
        />
        <circle
          className="circular-progress-circle"
          strokeWidth={strokeWidth}
          r={radius}
          cx="50"
          cy="50"
          style={{ strokeDasharray: circumference, strokeDashoffset: offset }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-8 w-8 bg-black rounded-full"></div>
          <svg
            className="arrow-up text-white w-5 h-5 absolute"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M6.293 10.293a1 1 0 011.414 0L10 12.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CircularProgressBar;
