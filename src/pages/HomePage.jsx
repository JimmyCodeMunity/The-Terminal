import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Idea from "../components/Idea";
import Stats from "../components/Stats";
import Service from "../components/Service";
import Footer from "../components/Footer";
import WhatWeDo from "../components/WhatWeDo";

const HomePage = () => {
  return (
    <div className="flex-1 w-full overflow-hidden bg-primary">
      <div className="flex sm:px-16 px-6 justify-center items-center">
        <div className="w-full xl:max-w-[1280px]">
          <Navbar />
        </div>
      </div>

      <div className="flex sm:px-6 px-6 justify-center items-center">
        <div className="w-full xl:max-w-[1280px]">
          <Hero />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="w-full xl:max-w-[1280px]">
          <Stats />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="w-full xl:max-w-[1280px]">
          <WhatWeDo />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="w-full xl:max-w-[1280px]">
          <Service />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="w-full">
          <div className="w-full xl:max-w-[1280px]">
            <Idea />
          </div>
        </div>
      </div>
      <div className="flex sm:px-6 px-6 justify-center items-center">
        <div className="w-full xl:max-w-[1280px]">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
