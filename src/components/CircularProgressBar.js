import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const CircularScrollProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const totalScrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const percentage = (scrolled / totalScrollHeight) * 100;
      setProgress(percentage);
    };

    window.addEventListener("scroll", updateProgress);
    return () => {
      window.removeEventListener("scroll", updateProgress);
    };
  }, []);

  return (
    <div className="fixed z-50 bottom-20 right-10 flex items-center">
      <div className="relative">
        <div className="w-10 h-10 relative ml-0">
          <svg className="transform -rotate-90" width="100%" height="100%">
            <circle
              cx="50%"
              cy="50%"
              r="45%"
              fill="transparent"
              stroke="#FFA500"
              strokeWidth="5%"
              strokeDasharray={`${progress}, 100`}
            />
          </svg>
          <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center absolute top-1 left-1">
            <FaArrowUp className="text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CircularScrollProgressBar;
