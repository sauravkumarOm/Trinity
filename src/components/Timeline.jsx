import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import bg from "../assets/grid_bg.svg";
import leftSVG from "../assets/3d icons.svg";
import rightSVG from "../assets/squid-game-soldier-mask-seeklogo.svg";

const Timeline = () => {
  const pathRef = useRef(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { triggerOnce: false, threshold: 0.3 });

  const [milestones, setMilestones] = useState([
    { title: "Registration Opens", date: "25 JAN 2025", percent: 0.05 },
    { title: "Registration Deadline", date: "15 MAR 2025", percent: 0.3 },
    { title: "Submissions Begin", date: "16 MAR 2025", percent: 0.5 },
    { title: "Submissions Deadline", date: "23 MAR 2025", percent: 0.7 },
    { title: "Final Event", date: "30 MAR 2025", percent: 0.9 },
  ]);

  const getCoordinates = (percent) => {
    if (!pathRef.current) return { x: 0, y: 0 };
    const pathLength = pathRef.current.getTotalLength();
    const point = pathRef.current.getPointAtLength(pathLength * percent);
    return { x: point.x, y: point.y };
  };

  useEffect(() => {
    setMilestones((prev) =>
      prev.map((milestone, index) => {
        const coordinates = getCoordinates(milestone.percent);
        let verticalOffset = index % 2 === 0 ? 100 : -100;
        return { ...milestone, coordinates, verticalOffset };
      })
    );
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative min-h-screen w-screen flex flex-col items-center justify-center px-6 py-20 bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <motion.h1
        className="text-black text-6xl md:text-7xl font-normal tracking-wide mb-12 text-center squid-font"
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.8 }}
      >
        Event timeLine
      </motion.h1>
      <motion.div
        className="h-1 w-96 bg-red-500 mx-auto mb-1"
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      ></motion.div>

      <img
        src={leftSVG}
        alt="Left Graphic"
        className="absolute left-0 bottom-0 w-72 md:w-96 lg:w-[30rem]"
      />

      <div className="relative w-full max-w-[90vw] md:max-w-[80vw] lg:max-w-[70vw] xl:max-w-[60vw] text-black flex items-center justify-center">
        <svg viewBox="0 0 1000 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <motion.path
            ref={pathRef}
            d="M50 100 C 250 450, 750 50, 950 380"
            stroke="black"
            strokeWidth="6"
            strokeDasharray="10,20"
            strokeLinecap="round"
            fill="transparent"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />

          {milestones.map((event, index) => (
            <React.Fragment key={index}>
              <motion.circle
                cx={event.coordinates?.x}
                cy={event.coordinates?.y}
                r="16"
                fill="black"
                stroke="white"
                strokeWidth="4"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.6, delay: index * 0.3 }}
                whileHover={{ scale: 1.8, fill: "#ff4d4d", transition: { duration: 0.3 } }}
              />
              <motion.g
                initial={{ opacity: 0, y: -20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: index * 0.4 }}
              >
                <text
                  x={event.coordinates?.x + (index === 0 ? 80 : 0)}
                  y={event.coordinates?.y + (index === 0 ? -50 : event.verticalOffset)}
                  fontSize="22"
                  fontWeight="bold"
                  fill="black"
                  textAnchor="middle"
                  className="transition-all duration-300 hover:fill-red-500"
                >
                  {event.title}
                </text>
                <text
                  x={event.coordinates?.x + (index === 0 ? 70 : 0)}
                  y={event.coordinates?.y + (index === 0 ? -25 : event.verticalOffset + 26)}
                  fontSize="18"
                  fill="#666"
                  textAnchor="middle"
                >
                  {event.date}
                </text>
              </motion.g>
            </React.Fragment>
          ))}
        </svg>
      </div>

      <img
        src={rightSVG}
        alt="Right Graphic"
        className="absolute right-0 top-0 w-72 md:w-96 lg:w-[35rem] lg:h-[60vh]"
      />
    </div>
  );
};

export default Timeline;
