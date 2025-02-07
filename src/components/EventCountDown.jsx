import React, { useState, useEffect } from "react";
import bg from "../assets/page 2 1.jpg";
import underline from "../assets/Screenshot 2025-02-02 013531.png";

const Countdown = () => {
    const calculateTimeLeft = () => {
        const eventDate = new Date("2025-03-19T00:00:00"); // Set event date to March 19
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

    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh] bg-cover bg-center py-10"  >
            <h1 className="text-5xl font-bold mb-2 text-black relative squid-font">
                EvEnt wilL stArT In

            </h1>
            <img src={underline} alt="underline" className=" w-80 mt-2 h-8 mx-auto" />
            <div className="flex space-x-4 mt-6 mb-6">
                {Object.entries(timeLeft).map(([unit, value]) => (
                    <div key={unit} className="flex flex-col items-center bg-white p-6 shadow-lg rounded-lg border border-gray-200">
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

export default Countdown;
