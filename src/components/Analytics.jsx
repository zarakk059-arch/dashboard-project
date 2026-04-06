import React, { useEffect, useState } from "react";
import img from "../../public/images/image3.jpeg";

const Analytics = () => {
  const [showCard, setShowCard] = useState(false);

  useEffect(() => {
    // Trigger popup animation after component mounts
    setShowCard(true);
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      {/* Mini Card with Popup */}
      <div
        className={`
          bg-white rounded-xl shadow-lg w-full max-w-xs p-6 flex flex-col items-center text-center
          transform transition-transform duration-500 ease-out
          ${showCard ? "scale-100 opacity-100" : "scale-90 opacity-0"}
        `}
      >
        {/* Heading */}
        <h1 className="text-2xl font-semibold text-gray-800 mb-3">
          Analytic Section
        </h1>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4">
          “Hi, my name is Zarak Khan. I’m a Front-End Developer specializing in building responsive and user-friendly web applications using modern technologies like React, Tailwind CSS, and JavaScript.”
        </p>

        {/* Image */}
        <img
          src={img}
          alt="Analytics illustration"
          className="rounded-lg shadow-md w-32 h-37 object-cover"
        />
      </div>
    </div>
  );
};

export default Analytics;