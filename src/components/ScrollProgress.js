"use client";
import React, { useEffect, useState } from "react";
import CircularProgressBar from "./CircularProgressBar";

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      const scrollY = window.scrollY;
      const maxScroll = scrollHeight - clientHeight;

      const progress = (scrollY / maxScroll) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", updateScrollProgress);

    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
    };
  }, []);

  return (
    <div className="fixed right-5 bottom-5">
      <CircularProgressBar progress={scrollProgress} />
    </div>
  );
};

export default ScrollProgress;
