import React from "react";
import "animate.css";
import { LazyMotion, motion, domAnimation } from "framer-motion";

const Idea = () => {
  return (
    <section
      className="flex flex-row flex-wrap items-center justify-center sm:my-16 my-6 z-[-2] h-[40vh] w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] md:px-16 px-6"
      id="idea"
    >
      <div className="text-center items-center justify-center">
        <LazyMotion features={domAnimation}>
          <motion.div
            initial={{ opacity: 0, x: "100%" }} // Set initial animation properties
            animate={{ opacity: 1, x: 0 }} // Set animation on reload
            transition={{ duration: 2.0 }} // Set animation duration
            className="animate-fade-right flex-1 flex h-full justify-center items-center md:my-10 relative"
          >
            <h2 className="font-poppins z-[10] font-semibold text-white md:text-[60px] text-[25px] md:my-8">
              Bring Every Idea 
              <br className="md:hidden md:block" /> {" "}
              To Life
            </h2>
            <div className="absolute z-[0] w-[30%] h-[50%] top-0 pink__gradient" />
            <div className="absolute z-[1] w-[10%] h-[50%] rounded-full bottom-40 white__gradient" />
            <div className="absolute z-[0] w-[70%] h-[50%] right-20 bottom-20 blue__gradient" />
          </motion.div>
        </LazyMotion>

        <div className="justify-center items-center">
          <img
            src="../images/terminalcode.png"
            className="rounded-2xl"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Idea;
