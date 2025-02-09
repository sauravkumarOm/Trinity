import React from "react";
import "./Loader.css";

const Loader = () => {
    return (
        <div className="flex justify-center items-center h-screen w-screen space-x-6 bg-gray-100">
            <div className="loader">
                <svg viewBox="0 0 80 80">
                    <circle cx="40" cy="40" r="32"></circle>
                </svg>
            </div>

            <div className="loader triangle">
                <svg viewBox="0 0 86 80">
                    <polygon points="43 8 79 72 7 72"></polygon>
                </svg>
            </div>

            <div className="loader">
                <svg viewBox="0 0 80 80">
                    <rect x="8" y="8" width="64" height="64"></rect>
                </svg>
            </div>

            {/* <a className="dribbble" href="https://dribbble.com/shots/5878367-Loaders" target="_blank" rel="noopener noreferrer">
                <img src="https://cdn.dribbble.com/assets/dribbble-ball-mark-2bd45f09c2fb58dbbfb44766d5d1d07c5a12972d602ef8b32204d28fa3dda554.svg" alt="Dribbble logo" />
            </a> */}
        </div>
    );
};

export default Loader;
