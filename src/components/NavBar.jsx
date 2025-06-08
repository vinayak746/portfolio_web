import { useState, useEffect } from "react";

import { navLinks } from "../constants";
import { ChevronRightIcon, LucideArrowDown } from "lucide-react";
import { Link } from "react-router-dom";

const NavBar = () => {
  // track if the user has scrolled down the page
  const [scrolled, setScrolled] = useState(false);
  // track dark mode state

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`navbar ${scrolled ? "scrolled" : "not-scrolled"} bg-black `}
    >
      <div className="inner ">
        <a href="#hero" className="logo text-white light:text-black">
          Genkei Solution
        </a>

        <nav className="desktop">
          <ul>
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group">
                <a href={link}>
                  <span>{name}</span>
                  <span className="underline" />
                </a>
              </li>
            ))}
            {/* Services Dropdown */}
            <li className="group relative">
              <button className="text-white flex items-center gap-1">
                Services
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
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
                  <button className="w-full px-4 py-2 text-left hover:bg-gray-100 flex justify-between items-center">
                    <Link to="web-development">Web Development</Link>
                    <span>
                      <ChevronRightIcon />
                    </span>
                  </button>
                  <ul className="absolute top-0 left-full mt-0 w-48 bg-black text-white rounded shadow-lg hidden group-hover/webdev:block transition-all duration-200 z-50">
                    <li>
                      <Link
                        to="/web-development/#frontend"
                        className="block px-4 py-2 hover:bg-gray-800"
                      >
                        Frontend
                      </Link>
                    </li>
                    <li>
                      <a
                        href="#backend"
                        className="block px-4 py-2 hover:bg-gray-800"
                      >
                        <Link to="web-development">Backend</Link>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/web-development/#fullStack"
                        className="block px-4 py-2 hover:bg-gray-800"
                      >
                        Full Stack
                      </a>
                    </li>
                  </ul>
                </li>

                {/* Management Systems */}
                <li className="relative group/management">
                  <button className="w-full px-4 py-2 text-left hover:bg-gray-100 flex justify-between items-center">
                    <Link to="management-systems">Management Systems</Link>
                    <span>
                      <ChevronRightIcon />
                    </span>
                  </button>
                  <ul className="absolute top-0 left-full mt-0 w-48 bg-black text-white rounded shadow-lg hidden group-hover/management:block transition-all duration-200 z-50">
                    <li>
                      <a className="block px-4 py-2 hover:bg-gray-800">
                        <Link to="management-systems">UIMS Management</Link>
                      </a>
                    </li>
                    <li>
                      <a className="block px-4 py-2 hover:bg-gray-800">
                        <Link to="management-systems">Library Management</Link>
                      </a>
                    </li>
                    <li>
                      <a className="block px-4 py-2 hover:bg-gray-800">
                        <Link to="management-systems">
                          Inventory Management
                        </Link>
                      </a>
                    </li>
                  </ul>
                </li>

                {/* UI/UX Designing */}
                <li className="relative group/uiux">
                  <button className="w-full px-4 py-2 text-left hover:bg-gray-100 flex justify-between items-center">
                    <Link to="ui-ux">UI/UX Designing</Link>
                    <span>
                      <ChevronRightIcon />
                    </span>
                  </button>
                  <ul className="absolute top-0 left-full mt-0 w-48 bg-black text-white rounded shadow-lg hidden group-hover/uiux:block transition-all duration-200 z-50">
                    <li>
                      <a
                        href="#wireframing"
                        className="block px-4 py-2 hover:bg-gray-800"
                      >
                        Wireframing
                      </a>
                    </li>
                    <li>
                      <a
                        href="#prototyping"
                        className="block px-4 py-2 hover:bg-gray-800"
                      >
                        Prototyping
                      </a>
                    </li>
                    <li>
                      <a
                        href="#usability"
                        className="block px-4 py-2 hover:bg-gray-800"
                      >
                        Usability Testing
                      </a>
                    </li>
                  </ul>
                </li>

                {/* Cloud Services */}
                <li className="relative group/cloud">
                  <button className="w-full px-4 py-2 text-left hover:bg-gray-100 flex justify-between items-center">
                    <Link to="cloud-computing">Cloud Services</Link>
                    <span>
                      <ChevronRightIcon />
                    </span>
                  </button>
                  <ul className="absolute top-0 left-full mt-0 w-48 bg-black text-white rounded shadow-lg hidden group-hover/cloud:block transition-all duration-200 z-50">
                    <li>
                      <Link
                        to="cloud-computing"
                        className="block px-4 py-2 hover:bg-gray-800"
                      >
                        AWS
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="cloud-computing"
                        className="block px-4 py-2 hover:bg-gray-800"
                      >
                        Azure
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="cloud-computing"
                        className="block px-4 py-2 hover:bg-gray-800"
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
          <div className="inner font-bold ">
            <span>Request Intro Call</span>
          </div>
        </a>
      </div>
    </header>
  );
};

export default NavBar;
