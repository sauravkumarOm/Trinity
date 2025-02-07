import React from "react";
import { Link } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin, faTelegram, faTelegramPlane, faYoutube } from "@fortawesome/free-brands-svg-icons";

function SquidGameCharacter() {
    const { scene } = useGLTF("/assets/scene.gltf");
    return <primitive object={scene} scale={0.04} position={[0, -1.8, 0]} />;
}

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white p-6 grid grid-cols-1 md:grid-cols-4 gap-8 items-center text-left">
            {/* 3D Model Section */}
            <div className="flex justify-center items-center h-64">
                <Canvas camera={{ position: [0, 2, 5], fov: 45 }} className="h-full w-32 cursor-pointer">
                    <ambientLight intensity={0.7} />
                    <directionalLight position={[2, 5, 2]} intensity={1} />
                    <SquidGameCharacter />
                    <OrbitControls enableZoom={false} />
                </Canvas>
            </div>

            {/* Branding Section */}
            <div className="text-center md:text-left flex flex-col justify-center">
                <h2 className="text-4xl font-bold text-red-500 flex items-center squid-font">
                    traIn<span className="text-white squid-font">It</span>
                </h2>
                <p className="mt-3 text-gray-300 text-lg leading-relaxed">
                    A national-level hackathon focused on innovative ideas and projects in Machine Learning, AI, and Data Science.
                </p>
            </div>

            {/* Quick Links Section */}
            <div className="space-y-2 flex flex-col justify-center ">
                <h3 className="text-4xl font-normal squid-font">qUick Links</h3>
                <Link className="text-gray-300 text-lg">Event Rulebook</Link>
                <Link className="text-gray-300 text-lg">Sponsors Brochure</Link>
                <Link className="text-gray-300 text-lg">Event Timeline</Link>
                <Link className="text-gray-300 text-lg">FAQ</Link>
                <Link className="text-gray-300 text-lg">About Solutions 2k25</Link>
                <Link className="text-gray-300 text-lg">About AIT Pune</Link>
            </div>

            {/* Contact & Social Media Section */}
            <div className="space-y-4 flex flex-col justify-center">
                <h3 className="text-2xl font-normal squid-font">c0ntaCt us</h3>
                <div className="flex border-2 border-red-500 rounded-md overflow-hidden">
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="p-3 w-full bg-gray-800 text-white border-none focus:outline-none"
                    />
                    <button className="bg-red-500 p-3 text-white"><FontAwesomeIcon icon={faTelegramPlane} className="text-2xl" /></button>
                </div>

                <h3 className="text-2xl font-normal squid-font">fOlL0w us On</h3>
                <div className="flex space-x-3">
                    <button className="bg-red-500 px-3 py-2 rounded-md text-2xl"><FontAwesomeIcon icon={faInstagram} /></button>
                    <button className="bg-red-500 px-3 py-2 rounded-md text-2xl"><FontAwesomeIcon icon={faYoutube} /></button>
                    <button className="bg-red-500 px-3 py-2 rounded-md text-2xl"><FontAwesomeIcon icon={faLinkedin} /></button>
                </div>
            </div>

            {/* Footer Credits */}
            <div className="col-span-4 text-center text-gray-400 text-sm border-t border-gray-700 pt-4">
                Made With 🤖 By <span className="text-red-500">Trinity Club</span>
            </div>
        </footer>
    );
};

export default Footer;
