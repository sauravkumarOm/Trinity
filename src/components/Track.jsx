import React from "react";
import bg from "../assets/image03.png";
import impactx from "../assets/impact-x.png";
import visionTracker from "../assets/visionarytracker.svg";
import outliner from "../assets/outlierquest.svg"
import console from "../assets/console.svg"

const tracks = [
  { name: "IMPACT-X", image: impactx },
  { name: "OUTLIER QUEST", image: outliner },
  { name: "VISIONARY TRACKER", image: visionTracker },
  { name: "PIXEL PLAY", image: console },
];

const Tracks = () => {
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
};

export default Tracks;
