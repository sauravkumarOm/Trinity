import React, { useState, useEffect, useRef } from "react";
import bg from "../assets/grid_bg.svg";
import { motion, useInView } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const CountdownTimer = () => {
    const calculateTimeLeft = () => {
        const eventDate = new Date("2025-03-19T00:00:00");
        const difference = eventDate - new Date();

        let timeLeft = {};
        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return timeLeft;
};

const Laptop = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { triggerOnce: true, threshold: 0.3 });
    const timeLeft = CountdownTimer();

    return (
        <div
            className="flex flex-col items-center justify-center min-h-screen w-screen py-10 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${bg})` }}
        >
            <motion.h1
                ref={ref}
                className="text-5xl font-normal squid-font text-black mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                EvEnt wilL stArT In
            </motion.h1>
            <motion.div
                className="h-1 w-32 bg-red-500 mx-auto mb-12"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            ></motion.div>
            <div className="flex space-x-6 mt-6 mb-6">
                {Object.entries(timeLeft).map(([unit, value]) => (
                    <div
                        key={unit}
                        className="flex flex-col items-center bg-white p-6 shadow-lg rounded-lg border border-gray-200"
                    >
                        <span className="text-5xl font-bold text-black">{value}</span>
                        <span className="text-sm uppercase font-medium text-gray-600">{unit}</span>
                    </div>
                ))}
            </div>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg text-lg transition-all uppercase">
                MARK YOUR CALENDAR
            </button>
        </div>
    );
};

const Mobile = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { triggerOnce: true, threshold: 0.3 });
    const timeLeft = CountdownTimer();

    return (
        <div
            className="flex flex-col items-center justify-center mt-9 w-screen"
            
        >
            <motion.h1
                ref={ref}
                className="text-2xl font-normal squid-font text-black mb-1"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                EvEnt wilL stArT In
            </motion.h1>
            <motion.div
                className="h-1 w-64 bg-red-500 mx-auto mb-8"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            ></motion.div>
            <div className="grid grid-cols-2 gap-4 mt-6 mb-6">
                {Object.entries(timeLeft).map(([unit, value]) => (
                    <div
                        key={unit}
                        className="flex flex-col items-center bg-white p-4 shadow-md rounded-lg border border-gray-200"
                    >
                        <span className="text-4xl font-bold text-black">{value}</span>
                        <span className="text-xs uppercase font-medium text-gray-600">{unit}</span>
                    </div>
                ))}
            </div>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-5 rounded-lg shadow-md text-md transition-all uppercase">
                MARK YOUR CALENDAR
            </button>
        </div>
    );
};

const Countdown = () => {
    const isMobile = useMediaQuery({ maxWidth: 430 });
    return isMobile ? <Mobile /> : <Laptop />;
};

export default Countdown;