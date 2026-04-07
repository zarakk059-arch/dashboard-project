import React, { useState, useEffect } from "react";
import img from "../../public/images/Profile.jpg";
import {
  FaRegCalendarAlt,
  FaRegClock,
  FaShoppingCart,
  FaArrowUp,
  FaStar,
  FaListUl,
} from "react-icons/fa";
import { LuSquareMousePointer } from "react-icons/lu";
import { FaArrowTrendUp } from "react-icons/fa6";
import { TbRefresh } from "react-icons/tb";

const Ecommerce = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const chartSegments = [
    { color: "#3b82f6", value: 25 },
    { color: "#facc15", value: 25 },
    { color: "#ef4444", value: 25 },
    { color: "#10b981", value: 25 },
  ];

  const radius = 60;
  const stroke = 12;
  const normalizedRadius = radius - stroke / 2;
  const circumference = 2 * Math.PI * normalizedRadius;
  let cumulativePercent = 0;

  const weeklyRanges = [
    { day: "Mon", min: 25, max: 65 },
    { day: "Tue", min: 30, max: 70 },
    { day: "Wed", min: 28, max: 80 },
    { day: "Thu", min: 35, max: 60 },
    { day: "Fri", min: 35, max: 40 },
    { day: "Sat", min: 30, max: 55 },
    { day: "Sun", min: 25, max: 50 },
  ];

  const minValue = 20;
  const maxValue = 80;

  const scaleY = (val) => {
    const height = 100;
    return height - ((val - minValue) / (maxValue - minValue)) * height;
  };

  return (
    <div className="w-full mt-19 px-4 sm:px-4">
      {/* Header */}
      <div className="w-full flex flex-col sm:flex-row sm:items-center justify-between  gap-2 sm:gap-0">
        <h1 className="text-2xl sm:text-2xl font-semibold">eCommerce</h1>
        <div className="text-sm text-gray-500 whitespace-nowrap hidden sm:block">
          Pages <span className="mx-1">&gt;</span> Dashboard
          <span className="mx-1">&gt;</span>
          <span className="font-semibold text-gray-700">eCommerce</span>
        </div>
      </div>

      {/* Main Flex Container */}
      <div className="flex flex-col lg:flex-row gap-6 p-2 sm:p-8 items-start">
        {/* Left Column - 4 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1 w-full">
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-md p-4 flex flex-col gap-3 w-full h-full">
            <h1 className="text-gray-500 font-medium text-sm">GOOD DAY,</h1>
            <h2 className="text-lg font-semibold">Zarak Dev!</h2>

            <div className="flex justify-between mt-3 text-gray-500 text-sm gap-2">
              <div className="flex items-center gap-1">
                <FaRegCalendarAlt /> Mar 31, 2026
              </div>
              <div className="flex items-center gap-1 ml-auto">
                <FaRegClock /> {time.toLocaleTimeString()}
              </div>
            </div>

            <img
              src={img}
              alt="User"
              className="h-12 w-12 rounded-full object-cover absolute top-3 right-3 animate-bounce-slow hidden sm:block"
            />
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-md p-4 flex flex-col gap-3 w-full h-full">
            <div className="flex justify-between items-center">
              <span className="text-gray-500 text-sm font-medium">ORDERS</span>
              <FaShoppingCart className="text-blue-500 text-lg" />
            </div>
            <div className="text-xl font-semibold mt-2">9,754</div>
            <div className="flex justify-between items-center mt-2 text-sm">
              <span className="flex items-center gap-1 text-red-500">
                <FaArrowUp /> 1.89%
              </span>
              <span className="text-gray-400 text-xs">since last month</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-md p-4 flex flex-col gap-3 w-full h-full">
            <div className="flex justify-between items-center">
              <span className="text-gray-500 text-sm font-medium">REVENUE</span>
              <LuSquareMousePointer className="text-blue-500 text-lg" />
            </div>
            <div className="text-xl font-semibold mt-2">$75.21k</div>
            <div className="flex justify-between items-center mt-2 text-sm">
              <span className="flex items-center gap-1 text-red-500">
                <FaArrowUp /> 5.23%
              </span>
              <span className="text-gray-400 text-xs">since last month</span>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-xl shadow-md p-4 flex flex-col gap-3 w-full h-full">
            <div className="flex justify-between items-center">
              <span className="text-gray-500 text-sm font-medium">GROWTH</span>
              <FaArrowTrendUp className="text-blue-500 text-lg" />
            </div>
            <div className="text-xl font-semibold mt-2">9,754</div>
            <div className="flex justify-between items-center mt-2 text-sm">
              <span className="flex items-center gap-1 text-red-500">
                <FaArrowUp /> 1.89%
              </span>
              <span className="text-gray-400 text-xs">since last month</span>
            </div>
          </div>
        </div>

        {/* Right Column - 2 Cards stretched to match left height */}
        <div className="flex flex-col md:flex-row gap-4 flex-1 w-full min-w-0 h-74">
          {/* Donut Chart Card */}
          <div className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center gap-3 flex-1 h-full">
            <div className="text-md font-medium text-center">
              Store Performance Analytics
            </div>
            <div className="flex items-center gap-2 text-gray-500 text-sm cursor-pointer hover:text-gray-700">
              <TbRefresh className="w-5 h-5" />
              <span>Refresh</span>
            </div>

            <div className="relative w-36 h-36 sm:w-40 sm:h-40">
              <svg className="w-full h-full -rotate-90">
                {chartSegments.map((seg, index) => {
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

              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-lg font-bold">Total</span>
                <span className="text-gray-500 text-sm">140</span>
              </div>
            </div>

          
          </div>

          {/* Weekly Insights Card */}
          <div className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center gap-3 flex-1 h-full">
            <div className="flex items-center gap-2 text-md font-medium">
              <FaListUl /> Weekly Performance Insights
            </div>

            <svg className="w-full h-36 sm:h-40 mt-2">
              {[20, 40, 60, 80].map((y, idx) => (
                <line
                  key={idx}
                  x1={0}
                  x2="100%"
                  y1={scaleY(y)}
                  y2={scaleY(y)}
                  stroke="#E5E7EB"
                  strokeWidth={1}
                />
              ))}

              {weeklyRanges.map((range, index) => {
                const x = (index * 100) / 6 + "%";
                return (
                  <line
                    key={index}
                    x1={x}
                    x2={x}
                    y1={scaleY(range.min)}
                    y2={scaleY(range.max)}
                    stroke="#3b82f6"
                    strokeWidth={6}
                    strokeLinecap="round"
                  />
                );
              })}
            </svg>

            <div className="flex justify-between w-full text-xs text-gray-500 mt-2">
              {weeklyRanges.map((range) => (
                <span key={range.day}>{range.day}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;