import React from "react";
import Footer from "../sections/Footer";

// Simple dark navbar
const Navbar = () => (
  <nav className="bg-[#1a1a2e] py-4 px-8 flex justify-between items-center shadow-md mb-12">
    <div className="text-2xl font-bold text-primary tracking-wide">
      Mangement Systems
    </div>
    <a
      href="/"
      className="text-white text-lg hover:text-primary transition-colors duration-200"
    >
      Home
    </a>
  </nav>
);

const managementSystems = [
  {
    title: "Library Management Systems",
    description:
      "Efficiently manage books, members, and transactions with intuitive interfaces and robust reporting.",
    icon: "📚",
  },
  {
    title: "UIMS Management Systems",
    description:
      "Comprehensive University Information Management for students, faculty, and administration.",
    icon: "🎓",
  },
  {
    title: "Inventory Management Systems",
    description:
      "Track, organize, and optimize your inventory seamlessly with real-time updates.",
    icon: "📦",
  },
];

const reasons = [
  {
    title: "Why Do You Need a Management System?",
    points: [
      "Automate repetitive tasks and reduce manual errors.",
      "Centralize your data for easy access and better decision-making.",
      "Enhance productivity and save valuable time.",
      "Improve transparency and accountability across your organization.",
    ],
  },
  {
    title: "What Should You Look For?",
    points: [
      "User-friendly and intuitive interface.",
      "Customizable features to fit your unique workflow.",
      "Robust security and data protection.",
      "Detailed analytics and reporting tools.",
      "Reliable support and regular updates.",
    ],
  },
  {
    title: "Why Choose Us?",
    points: [
      "Years of experience building scalable management solutions.",
      "Tailored systems designed specifically for your needs.",
      "Dedicated support and seamless onboarding.",
      "Modern, secure, and future-proof technology stack.",
    ],
  },
];

const MangementSystems = () => {
  return (
    <div className="min-h-screen bg-[#0f1021]">
      <Navbar />
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-5xl font-extrabold text-white mb-6 text-center drop-shadow-lg">
          Management Systems
        </h2>
        <p className="text-secondary text-2xl mb-12 text-center max-w-3xl mx-auto">
          We build robust, modern management systems tailored to your needs.
          Whether you need to manage a library, university, or inventory, our
          solutions empower you to work smarter, not harder.
        </p>
        <div className="grid md:grid-cols-3 gap-12 mb-20">
          {managementSystems.map((system) => (
            <div
              key={system.title}
              className="bg-[#23234b] rounded-2xl shadow-2xl p-10 flex flex-col items-center text-center border border-[#39397a] transition-all hover:scale-105"
            >
              <div className="text-6xl mb-6">{system.icon}</div>
              <h3 className="text-2xl font-bold text-primary mb-4">
                {system.title}
              </h3>
              <p className="text-white text-lg">{system.description}</p>
            </div>
          ))}
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          {reasons.map((section) => (
            <div
              key={section.title}
              className="bg-[#181828] rounded-xl p-8 shadow-lg border border-[#23234b]"
            >
              <h4 className="text-xl font-semibold text-primary mb-4">
                {section.title}
              </h4>
              <ul className="list-disc list-inside text-white text-lg space-y-2">
                {section.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default MangementSystems;
