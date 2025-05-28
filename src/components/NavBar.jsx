import { useState, useEffect } from "react";

import { navLinks } from "../constants";

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
          Genkei Solutions
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
          </ul>
        </nav>

        {/* <button
          className="toggle-theme-btn"
          onClick={handleToggle}
          aria-label="Toggle dark mode"
        >
          {LightMode ? "🌙" : "☀️"}
        </button> */}

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
