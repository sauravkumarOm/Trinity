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
        <>
            <footer className="relative bg-gray-900 w-screen text-white p-6 grid grid-cols-1 md:grid-cols-4 gap-8 items-center text-left">
                <div className="flex justify-center items-center h-64">
                    <Canvas camera={{ position: [0, 2, 5], fov: 45 }} className="h-full w-32 cursor-pointer">
                        <ambientLight intensity={0.8} />
                        <directionalLight position={[2, 5, 2]} intensity={1.2} />
                        <SquidGameCharacter />
                        <OrbitControls enableZoom={false} />
                    </Canvas>
                </div>
                <div className="text-center md:text-left flex flex-col justify-center">
                    <h2 className="text-4xl font-bold text-[#ED184B] flex items-center squid-font">
                        traIn<span className="text-white">It</span>
                    </h2>
                    <p className="mt-3 text-gray-300 text-lg leading-relaxed">
                        A national-level hackathon focused on AI, ML, and Data Science innovations.
                    </p>
                </div>
                <div className="space-y-2 flex flex-col justify-center">
                    <h3 className="text-4xl font-normal squid-font">Quick Links</h3>
                    {[
                        { name: 'Event Rulebook', link: 'https://docs.google.com/document/d/1LWFW5QEkYCqsytZrEElVUoofZXS7amc67Oa-lEJQWk4/edit?usp=sharing' },
                        { name: 'Sponsors Brochure', link: '/sponsors-brochure' },
                        { name: 'Event Timeline', id: 'timeline' },
                        { name: 'FAQ', id: 'faq' },
                        { name: 'About Solutions 2k25', link: 'https://solution-2k25.vercel.app/' },
                        { name: 'About AIT Pune', link: 'https://www.aitpune.com/Default.aspx' }
                    ].map((item, index) => (
                        item.link ? (
                            <Link
                                key={index}
                                to={item.link}
                                target={item.link.startsWith('http') ? '_blank' : '_self'}
                                className="text-gray-300 text-lg hover:text-[#ED184B] transition duration-200"
                            >
                                {item.name}
                            </Link>
                        ) : (
                            <button
                                key={index}
                                onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })}
                                className="text-gray-300 text-lg hover:text-[#ED184B] transition duration-200 text-left"
                            >
                                {item.name}
                            </button>
                        )
                    ))}
                </div>

                <div className="space-y-4 flex flex-col justify-center">
                    <h3 className="text-2xl font-normal squid-font">Contact Us</h3>
                    <div className="flex border-2 border-[#ED184B] rounded-md overflow-hidden">
                        <input type="email" placeholder="Your Email" className="p-3 w-full bg-gray-800 text-white focus:outline-none" />
                        <button className="bg-[#ED184B] p-3 text-white hover:bg-red-600 transition duration-300">
                            <FontAwesomeIcon icon={faTelegramPlane} className="text-2xl" />
                        </button>
                    </div>
                    <h3 className="text-2xl font-normal squid-font">Follow Us</h3>
                    <div className="flex space-x-3">
                        {[
                            { icon: faInstagram, link: "https://www.instagram.com/trinity.aiclub?igsh=eGxzZTlyZnkxZHc5" },
                            { icon: faYoutube, link: "https://youtube.com/@trinityaitpune?feature=shared" },
                            { icon: faLinkedin, link: "https://www.linkedin.com/company/trinityaiclub/" }
                        ].map((item, index) => (
                            <a key={index} href={item.link} target="_blank" rel="noopener noreferrer">
                                <button className="bg-[#ED184B] backdrop-blur-lg px-4 py-3 rounded-lg text-2xl text-white shadow-lg 
                    hover:bg-red-600 hover:scale-110 hover:rotate-3 hover:shadow-xl 
                    active:scale-95 active:shadow-md transition-all duration-300 ease-in-out">
                                    <FontAwesomeIcon icon={item.icon} />
                                </button>
                            </a>
                        ))}
                    </div>
                </div>

                <div className="col-span-4 text-center text-gray-400 text-sm border-t border-gray-700 pt-4">
                    Made With 🤖 By <span className="text-[#ED184B]">Trinity Club</span>
                </div>
            </footer>
        </>
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
                <h2 className="text-2xl font-bold text-[#ED184B] squid-font">traIn<span className="text-white">It</span></h2>
                <p className="mt-3 text-gray-300 mb-7 text-sm">
                    A national-level hackathon focused on AI, ML, and Data Science innovations.
                </p>
            </div>
            <div className="space-y-2 flex flex-col text-left">
                <h3 className="text-2xl font-normal squid-font">Quick Links</h3>
                {[
                    { name: 'Event Rulebook', link: 'https://docs.google.com/document/d/1LWFW5QEkYCqsytZrEElVUoofZXS7amc67Oa-lEJQWk4/edit?usp=sharing' },
                    { name: 'Sponsors Brochure', link: '/sponsors-brochure' },
                    { name: 'Event Timeline', id: 'timeline' },
                    { name: 'FAQ', id: 'faq' },
                    { name: 'About Solutions 2k25', link: 'https://solution-2k25.vercel.app/' },
                    { name: 'About AIT Pune', link: 'https://www.aitpune.com/Default.aspx' }
                ].map((item, index) =>
                    item.link ? (
                        <Link
                            key={index}
                            to={item.link}
                            target={item.link.startsWith('http') ? '_blank' : '_self'}
                            className="text-gray-300 text-sm hover:text-[#ED184B] transition duration-200"
                        >
                            {item.name}
                        </Link>
                    ) : (
                        <button
                            key={index}
                            onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })}
                            className="text-gray-300 text-sm hover:text-[#ED184B] transition duration-200 text-left"
                        >
                            {item.name}
                        </button>
                    )
                )}
            </div>

            <div className="space-y-4 flex flex-col justify-center mt-4 mb-4">
                <h3 className="text-2xl font-normal squid-font">Contact Us</h3>
                <div className="flex border-2 border-red-500 rounded-md overflow-hidden">
                    <input type="email" placeholder="Your Email" className="p-2 w-full bg-gray-800 text-white focus:outline-none" />
                    <button className="bg-red-500 p-3 text-white hover:bg-[#ED184B] transition duration-300">
                        <FontAwesomeIcon icon={faTelegramPlane} className="text-2xl" />
                    </button>
                </div>
                <h3 className="text-2xl font-normal squid-font">Follow Us</h3>
                <div className="flex justify-center space-x-3">
                    {[
                        { icon: faInstagram, link: "https://www.instagram.com/trinity.aiclub?igsh=eGxzZTlyZnkxZHc5" },
                        { icon: faYoutube, link: "https://youtube.com/@trinityaitpune?feature=shared" },
                        { icon: faLinkedin, link: "https://www.linkedin.com/company/trinityaiclub/" }
                    ].map((item, index) => (
                        <a key={index} href={item.link} target="_blank" rel="noopener noreferrer">
                            <button className="bg-[#ED184B] px-1.5 py-1 rounded-md text-2xl hover:bg-red-600 transition duration-300">
                                <FontAwesomeIcon icon={item.icon} />
                            </button>
                        </a>
                    ))}
                </div>
            </div>
            <div className="col-span-4 text-center text-gray-400 text-sm border-t w-screen border-gray-700 pt-4">
                Made With 🤖 By <span className="text-[#ED184B]">Trinity Club</span>
            </div>
        </footer>
    );
};

const Footer = () => {
    const isMobile = useMediaQuery({ maxWidth: 720 });
    return isMobile ? <Mobile /> : <Laptop />;
};

export default Footer;
