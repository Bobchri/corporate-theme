import Navbar from "@/components/Navbar";
import ThemeSwitch from "@/components/ThemeSwitch";
import CircularProgressBar from "@/components/CircularProgressBar";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import Head from "next/head";
import { React, useState, useEffect } from "react";

const DefaultLayout = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Simulate a loading delay
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <div>
      <Head>
        <title>Welcome | Borneel Bikash Phukan</title>
      </Head>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="bg-gray-100 min-h-screen">
          <Navbar />
          {/* Main content */}
          <main>
            {children}
            <CircularProgressBar />
            <ThemeSwitch />
          </main>

          <footer>
            {/* Footer will go here */}
            <Footer />
          </footer>
        </div>
      )}
    </div>
  );
};

export default DefaultLayout;
