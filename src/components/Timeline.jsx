import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import bg from "../assets/page 4 1.jpg";

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
        let verticalOffset = index % 2 === 0 ? 70 : -70;
        return { ...milestone, coordinates, verticalOffset };
      })
    );
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative min-h-[90vh] flex flex-col items-center justify-center px-8 py-16 bg-cover bg-center "
      style={{ backgroundImage: `url(${bg})` }}
    >
      <motion.h1
        className="text-black text-5xl font-normal tracking-wide mb-4 squid-font"
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.8 }}
      >
        EVent tImELInE
      </motion.h1>

      <div className="relative w-screen max-w-5xl text-black mb-9">
        <svg viewBox="0 0 1000 500" fill="none" xmlns="http://www.w3.org/2000/svg">
          <motion.path
            ref={pathRef}
            d="M50 100 C 250 450, 750 50, 950 380"
            stroke="black"
            strokeWidth="4"
            strokeDasharray="6,14"
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
                r="12"
                fill="black"
                stroke="white"
                strokeWidth="3"
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
                  x={event.coordinates?.x + (index === 0 ? 70 : 0)}
                  y={event.coordinates?.y + (index === 0 ? -40 : event.verticalOffset)}
                  fontSize="20"
                  fontWeight="bold"
                  fill="black"
                  textAnchor="middle"
                  className="transition-all duration-300 hover:fill-red-500"
                >
                  {event.title}
                </text>
                <text
                  x={event.coordinates?.x + (index === 0 ? 60 : 0)}
                  y={event.coordinates?.y + (index === 0 ? -20 : event.verticalOffset + 22)}
                  fontSize="16"
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
    </div>
  );
};

export default Timeline;
