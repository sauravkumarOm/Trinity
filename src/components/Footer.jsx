import React from "react";
import { Link } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin, faTelegramPlane, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { useMediaQuery } from "react-responsive";

const SquidGameCharacter = () => {
    const { scene } = useGLTF("/assets/scene.gltf");
    return <primitive object={scene} scale={0.04} position={[0, -1.8, 0]} />;
};

const Laptop = () => {
    return (
        <footer className="bg-gray-900 w-screen text-white p-6 grid grid-cols-1 md:grid-cols-4 gap-8 items-center text-left">
            <div className="flex justify-center items-center h-64">
                <Canvas camera={{ position: [0, 2, 5], fov: 45 }} className="h-full w-32 cursor-pointer">
                    <ambientLight intensity={0.8} />
                    <directionalLight position={[2, 5, 2]} intensity={1.2} />
                    <SquidGameCharacter />
                    <OrbitControls enableZoom={false} />
                </Canvas>
            </div>
            <div className="text-center md:text-left flex flex-col justify-center">
                <h2 className="text-4xl font-bold text-red-500 flex items-center squid-font">
                    traIn<span className="text-white">It</span>
                </h2>
                <p className="mt-3 text-gray-300 text-lg leading-relaxed">
                    A national-level hackathon focused on AI, ML, and Data Science innovations.
                </p>
            </div>
            <div className="space-y-2 flex flex-col justify-center">
                <h3 className="text-4xl font-normal squid-font">Quick Links</h3>
                {['Event Rulebook', 'Sponsors Brochure', 'Event Timeline', 'FAQ', 'About Solutions 2k25', 'About AIT Pune'].map((item, index) => (
                    <Link key={index} className="text-gray-300 text-lg hover:text-red-400 transition duration-200">{item}</Link>
                ))}
            </div>
            <div className="space-y-4 flex flex-col justify-center">
                <h3 className="text-2xl font-normal squid-font">Contact Us</h3>
                <div className="flex border-2 border-red-500 rounded-md overflow-hidden">
                    <input type="email" placeholder="Your Email" className="p-3 w-full bg-gray-800 text-white focus:outline-none" />
                    <button className="bg-red-500 p-3 text-white hover:bg-red-600 transition duration-300">
                        <FontAwesomeIcon icon={faTelegramPlane} className="text-2xl" />
                    </button>
                </div>
                <h3 className="text-2xl font-normal squid-font">Follow Us</h3>
                <div className="flex space-x-3">
                    {[faInstagram, faYoutube, faLinkedin].map((icon, index) => (
                        <button key={index} className="bg-red-500 px-3 py-2 rounded-md text-2xl hover:bg-red-600 transition duration-300">
                            <FontAwesomeIcon icon={icon} />
                        </button>
                    ))}
                </div>
            </div>
            <div className="col-span-4 text-center text-gray-400 text-sm border-t border-gray-700 pt-4">
                Made With 🤖 By <span className="text-red-500">Trinity Club</span>
            </div>
        </footer>
    );
};

const Mobile = () => {
    return (
        <footer className="bg-gray-900 w-screen text-white p-6 flex flex-col justify-center items-center text-left">
            <div className="flex justify-center items-center h-64">
                <Canvas camera={{ position: [0, 2, 5], fov: 45 }} className="h-full w-32 cursor-pointer">
                    <ambientLight intensity={0.8} />
                    <directionalLight position={[2, 5, 2]} intensity={1.2} />
                    <SquidGameCharacter />
                    <OrbitControls enableZoom={false} />
                </Canvas>
            </div>
            <div className="text-center">
                <h2 className="text-3xl font-bold text-red-500 squid-font">traIn<span className="text-white">It</span></h2>
                <p className="mt-3 text-gray-300 mb-7 text-lg">
                    A national-level hackathon focused on AI, ML, and Data Science innovations.
                </p>
            </div>
            <div className="space-y-2 flex flex-col text-left text-base">
                <h3 className="text-4xl font-normal squid-font">Quick Links</h3>
                {['Event Rulebook', 'Sponsors Brochure', 'Event Timeline', 'FAQ', 'About Solutions 2k25', 'About AIT Pune'].map((item, index) => (
                    <Link key={index} className="text-gray-300 text-lg hover:text-red-400 transition duration-200">{item}</Link>
                ))}
            </div>
            <div className="space-y-4 flex flex-col justify-center mb-4">
                <h3 className="text-2xl font-normal squid-font">Contact Us</h3>
                <div className="flex border-2 border-red-500 rounded-md overflow-hidden">
                    <input type="email" placeholder="Your Email" className="p-3 w-full bg-gray-800 text-white focus:outline-none" />
                    <button className="bg-red-500 p-3 text-white hover:bg-red-600 transition duration-300">
                        <FontAwesomeIcon icon={faTelegramPlane} className="text-2xl" />
                    </button>
                </div>
                <h3 className="text-2xl font-normal squid-font">Follow Us</h3>
                <div className="flex space-x-3 justify-center">
                    {[faInstagram, faYoutube, faLinkedin].map((icon, index) => (
                        <button key={index} className="bg-red-500 px-3 py-2 rounded-md text-2xl hover:bg-red-600 transition duration-300">
                            <FontAwesomeIcon icon={icon} />
                        </button>
                    ))}
                </div>
            </div>
            <div className="col-span-4 text-center text-gray-400 text-sm border-t w-screen border-gray-700 pt-4">
                Made With 🤖 By <span className="text-red-500">Trinity Club</span>
            </div>
        </footer>
    );
};

const Footer = () => {
    const isMobile = useMediaQuery({ maxWidth: 430 });
    return isMobile ? <Mobile /> : <Laptop />;
};

export default Footer;
