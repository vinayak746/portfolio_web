import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );

      const imageWrapper = card.querySelector('.image-wrapper');
      const img = imageWrapper.querySelector('img');

      imageWrapper.addEventListener('mouseenter', () => {
        gsap.to(imageWrapper, {
          scale: 1.02,
          backgroundColor: '#2a2a2a',
          duration: 0.4,
          ease: 'power2.inOut'
        });
        gsap.to(img, {
          scale: 1.05,
          duration: 0.4,
          ease: 'power2.inOut'
        });
      });

      imageWrapper.addEventListener('mouseleave', () => {
        gsap.to(imageWrapper, {
          scale: 1,
          backgroundColor: imageWrapper.dataset.originalBg || '#18181b',
          duration: 0.4,
          ease: 'power2.inOut'
        });
        gsap.to(img, {
          scale: 1,
          duration: 0.4,
          ease: 'power2.inOut'
        });
      });
      
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper">
            <div className="image-wrapper w-full">
              <img src="\images\original-1e209e9f17faa8e4a8262e7abc844b65.webp" alt="Ryde App Interface" />
            </div>
            <div className="text-content font-extrabold text-xl  hover:bg-white hover:text-black mt-2  rounded-lg w-full my-4  transition-all duration-300">
              <h4>
              An easy-to-use LMS for delivering courses, tracking progress, and enhancing learning experiences.
              </h4>
              
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img
                  src="/images/project2.png"
                  alt="Library Management Platform"
                />
              </div>
              <button className="font-extrabold text-xl hover:bg-white hover:text-black rounded-lg w-full py-2 flex items-center justify-center transition-all duration-500 ease-in-out">
                The Library Management Platform
              </button>
            </div>

            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <img src="\images\original-c6353240f4263b9331e9ec1cc0a20bd8.webp" alt="YC Directory App" />
              </div>

              <div className="font-extrabold text-xl  hover:bg-white hover:text-black mt-2  rounded-lg w-full py-2 flex items-center justify-center transition-all duration-500 ease-in-out">
              An Attendance Management Application For Schools,Colleges And organizations
              </div>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
