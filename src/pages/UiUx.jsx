import React from "react";

const UiUx = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-200 to-pink-100">
      <h1 className="text-4xl font-bold mb-4 text-purple-700">
        UI/UX Projects
      </h1>
      <p className="text-lg text-gray-700 mb-8 max-w-xl text-center">
        Explore my collection of UI/UX design projects, showcasing user-centered
        interfaces and seamless experiences. Each project demonstrates my
        approach to usability, accessibility, and visual design.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        {/* Example Project Card */}
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition">
          <h2 className="text-2xl font-semibold mb-2 text-purple-600">
            Mobile App Redesign
          </h2>
          <p className="text-gray-600 mb-4">
            A complete redesign of a productivity app, focusing on intuitive
            navigation and modern aesthetics.
          </p>
          <a
            href="#"
            className="text-purple-500 hover:underline font-medium"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Case Study
          </a>
        </div>
        {/* Add more project cards as needed */}
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition">
          <h2 className="text-2xl font-semibold mb-2 text-purple-600">
            E-commerce Website UI
          </h2>
          <p className="text-gray-600 mb-4">
            Designed a clean and engaging shopping experience with a focus on
            accessibility and conversion.
          </p>
          <a
            href="#"
            className="text-purple-500 hover:underline font-medium"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Case Study
          </a>
        </div>
      </div>
    </section>
  );
};

export default UiUx;
