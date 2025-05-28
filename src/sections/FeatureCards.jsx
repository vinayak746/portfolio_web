import { useRef } from "react";
import { abilities } from "../constants";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const FeatureCards = () => {
  const cardsRef = useRef([]);

  useGSAP(() => {
    cardsRef.current.forEach((card) => {
      const title = card.querySelector('h3');
      const desc = card.querySelector('p');

      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          scale: 1.05,
          backgroundColor: "#FFFFFF",
          duration: 0.4,
          ease: "power3.out",
          boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4)"
        });
        gsap.to([title, desc], {
          color: "#000000",
          duration: 0.4,
          ease: "power3.out"
        });
        gsap.to(title, {
          fontWeight: 900,
          duration: 0.4,
          ease: "power3.out"
        });
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          scale: 1,
          backgroundColor: "#18181b",
          duration: 0.4,
          ease: "power3.out",
          boxShadow: "none"
        });
        gsap.to([title, desc], {
          color: "#FFFFFF",
          duration: 0.4,
          ease: "power3.out"
        });
        gsap.to(title, {
          fontWeight: 600,
          duration: 0.4,
          ease: "power3.out"
        });
      });
    });
  }, []);

  return (
    <div className="w-full padding-x-lg">
      <div className="mx-auto grid-3-cols">
        {abilities.map(({ imgPath, title, desc }, index) => (
          <div
            key={title}
            ref={(el) => el && (cardsRef.current[index] = el)}
            className="card-border  rounded-xl p-8 flex flex-col gap-4 transition-all duration-300"
          >
            <div className="size-14 flex items-center justify-center rounded-full">
              <img src={imgPath} alt={title} />
            </div>
            <h3 className="text-white text-2xl font-bold mt-2">{title}</h3>
            <p className="text-white-50 text-lg">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCards;