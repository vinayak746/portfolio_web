import { useState, useEffect, useRef } from "react";

import { navLinks } from "../constants";
import { ChevronRightIcon, LucideArrowDown, Menu } from "lucide-react";
import { Link } from "react-router-dom";

const NavBar = () => {
  // track if the user has scrolled down the page
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuTimeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = () => {
    if (menuTimeoutRef.current) {
      clearTimeout(menuTimeoutRef.current);
    }
    menuTimeoutRef.current = setTimeout(() => {
      setIsMenuOpen(true);
    }, 100); // Small delay to prevent accidental triggers
  };

  const handleMouseLeave = () => {
    if (menuTimeoutRef.current) {
      clearTimeout(menuTimeoutRef.current);
    }
    menuTimeoutRef.current = setTimeout(() => {
      setIsMenuOpen(false);
    }, 100);
  };

  return (
    <header
      className={`navbar ${
        scrolled ? "bg-zinc-800 opacity-95 " : "bg-black"
      }  `}
    >
      <div className="inner   ">
        <a href="#hero" className="logo text-white flex items-center">
          <div className="w-36 h-18 mr-2">
            <img
              src="/images/logos/genkei_logo_try_1.png"
              alt="Genkei Solution Logo"
              className="w-full h-full object-cover"
            />
          </div>
        </a>

        <nav className="desktop">
          <ul>
            {/* Services Dropdown */}
            <li className="group relative ">
              <button className="text-white hover:cursor-pointer flex items-center gap-1 px-4 py-2 rounded-md transition-all duration-300 ease-in-out hover:bg-white hover:text-black">
                Services
                <svg
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="none"
                  className="transition-transform duration-300 group-hover:rotate-180"
                >
                  <path
                    d="M1 1L6 6L11 1"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </button>

              {/* First-Level Dropdown */}
              <ul className="absolute left-0 mt-2 w-64 bg-black text-white rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 flex flex-col">
                {/* Web Development */}
                <li className="relative group/webdev">
                  <button className="w-full px-4 py-2 text-left hover:text-white  hover:bg-gray-800   flex justify-between items-center">
                    <Link to="web-development">Web Development</Link>
                    <span>
                      <ChevronRightIcon />
                    </span>
                  </button>
                  <ul className="absolute top-0 left-full mt-0 w-48 bg-black text-white rounded shadow-lg hidden group-hover/webdev:block transition-all duration-200 z-50">
                    <li>
                      <Link
                        to="/web-development/#frontend"
                        className="block px-4 py-2 hover:bg-gray-800 hover:text-white"
                      >
                        Frontend
                      </Link>
                    </li>
                    <li>
                      <a
                        href="#backend"
                        className="block px-4 py-2 hover:text-white  hover:bg-gray-800"
                      >
                        <Link to="web-development">Backend</Link>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/web-development/#fullStack"
                        className="block px-4 py-2 hover:bg-gray-800 hover:text-white"
                      >
                        Full Stack
                      </a>
                    </li>
                  </ul>
                </li>

                {/* Management Systems */}
                <li className="relative group/management">
                  <button className="w-full px-4 py-2 text-left hover:text-white  hover:bg-gray-800 flex justify-between items-center">
                    <Link to="management-systems">Management Systems</Link>
                    <span>
                      <ChevronRightIcon />
                    </span>
                  </button>
                  <ul className="absolute top-0 left-full mt-0 w-48 bg-black text-white rounded shadow-lg hidden group-hover/management:block transition-all duration-200 z-50">
                    <li>
                      <a className="block px-4 py-2 hover:bg-gray-800 hover:text-white ">
                        <Link to="management-systems">UIMS Management</Link>
                      </a>
                    </li>
                    <li>
                      <a className="block px-4 py-2 hover:bg-gray-800 hover:text-white ">
                        <Link to="management-systems">Library Management</Link>
                      </a>
                    </li>
                    <li>
                      <a className="block px-4 py-2 hover:bg-gray-800 hover:text-white ">
                        <Link to="management-systems">
                          Inventory Management
                        </Link>
                      </a>
                    </li>
                  </ul>
                </li>

                {/* UI/UX Designing */}
                <li className="relative group/uiux">
                  <button className="w-full px-4 py-2 text-left hover:text-white  hover:bg-gray-800 flex justify-between items-center">
                    <Link to="ui-ux">UI/UX Designing</Link>
                    <span>
                      <ChevronRightIcon />
                    </span>
                  </button>
                  <ul className="absolute top-0 left-full mt-0 w-48 bg-black hover:text-black  text-white rounded shadow-lg hidden group-hover/uiux:block transition-all duration-200 z-50">
                    <li>
                      <a
                        href="#wireframing"
                        className="block px-4 py-2 hover:text-white  hover:bg-gray-800"
                      >
                        Wireframing
                      </a>
                    </li>
                    <li>
                      <a
                        href="#prototyping"
                        className="block px-4 py-2 hover:text-white  hover:bg-gray-800"
                      >
                        Prototyping
                      </a>
                    </li>
                    <li>
                      <a
                        href="#usability"
                        className="block px-4 py-2 hover:text-white  hover:bg-gray-800"
                      >
                        Usability Testing
                      </a>
                    </li>
                  </ul>
                </li>

                {/* Cloud Services */}
                <li className="relative group/cloud">
                  <button className="w-full px-4 py-2 text-left hover:text-white  hover:bg-gray-800 flex justify-between items-center">
                    <Link to="cloud-computing">Cloud Services</Link>
                    <span>
                      <ChevronRightIcon />
                    </span>
                  </button>
                  <ul className="absolute top-0 left-full mt-0 w-48 bg-black text-white rounded shadow-lg hidden group-hover/cloud:block transition-all duration-200 z-50">
                    <li>
                      <Link
                        to="cloud-computing"
                        className="block px-4 py-2 hover:text-white  hover:bg-gray-800"
                      >
                        AWS
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="cloud-computing"
                        className="block px-4 py-2 hover:text-white  hover:bg-gray-800"
                      >
                        Azure
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="cloud-computing"
                        className="block px-4 py-2 hover:text-white  hover:bg-gray-800"
                      >
                        Google Cloud
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </nav>

        <a href="#contact" className="contact-btn group">
          <div className="inner font-bold w-80 flex items-center justify-center hover:bg-zinc-700">
            <span className="text-lg">Request Intro Call</span>
          </div>
        </a>

        <nav className="desktop">
          <ul>
            {/* Services Dropdown */}
            <li className="group relative">
              <button className="text-white flex hover:cursor-pointer items-center gap-1 px-4 py-2 rounded-md transition-all duration-300 ease-in-out hover:bg-white hover:text-black">
                Why us
                <svg
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="none"
                  className="transition-transform duration-300 group-hover:rotate-180"
                >
                  <path
                    d="M1 1L6 6L11 1"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </button>

              {/* First-Level Dropdown */}
              <ul className="absolute left-0 mt-2 w-64 bg-black text-white rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 flex flex-col">
                {/* Web Development */}
                <li className="relative group/webdev">
                  <button className="w-full px-4 py-2 text-left hover:bg-gray-100 hover:text-black   flex justify-between items-center">
                    <Link to="blogs">Blogs</Link>
                    <span>
                      <ChevronRightIcon />
                    </span>
                  </button>
                </li>

                {/* Management Systems */}
                <li className="relative group/management">
                  <button className="w-full px-4 py-2 text-left hover:text-black  hover:bg-gray-100 flex justify-between items-center">
                    <Link to="about-us">About Us</Link>
                    <span>
                      <ChevronRightIcon />
                    </span>
                  </button>
                </li>
              </ul>
            </li>
          </ul>
        </nav>

        {/* Hamburger Menu */}
        <div
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <button className="p-2 text-black bg-white    hover:cursor-pointer rounded-md transition-all duration-300 ease-in-out group">
            <Menu
              size={24}
              className={`transform transition-transform duration-300 ease-in-out ${
                isMenuOpen ? "rotate-90" : "rotate-0"
              } group-hover:scale-110`}
            />
          </button>

          <div
            className={`absolute right-0 mt-2 w-48 bg-black text-white rounded-md shadow-lg py-2 z-50 transform transition-all duration-300 ease-in-out ${
              isMenuOpen
                ? "opacity-100 translate-y-0 visible"
                : "opacity-0 -translate-y-2 invisible"
            }`}
          >
            <a
              href="#work"
              className="block px-4 py-2 hover:bg-gray-800 transition-all duration-200 ease-in-out transform hover:translate-x-2 hover:scale-105"
            >
              Work
            </a>
            <a
              href="#experience"
              className="block px-4 py-2 hover:bg-gray-800 transition-all duration-200 ease-in-out transform hover:translate-x-2 hover:scale-105"
            >
              Experience
            </a>
            <a
              href="#skills"
              className="block px-4 py-2 hover:bg-gray-800 transition-all duration-200 ease-in-out transform hover:translate-x-2 hover:scale-105"
            >
              Skills
            </a>
            <a
              href="#testimonials"
              className="block px-4 py-2 hover:bg-gray-800 transition-all duration-200 ease-in-out transform hover:translate-x-2 hover:scale-105"
            >
              Testimonials
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
