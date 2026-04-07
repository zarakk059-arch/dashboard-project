import React, { useEffect, useState } from "react";
import img from "../../public/images/Crm.jpg";

const Crm = () => {
  const [showCard, setShowCard] = useState(false);

  useEffect(() => {
    // Trigger popup animation after component mounts
    setShowCard(true);
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      {/* Responsive Card */}
      <div
        className={`
          bg-white rounded-xl shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg p-4 sm:p-6 md:p-8 flex flex-col items-center text-center
          transform transition-transform duration-500 ease-out
          ${showCard ? "scale-100 opacity-100" : "scale-90 opacity-0"}
        `}
      >
        {/* Heading */}
        <h1 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-semibold text-gray-800 mb-2 sm:mb-3 md:mb-3 lg:mb-4">
          CRM Section
        </h1>

        {/* Description */}
        <p className="text-gray-600 text-xs sm:text-sm md:text-base lg:text-base mb-3 sm:mb-4 md:mb-5 lg:mb-6 px-2 sm:px-4 md:px-6">
          “This section provides a clear overview of your customer relationship management dashboard. Track client interactions, manage leads, and monitor communication efficiently, all in a clean and organized layout designed for productivity.”  
          <br />
          Front End Dev <span className="font-medium text-blue-700">Zarak Khan</span>
        </p>

        {/* Image */}
        <img
          src={img}
          alt="CRM Illustration"
          className="rounded-lg shadow-md w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 object-cover"
        />
      </div>
    </div>
  );
};

export default Crm;