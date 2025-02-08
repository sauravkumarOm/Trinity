import React from "react";
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
  return (
    <div
      className=" w-screen min-h-screen flex flex-col items-center justify-center py-6 bg-cover bg-center "
      
    >
      {/* Title */}
      <h1 className="text-black text-4xl font-extrabold mb-12 tracking-wider squid-font">
        trAcKs
      </h1>
      <div className="grid grid-cols-1 gap-6 px-6 max-w-sm cursor-pointer">
        {tracks.map((track, index) => (
          <div
            key={index}
            className="relative bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-6 shadow-lg flex flex-col items-center text-center transition-all duration-300 ease-in-out
                  transform hover:scale-105 hover:-translate-y-1 
                  active:scale-95 active:translate-y-1 hover:bg-opacity-20 w-40 h-56"
          >
            <img
              src={track.image}
              alt={track.name}
              className="w-24 h-24 mb-4 object-contain"
            />
            <h2 className="text-black text-lg font-semibold tracking-wide">
              {track.name}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};


const Tracks = () => {
  const isMobile = useMediaQuery({ maxWidth: 430 });
  return isMobile ? <Mobile /> : <Laptop />;
};

export default Tracks;
