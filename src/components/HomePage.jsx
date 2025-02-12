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
import Sponsors from "./Sponsor";
import FAQSection from "./FAQ";
import Footer from "./Footer";
import bg from "../assets/grid_bg.svg";
import img2 from "../assets/squidgame3.jpg"

const navItems = [
  { name: "Home", path: "home" },
  { name: "Tracks", path: "tracks" },
  { name: "Timeline", path: "timeline" },
  { name: "Details", path: "detail" },
  { name: "Sponsors", path: "sponsors" },
  { name: "FAQ", path: "faq" },
  { name: "Contact Us", path: "contact" },
];

const handleScroll = () => {
  const scrollPosition = window.scrollY + 150; // Increased offset

  let foundSection = "home"; // Default section

  for (let item of navItems) {
    const section = document.getElementById(item.path);
    if (section) {
      const { offsetTop, offsetHeight } = section;
      if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
        foundSection = item.path;
        break;
      }
    }
  }
  setActiveSection(foundSection);
};


const LaptopNavbar = ({ activeSection }) => (
  <div className="hidden md:flex space-x-8">
    {navItems.map((item, index) => (
      <ScrollLink
        key={index}
        to={item.path}
        smooth={true}
        duration={800}
        offset={-50}
        className={`uppercase cursor-pointer transition ${activeSection === item.path ? "text-[#ED184B] font-bold" : "text-white hover:text-[#ED184B]"
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
      {menuOpen ? <X size={28} className="text-white" /> : <Menu size={28} className="text-white" />}
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
            className={`uppercase text-white transition ${activeSection === item.path ? "text-red-700 font-bold" : "text-white hover:text-red-700"
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
          <h1 className="text-2xl font-normal squid-font ml-4 text-[#ED184B]">trInIty</h1>
        </div>
        <LaptopNavbar activeSection={activeSection} />
        <MobileNavbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} activeSection={activeSection} />
      </div>
    </nav>
  );
};

const Laptop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.8) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="home" className="flex flex-col relative w-screen min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <div className="relative w-screen min-h-screen">
        <div className="absolute inset-0 ">
          <div className="bg-black w-screen"></div>
          <img src={Img1} alt="Homepage" className="w-full h-full object-cover" />

        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h1 className=" font-normal squid-font trainit-text">
            trAInIt
          </h1>
          <h2 className="text-[4.8rem] font-bold text-white mt-7">HACKATHON</h2>
          <p className="text-3xl text-gray-300 mt-4">19-23 MARCH 2025</p>

          {/* Register Button */}
          <div className="flex justify-center pt-6">
            <Link to="https://unstop.com/hackathons/trainit-where-data-meets-creativity-solutions-2k25-army-institute-of-technology-ait-pune-1390420?lb=iZtcfNU1&utm_medium=Share&utm_source=shortUrl">
              <button className="button_Register">
                REGISTER NOW
                <svg className="icon_Register" viewBox="0 0 24 24" fill="currentColor">
                  <path
                    fill-rule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </Link>
          </div>
        </div>

        <img src={SquidGame1} alt="Squid Game Left" className="absolute left-4 bottom-4 w-64" />
        <img src={SquidGame2} alt="Squid Game Right" className="absolute right-4 bottom-4 w-64" />
      </div>

      {/* Scroll to Top Button - Only show when `showButton` is true */}
      {showButton && (
        <button
          className="fixed bottom-5 right-5 button z-50"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <svg className="w-6 h-6 svgIcon" viewBox="0 0 384 512">
            <path
              fill="currentColor"
              d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
            />
          </svg>
        </button>



      )}


      {/* Sections */}
      <section id="countdown" className="bg-cover bg-center" style={{ backgroundImage: `url(${bg})` }}>
        <EventCountDown />
      </section>
      <section id="tracks" className="bg-cover bg-center" style={{ backgroundImage: `url(${img2})` }}>
        <Tracks />
      </section>
      <section id="timeline">
        <Timeline />
      </section>
      <section id="detail">
        <Detail />
      </section>
      <section id="sponsors" className="bg-cover bg-center" style={{ backgroundImage: `url(${bg})` }}>
        <Sponsors />
      </section>
      <section id="faq" className="bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${bg})` }}>
        <FAQSection />
      </section>
      <section id="contact">
        <Footer />
      </section>
    </div>
  );
};


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
          <h1 className="text-5xl md:text-[180px] font-normal squid-font trainit-text text-[#ED184B]">trAInIt</h1>
          <h2 className="text-2xl md:text-[60px] font-bold text-white mt-7">HACKATHON</h2>
          <p className="text-lg md:text-2xl text-gray-300 mt-4">19-23 MARCH 2025</p>
          <div className="flex justify-center pt-6 ">
            <Link to="https://unstop.com/hackathons/trainit-where-data-meets-creativity-solutions-2k25-army-institute-of-technology-ait-pune-1390420?lb=iZtcfNU1&utm_medium=Share&utm_source=shortUrl">
              <button className="relative bg-gradient-to-b from-[#ED184B] to-red-700 text-white px-6 md:px-8 py-2 rounded-lg text-base font-bold transition-all duration-300 ease-in-out transform hover:scale-110 hover:-translate-y-1 active:scale-95 active:translate-y-1 shadow-lg shadow-red-900  md:border-b-[5px] border-red-800">
                REGISTER NOW
              </button>
            </Link>
          </div>
        </div>
        <img src={SquidGame1} alt="Squid Game Left" className="absolute left-4 bottom-1 transform -translate-y-1/2 w-16" />
        <img src={SquidGame2} alt="Squid Game Right" className="absolute right-4 bottom-1 transform -translate-y-1/2 w-16" />
      </div>
      <div id="countdown" className="" style={{ backgroundImage: `url(${bg})` }}> <EventCountDown /> </div>
      <div id="tracks" className="" > <Tracks /> </div>
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
