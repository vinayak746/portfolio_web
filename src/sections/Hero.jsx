import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState, useEffect } from "react";

import AnimatedCounter from "../components/AnimatedCounter";
import Button from "../components/Button";
import { words } from "../constants";
import HeroExperience from "../components/models/hero_models/HeroExperience";

const Hero = () => {
  const [showModel, setShowModel] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setShowModel(window.innerWidth >= 768); // 768px is standard mobile breakpoint
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );
  });

  return (
    
    <section id="hero" className="relative overflow-hidden min-h-screen ">
      {/* <div className="absolute top-0 left-0 z-10 w-full h-full">
        <img src="/images/bg.png" alt="" className="w-full h-full object-cover" />
      </div> */}

      <div className="hero-layout flex flex-row items-center justify-between w-full h-screen relative z-20 
      
      ">
        {/* LEFT: Hero Content */}
        <header className="flex-1 flex flex-col justify-center md:pl-20 pl-5 pr-5">
          <div className="flex flex-col gap-7 max-w-2xl">
            <div className="hero-text">
              <h1 className="text-5xl md:text-6xl font-bold">
                Shaping
            

                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className="flex items-center md:gap-3 gap-1 pb-4 my-2"
                      >
                        <img
                          src={word.imgPath}
                          alt="person"
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1 className="text-5xl md:text-6xl font-bold mt-4">into Real Projects</h1>
              <h1 className="text-5xl md:text-6xl font-bold mt-4">that Deliver Results</h1>
            </div>

            <p className="text-white-50 md:text-xl relative z-10">
            Empowering educational institutions with modern, efficient UIMS solutions for seamless data and process management
            </p>

            <Button
              text="See Our Work"
              className="md:w-80 md:h-16 w-60 h-12"
              id="counter"
            />
          </div>

          
        </header>

        

        {/* RIGHT: 3D Experience */}
        {/* {showModel && (
          
        )} */}

<div className="flex-1 h-screen relative m-6 md:block hidden">
            <img 
              src="/images/becomes-co-s_FHDDSVp1s-unsplash.jpg" 
              alt="background" 
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
      </div>

      <AnimatedCounter />
    </section>
  );
};

export default Hero;