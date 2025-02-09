import React, {useRef} from "react";
import { motion, useInView } from "framer-motion";
import bg from "../assets/grid_bg.svg";
import impactx from "../assets/impact-x.png";
import visionTracker from "../assets/visionarytracker.svg";
import outliner from "../assets/outlierquest.svg"
import console from "../assets/console.svg"
import { useMediaQuery } from "react-responsive";

const tracks = [
  { name: "IMPACT-X", image: impactx },
  { name: "OUTLIER QUEST", image: outliner },
  { name: "VISIONARY TRACKER", image: visionTracker },
  { name: "PIXEL PLAY", image: console },
];

const Laptop = () => {
  return (
    <div className="relative w-screen min-h-screen flex flex-col items-center justify-center py-12 bg-cover bg-center bg-no-repeat tracks-bg">
      {/* Title */}
      <h1 className="text-white text-6xl font-extrabold mb-44 tracking-wider squid-font">
        trAcKs
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-7xl cursor-pointer">
        {tracks.map((track, index) => (
          <div
            key={index}
            className="relative bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 shadow-xl flex flex-col items-center text-center transition-all duration-300 ease-in-out
                  transform hover:scale-110 hover:-translate-y-1 
                  active:scale-95 active:translate-y-1 hover:bg-opacity-20 w-64 h-80"
          >
            <img
              src={track.image}
              alt={track.name}
              className="w-36 h-36 mb-6 object-contain"
            />
            <h2 className="text-white text-2xl font-semibold tracking-wide">
              {track.name}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}

const Mobile = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.3 });
  return (
    <div
      className="w-screen min-h-screen flex flex-col items-center justify-center py-6 bg-cover bg-center"
    >
      {/* Title */}
      <motion.h1
        ref={ref}
        className="text-4xl font-normal squid-font text-black mb-1"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        trAck
      </motion.h1>
      <motion.div
        className="h-1 w-12 bg-red-500 mx-auto mb-8"
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      ></motion.div>
      <div className="grid grid-cols-2 gap-4 px-3 cursor-pointer">
        {tracks.map((track, index) => (
          <div
            key={index}
            className="relative bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-4 shadow-md flex flex-col items-center text-center transition-all duration-300 ease-in-out
                  transform hover:scale-105 hover:-translate-y-1 
                  active:scale-95 active:translate-y-1 hover:bg-opacity-20 w-32 h-44"
          >
            <img
              src={track.image}
              alt={track.name}
              className="w-16 h-16 mb-3 object-contain"
            />
            <h2 className="text-black text-sm font-semibold tracking-wide">
              {track.name}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}



const Tracks = () => {
  const isMobile = useMediaQuery({ maxWidth: 380 });
  return isMobile ? <Mobile /> : <Laptop />;
};

export default Tracks;
