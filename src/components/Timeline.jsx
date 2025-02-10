import React, { useRef, useEffect, useState, useMemo } from "react";
import { motion, useInView } from "framer-motion";
import bg from "../assets/grid_bg.svg";
import leftSVG from "../assets/3d icons.svg";
import rightSVG from "../assets/squid-game-soldier-mask-seeklogo.svg";
import { useMediaQuery } from "react-responsive";

const milestonesData = [
  { title: "Registration Start", date: "10 FEB 2025", percent: 0.05 },
  { title: "Registration Deadline", date: "15 MAR 2025", percent: 0.3 },
  { title: "Submissions Begin", date: "19 MAR 2025", percent: 0.5 },
  { title: "Submissions Deadline", date: "23 MAR 2025", percent: 0.7 },
  { title: "Result Annoucement", date: "30 MAR 2025", percent: 0.9 },
];

const Laptop = () => {
  const pathRef = useRef(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { triggerOnce: false, threshold: 0.3 });

  const getCoordinates = (percent) => {
    if (!pathRef.current) return { x: 0, y: 0 };
    const pathLength = pathRef.current.getTotalLength();
    const point = pathRef.current.getPointAtLength(pathLength * percent);
    return { x: point.x, y: point.y };
  };

  const milestones = useMemo(() => {
    return milestonesData.map((milestone, index) => {
      const coordinates = getCoordinates(milestone.percent);
      let verticalOffset = index % 2 === 0 ? 100 : -100;

      // Move "Registration Open" milestone higher
      if (index === 0) {
        verticalOffset -= 50; // Adjusting height for better visibility
      }

      return { ...milestone, coordinates, verticalOffset };
    });
  }, [pathRef.current]);

  return (
    <div
      ref={sectionRef}
      className="relative min-h-screen w-screen flex flex-col items-center justify-center px-6 py-20 bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <motion.h1
        className="text-black text-6xl md:text-7xl font-normal tracking-wide mb-12 text-center squid-font"
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        Event Timeline
      </motion.h1>
      <motion.div
        className="h-1 w-96 bg-red-500 mx-auto mb-1"
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      />

      <img src={leftSVG} alt="Left Graphic" className="absolute left-0 bottom-0 w-72 md:w-96 lg:w-[30rem]" />

      <div className="relative w-full max-w-[80vw] text-black flex items-center justify-center">
        <svg viewBox="0 0 1000 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full cursor-pointer">
          <motion.path
            ref={pathRef}
            d="M50 100 C 250 450, 750 50, 950 380"
            stroke="black"
            strokeWidth="6"
            strokeDasharray="10,20"
            strokeLinecap="round"
            fill="transparent"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : {}}
            transition={{ duration: 2, ease: "easeInOut" }}
          />

          {milestones.map((event, index) => (
            <React.Fragment key={index}>
              {/* Circle Indicator */}
              <motion.circle
                cx={event.coordinates?.x}
                cy={event.coordinates?.y}
                r="16"
                fill="black"
                stroke="white"
                strokeWidth="4"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.3 }}
                whileHover={{ scale: 1.8, fill: "#ff4d4d", transition: { duration: 0.3 } }}
              />

              <motion.g
                initial={{ opacity: 0, y: -20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: index * 0.4 }}
              >
                <text x={event.coordinates?.x + (index === 0 ? 80 : 0)}
                  y={event.coordinates?.y + (index === 0 ? -50 : event.verticalOffset)}
                  fontSize="22"
                  fontWeight="bold"
                  fill="black"
                  textAnchor="middle"
                  className="transition-all text-xl duration-300 hover:fill-red-500">
                  {event.title}
                </text>
                <text x={event.coordinates?.x + (index === 0 ? 70 : 0)}
                  y={event.coordinates?.y + (index === 0 ? -25 : event.verticalOffset + 26)}
                  fontSize="18"
                  fill="#666"
                  textAnchor="middle">
                  {event.date}
                </text>
              </motion.g>
            </React.Fragment>
          ))}
        </svg>
      </div>

      <img src={rightSVG} alt="Right Graphic" className="absolute right-0 top-0 w-72 md:w-96 lg:w-[35rem] lg:h-[60vh]" />
    </div>
  );
};

const Mobile = () => {
  return (
    <div
      className="relative w-screen flex flex-col items-center justify-center px-6 py-16 bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <motion.h1
        className="text-black text-4xl font-normal squid-font tracking-wide mb-10 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Event Timeline
      </motion.h1>
      <motion.div
        className="h-1 w-48 bg-red-500 mx-auto mb-6"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
      />

      <img src={leftSVG} alt="Left Graphic" className="absolute left-0 bottom-0 w-[7.5rem]" />

      <div className="flex flex-col items-center space-y-8">
        {milestonesData.map((event, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="w-6 h-6 bg-black text-white flex items-center justify-center rounded-full text-lg font-bold shadow-md"
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* {index + 1} */}
            </motion.div>
            <motion.div className="text-xl font-semibold mt-4">{event.title}</motion.div>
            <motion.div className="text-gray-600 text-sm">{event.date}</motion.div>
            {index !== milestonesData.length - 1 && (
              <motion.div
                className="w-1 h-16 bg-gray-400"
                initial={{ opacity: 0, scaleY: 0 }}
                whileInView={{ opacity: 1, scaleY: 1 }}
                transition={{ duration: 0.5, delay: index * 0.3 }}
                viewport={{ once: true }}
              />
            )}
          </motion.div>
        ))}
      </div>

      <img src={rightSVG} alt="Right Graphic" className="absolute -right-4 top-52 w-36 h-[25vh]" />
    </div>
  );
};

const Timeline = () => {
  const isMobile = useMediaQuery({ maxWidth: 430 });
  return isMobile ? <Mobile /> : <Laptop />;
};

export default Timeline;
