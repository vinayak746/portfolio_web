import { useState, useEffect } from "react";

import { navLinks } from "../constants";

const NavBar = () => {
  // track if the user has scrolled down the page
  const [scrolled, setScrolled] = useState(false);
  // track dark mode state
  const [LightMode, setLightMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "light";
  });

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle dark mode and update body class
  useEffect(() => {
    const html = document.documentElement;
    if (LightMode) {
      html.classList.add("light");
      localStorage.setItem("theme", "light");
    } else {
      html.classList.remove("light");
      localStorage.setItem("theme", "dark");
    }
  }, [LightMode]);

  const handleToggle = () => setLightMode((prev) => !prev);

  return (
    <header
      className={`navbar ${
        scrolled ? "scrolled" : "not-scrolled"
      } bg-black light:bg-white light:text-black`}
    >
      <div className="inner ">
        <a href="#hero" className="logo text-white light:text-black">
          EduLex
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

        <button
          className="toggle-theme-btn"
          onClick={handleToggle}
          aria-label="Toggle dark mode"
        >
          {LightMode ? "🌙" : "☀️"}
        </button>

        <a href="#contact" className="contact-btn group">
          <div className="inner">
            <span>Contact us</span>
          </div>
        </a>
      </div>
    </header>
  );
};

export default NavBar;
