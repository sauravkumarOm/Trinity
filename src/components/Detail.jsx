import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faClock, faDesktop, faTrophy } from "@fortawesome/free-solid-svg-icons";
import { useMediaQuery } from "react-responsive";

const details = [
  { icon: faMapMarkerAlt, text1: "Army Institute of Technology", text2: "Pune, Maharashtra" },
  { icon: faClock, text1: "Submission Deadline", text2: "23 March 2025" },
  { icon: faDesktop, text1: "Mode of Event", text2: "Online" },
  { icon: faTrophy, text1: "Prize Pool", text2: "₹1,00,000+" },
];

const Laptop = () => {
  return (
    <div className="w-screen min-h-64 bg-[#ED184B] mt-1 flex items-center justify-center">
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
  )
}

const Mobile = ()=>{
  return (
    <div className="w-screen bg-[#ED184B] mt-1 flex items-center justify-center">
    <div className="flex flex-col gap-1 w-full text-center">
      {details.map((item, index) => (
        <div key={index} className="flex flex-col items-center p-4">
          <FontAwesomeIcon icon={item.icon} className="text-white text-xl mb-1" />
          <h1 className="text-sm text-white font-bold">{item.text1}</h1>
          <h1 className="text-sm text-white">{item.text2}</h1>
        </div>
      ))}
    </div>
  </div>
  )
}

const Detail = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 380px)" });
  return isMobile ? <Mobile/> : <Laptop/>
};

export default Detail;
