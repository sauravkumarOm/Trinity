import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import bg from "../assets/grid_bg.svg"

const sponsors = [
  { title: "PLATFORM PARTNER", logo: "https://via.placeholder.com/150" },
  { title: "HOSTING PARTNER", logo: "https://via.placeholder.com/150" },
  { title: "DIGITAL MEDIA PARTNER", logo: "https://via.placeholder.com/150" },
  { title: "DOMAIN SPONSOR", logo: "https://via.placeholder.com/150" },
  { title: "BEVERAGE SPONSOR", logo: "https://via.placeholder.com/150" },
  { title: "BEVERAGE SPONSOR", logo: "https://via.placeholder.com/150" },
  { title: "FOOD SPONSOR", logo: "https://via.placeholder.com/150" },
  { title: "FOOD SPONSOR", logo: "https://via.placeholder.com/150" },
  { title: "FOOD SPONSOR", logo: "https://via.placeholder.com/150" },
];

const Sponsors = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.3 });

  return (
    <div className=" pt-16 text-center w-screen min-h-screen py-10 bg-no-repeat">
      <motion.h1
        ref={ref}
        className="text-5xl font-normal squid-font text-black mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Our SpOnSOrS
      </motion.h1>
      <motion.div
        className="h-1 w-32 bg-red-500 mx-auto mb-12"
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      ></motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 max-w-6xl mx-auto px-4">
        {sponsors.map((sponsor, index) => (
          <motion.div
            key={index}
            className="relative bg-red-600 bg-opacity-90 backdrop-blur-lg rounded-xl shadow-xl p-8 flex flex-col items-center cursor-pointer transition-transform duration-500 ease-out transform-gpu border border-white/20"
            whileHover={{
              rotateX: 15,
              rotateY: 20,
              scale: 1.05,
              boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.5)",
              transition: { duration: 0.3 },
            }}
          >
            <div className="absolute -top-6 bg-white text-red-600 border-4 border-red-600 font-bold px-4 py-2 rounded-md shadow-md">
              {sponsor.title}
            </div>
            <img
              src={sponsor.logo}
              alt={sponsor.title}
              className="h-24 mt-10 rounded-lg shadow-md"
            />
          </motion.div>
        ))}
      </div>
      <div className="w-screen grid grid-cols-2 mt-14">
        <div className="flex justify-center">
          <div className="px-9 py-4 rounded-md shadow-md bg-red-600 flex flex-col items-center text-2xl
           text-white font-semibold cursor-pointer transition-all duration-300 ease-in-out 
           transform hover:scale-110 hover:-translate-y-1 active:scale-95 active:translate-y-1">
            DOWNLOAD BROCHURE
          </div>
        </div>
        <div className="flex justify-center">
          <div className="px-9 py-4 rounded-md shadow-md bg-red-600 flex flex-col items-center text-2xl
          text-white font-semibold cursor-pointer transition-all duration-300 ease-in-out
          transform hover:scale-110 hover:-translate-y-1 active:scale-95 active:translate-y-1">
            BECOME A SPONSER
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
