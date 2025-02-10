import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Unstop from "../assets/unstop.png";
import Punekar from "../assets/punekar.png";
import XYZ from "../assets/xyz.png";
import Brochure from "../assets/Trainit_Brochure.pdf"
import bg from "../assets/grid_bg.svg"
import { useMediaQuery } from "react-responsive";

const sponsors = [
  { title: "HOSTING PARTNER", logo: Unstop },
  { title: "DIGITAL MEDIA PARTNER", logo: Punekar },
  { title: "DOMAIN SPONSOR", logo: XYZ },
];

const Laptop = () => {
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

      <div className="grid grid-cols-2 gap-12 w-1/2 mx-auto px-4">
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
              className="h-24 mt-10 rounded-lg shadow-md bg-white"
            />
          </motion.div>
        ))}
      </div>
      <div className="w-screen grid grid-cols-2 mt-14">
        <div className="flex justify-center">
          <a
            href={Brochure}
            download="Trainit_Brochure.pdf"
            className="px-9 py-4 rounded-md shadow-md bg-red-600 flex flex-col items-center text-2xl
        text-white font-semibold cursor-pointer transition-all duration-300 ease-in-out 
        transform hover:scale-110 hover:-translate-y-1 active:scale-95 active:translate-y-1"
          >
            DOWNLOAD BROCHURE
          </a>
        </div>
        <div className="flex justify-center">
          <div className="px-9 py-4 rounded-md shadow-md bg-red-600 flex flex-col items-center text-2xl
          text-white font-semibold cursor-pointer transition-all duration-300 ease-in-out
          transform hover:scale-110 hover:-translate-y-1 active:scale-95 active:translate-y-1">
            BECOME A SPONSER
          </div>
        </div>
      </div>
    </div >
  );
}

const Mobile = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.3 });

  return (
    <div className="pt-14 text-base text-center w-screen min-h-screen py-10 bg-no-repeat">
      <motion.h1
        ref={ref}
        className="text-3xl font-normal squid-font text-black mb-2"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Our SpOnSOrS
      </motion.h1>
      <motion.div
        className="h-1 w-64 bg-red-500 mx-auto mb-12"
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      ></motion.div>

      <div className="grid grid-cols-2 gap-4 mb-3 space-y-10 mx-auto px-4">
        {sponsors.map((sponsor, index) => (
          <motion.div
            key={index}
            className="relative bg-red-600 bg-opacity-90 backdrop-blur-lg rounded-xl shadow-lg p-6 flex flex-col items-center cursor-pointer transition-transform duration-500 ease-out transform-gpu border border-white/20"
            whileHover={{
              rotateX: 10,
              rotateY: 15,
              scale: 1.05,
              boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.4)",
              transition: { duration: 0.3 },
            }}
          >
            <div className="absolute -top-4 bg-white text-red-600 border-4 border-red-600 font-bold px-2 py-1 rounded-md shadow-md text-sm">
              {sponsor.title}
            </div>
            <img
              src={sponsor.logo}
              alt={sponsor.title}
              className="h-16 mt-8 rounded-lg shadow-md bg-white"
            />
          </motion.div>
        ))}
      </div>
      <div className="w-screen grid grid-cols-2 mt-10">
        <div className="flex justify-center">
          <a 
            href={Brochure}
            download="Trainit_Brochure.pdf"
            className="px-4 py-2 rounded-md shadow-md bg-red-600 flex flex-col items-center text-xs
           text-white font-semibold cursor-pointer transition-all duration-300 ease-in-out 
           transform hover:scale-110 hover:-translate-y-1 active:scale-95 active:translate-y-1">
            DOWNLOAD BROCHURE
          </a>
        </div>
        <div className="flex justify-center">
          <div className="px-4 py-2 rounded-md shadow-md bg-red-600 flex flex-col items-center text-xs
          text-white font-semibold cursor-pointer transition-all duration-300 ease-in-out
          transform hover:scale-110 hover:-translate-y-1 active:scale-95 active:translate-y-1">
            BECOME A SPONSOR
          </div>
        </div>
      </div>
    </div>
  );
}


const Sponsors = () => {
  const isMobile = useMediaQuery({ maxWidth: 380 });
  return isMobile ? <Mobile /> : <Laptop />
};

export default Sponsors;
