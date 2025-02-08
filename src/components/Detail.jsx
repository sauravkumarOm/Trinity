import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faClock, faDesktop, faTrophy } from "@fortawesome/free-solid-svg-icons";

const details = [
  { icon: faMapMarkerAlt, text1: "Army Institute of Technology", text2: "Pune, Maharashtra" },
  { icon: faClock, text1: "Submission Deadline", text2: "23 March 2025" },
  { icon: faDesktop, text1: "Mode of Event", text2: "Hybrid (Online & Offline)" },
  { icon: faTrophy, text1: "Prize Pool", text2: "₹1,00,000+" },
];

const Detail = () => {
  return (
    <div className="w-screen min-h-[40vh] bg-red-700 mt-1 flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full px-8 text-center">
        {details.map((item, index) => (
          <div key={index} className="flex flex-col items-center gap-2 p-4">
            <FontAwesomeIcon icon={item.icon} className="text-white text-6xl mb-4" />
            <h1 className="text-2xl text-white font-bold">{item.text1}</h1>
            <h1 className="text-lg text-white">{item.text2}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Detail;
