import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faClock, faDesktop, faTrophy } from "@fortawesome/free-solid-svg-icons";

const details = [
  { icon: faMapMarkerAlt, text1: "Army Institute of Technology", text2: "Pune, Maharastra" },
  { icon: faClock, text1: "Submission Deadline", text2:"23 March 2025" },
  { icon: faDesktop, text1: "Mode of Event", text2: "Mode of Event" },
  { icon: faTrophy, text1: "Prize Pool", text2: "Prize Pool" },
];

const Detail = () => {
  return (
    <div className="w-screen h-[40vh] bg-red-700 mt-1 flex justify-between px-10 items-center">
      {details.map((item, index) => (
        <div key={index} className="flex flex-col items-center">
          <FontAwesomeIcon icon={item.icon} className="text-white text-5xl mb-2" />
          <h1 className="text-2xl text-white font-bold">{item.text1}</h1>
          <h1 className="text-xl text-white">{item.text2}</h1>
        </div>
      ))}
    </div>
  );
};

export default Detail;
