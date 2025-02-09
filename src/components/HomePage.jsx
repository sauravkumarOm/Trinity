import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import Logo from "../assets/LOGO B&W.svg";
import Img1 from "../assets/pixelcut-export.png";
import SquidGame1 from "../assets/squidgame1.svg";
import SquidGame2 from "../assets/squidgame2.svg";
import { Menu, X } from "lucide-react";
import EventCountDown from "./EventCountDown";
import Tracks from "./Track";
import Timeline from "./Timeline";
import Detail from "./Detail";
import Sponsors from "./Sponser";
import FAQSection from "./FAQ";
import Footer from "./Footer";
import bg from "../assets/grid_bg.svg";

const navItems = [
  { name: "Home", path: "home" },
  { name: "Tracks", path: "tracks" },
  { name: "Timeline", path: "timeline" },
  { name: "Sponsors", path: "sponsors" },
  { name: "FAQ", path: "faq" },
  { name: "Contact Us", path: "contact" },
];

const LaptopNavbar = ({ activeSection }) => (
  <div className="hidden md:flex space-x-8">
    {navItems.map((item, index) => (
      <ScrollLink
        key={index}
        to={item.path}
        smooth={true}
        duration={800}
        offset={-50}
        className={`uppercase cursor-pointer transition ${activeSection === item.path ? "text-red-700 font-bold" : "hover:text-red-700"
          }`}
      >
        {item.name}
      </ScrollLink>
    ))}
  </div>
);

const MobileNavbar = ({ menuOpen, setMenuOpen, activeSection }) => (
  <>
    <div className="md:hidden cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
      {menuOpen ? <X size={28} /> : <Menu size={28} />}
    </div>
    {menuOpen && (
      <div className="md:hidden absolute top-full left-0 w-screen bg-black bg-opacity-90 py-4 flex flex-col space-y-4 items-center">
        {navItems.map((item, index) => (
          <ScrollLink
            key={index}
            to={item.path}
            smooth={true}
            duration={800}
            offset={-50}
            className={`uppercase text-white transition ${activeSection === item.path ? "text-red-700 font-bold" : "hover:text-red-700"
              }`}
            onClick={() => setMenuOpen(false)}
          >
            {item.name}
          </ScrollLink>
        ))}
      </div>
    )}
  </>
);

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      navItems.forEach((item) => {
        const section = document.getElementById(item.path);
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(item.path);
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="w-screen bg-black bg-opacity-80 text-white py-4 fixed top-0 left-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="h-10 w-auto" />
          <h1 className="text-2xl font-normal squid-font ml-4 text-red-600">trInIty</h1>
        </div>
        <LaptopNavbar activeSection={activeSection} />
        <MobileNavbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} activeSection={activeSection} />
      </div>
    </nav>
  );
};

const Laptop = () => {
  return (
    <div id="home" className="flex flex-col relative w-screen min-h-screen">
      <Navbar />
      <div className="relative w-screen min-h-screen">
        <div className="absolute inset-0">
          <img src={Img1} alt="Homepage" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="text-5xl md:text-[180px] font-normal squid-font trainit-text text-red-500">trAInIt</h1>
          <h2 className="text-2xl md:text-[60px] font-bold text-white mt-7">HACKATHON</h2>
          <p className="text-lg md:text-2xl text-gray-300 mt-4">19-23 MARCH 2025</p>
          <div className="flex justify-center pt-6 ">
            <Link to="/">
              <button className="relative bg-gradient-to-b from-red-500 to-red-700 text-white px-6 md:px-8 py-2 md:py-3 rounded-lg text-base md:text-lg font-bold transition-all duration-300 ease-in-out transform hover:scale-110 hover:-translate-y-1 active:scale-95 active:translate-y-1 shadow-lg shadow-red-900 border-b-[4px] md:border-b-[5px] border-red-800">
                REGISTER NOW
              </button>
            </Link>
          </div>
        </div>
        <img src={SquidGame1} alt="Squid Game Left" className="absolute left-4 bottom-1 transform -translate-y-1/2 w-52" />
        <img src={SquidGame2} alt="Squid Game Right" className="absolute right-4 bottom-1 transform -translate-y-1/2 w-52" />
      </div>
      <div id="countdown" className="" style={{ backgroundImage: `url(${bg})` }}> <EventCountDown /> </div>
      <div id="tracks" className="" style={{ backgroundImage: `url(${bg})` }}> <Tracks /> </div>
      <div id="timeline" className=""> <Timeline /> </div>
      <div id="detail" className=""> <Detail /> </div>
      <div id="sponsors" className="" style={{ backgroundImage: `url(${bg})` }}> <Sponsors /> </div>
      <div id="faq" className=" bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${bg})` }}> <FAQSection /> </div>
      <div id="contact" className=""> <Footer /> </div>
    </div>
  )
}

const Mobile = () => {
  return (
    <div id="home" className="flex flex-col relative w-screen min-h-screen">
      <Navbar />
      <div className="relative w-screen min-h-screen">
        <div className="absolute inset-0">
          <img src={Img1} alt="Homepage" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="text-5xl md:text-[180px] font-normal squid-font trainit-text text-red-500">trAInIt</h1>
          <h2 className="text-2xl md:text-[60px] font-bold text-white mt-7">HACKATHON</h2>
          <p className="text-lg md:text-2xl text-gray-300 mt-4">19-23 MARCH 2025</p>
          <div className="flex justify-center pt-6 ">
            <Link to="/">
              <button className="relative bg-gradient-to-b from-red-500 to-red-700 text-white px-6 md:px-8 py-2 rounded-lg text-base font-bold transition-all duration-300 ease-in-out transform hover:scale-110 hover:-translate-y-1 active:scale-95 active:translate-y-1 shadow-lg shadow-red-900  md:border-b-[5px] border-red-800">
                REGISTER NOW
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div id="countdown" className="" style={{ backgroundImage: `url(${bg})` }}> <EventCountDown /> </div>
      <div id="tracks" className="" style={{ backgroundImage: `url(${bg})` }}> <Tracks /> </div>
      <div id="timeline" className=""> <Timeline /> </div>
      <div id="detail" className=""> <Detail /> </div>
      <div id="sponsors" className="" style={{ backgroundImage: `url(${bg})` }}> <Sponsors /> </div>
      <div id="faq" className="" style={{ backgroundImage: `url(${bg})` }}> <FAQSection /> </div>
      <div id="contact" className=""> <Footer /> </div>
    </div>
  )
}

const HomePage = () => {
  const isMobile = useMediaQuery({ maxWidth: 430 });
  return isMobile ? <Mobile /> : <Laptop />
};

export default HomePage;
