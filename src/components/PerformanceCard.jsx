import React from "react";
import { TbRefresh } from "react-icons/tb";

const PerformanceCard = () => {
  // Donut chart data (percentages must add up to 100)
  const segments = [
    { color: "#3b82f6", value: 40 }, // Blue
    { color: "#facc15", value: 30 }, // Yellow
    { color: "#ef4444", value: 30 }, // Red
  ];

  const radius = 60;
  const stroke = 8; // Thinner stroke
  const normalizedRadius = radius - stroke / 2;
  const circumference = 2 * Math.PI * normalizedRadius;

  // Calculate stroke offsets for segments
  let cumulativePercent = 0;

  return (
    <div className="w-full flex justify-center px-4">
      {/* Card */}
      <div className="bg-white rounded-xl shadow-md p-5 flex flex-col items-center w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between w-full items-center mb-4 gap-2">
          <span className="text-md font-medium text-gray-700 text-center sm:text-left">
            Store Performance Analytics
          </span>
          <button className="flex items-center gap-1 text-gray-500 hover:text-gray-700 text-sm">
            Refresh <TbRefresh className="w-5 h-5" />
          </button>
        </div>

        {/* Donut Chart */}
        <div className="relative w-36 h-36 sm:w-40 sm:h-40 md:w-44 md:h-44 lg:w-48 lg:h-48">
          <svg className="w-full h-full -rotate-90">
            {segments.map((seg, index) => {
              const dashArray = (seg.value / 100) * circumference;
              const dashOffset =
                circumference - (cumulativePercent / 100) * circumference;
              cumulativePercent += seg.value;

              return (
                <circle
                  key={index}
                  r={normalizedRadius}
                  cx="50%"
                  cy="50%"
                  fill="transparent"
                  stroke={seg.color}
                  strokeWidth={stroke}
                  strokeDasharray={dashArray + " " + circumference}
                  strokeDashoffset={dashOffset}
                  strokeLinecap="round"
                />
              );
            })}
          </svg>

          {/* Center Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-lg sm:text-xl font-bold">Total</span>
            <span className="text-gray-500 text-sm sm:text-base">140</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceCard;