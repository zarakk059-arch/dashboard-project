import React, { useState, useRef, useEffect } from "react";
import { IoChevronDown, IoNotifications, IoMenu } from "react-icons/io5";
import { FiSquare } from "react-icons/fi";
import { RiApps2Line } from "react-icons/ri";
import { CiBrightnessDown } from "react-icons/ci";
import { MdOutlineColorLens, MdOutlineSettings } from "react-icons/md";
import { GrLanguage } from "react-icons/gr";
import { IoMdSearch } from "react-icons/io";
import img from "../../public/images/image.jpeg";

import {
  FaUser,
  FaBell,
  FaCogs,
  FaSignOutAlt,
  FaLock,
  FaQuestionCircle,
} from "react-icons/fa";

import { FcGoogle } from "react-icons/fc";
import { SiFigma, SiDropbox } from "react-icons/si";
import { BsChatDots } from "react-icons/bs";

const Navbar = ({ setSidebarOpen }) => {
  const [megaOpen, setMegaOpen] = useState(false);
  const [appsOpen, setAppsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);

  const megaRef = useRef();
  const appsRef = useRef();
  const langRef = useRef();
  const userRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (megaRef.current && !megaRef.current.contains(event.target)) setMegaOpen(false);
      if (appsRef.current && !appsRef.current.contains(event.target)) setAppsOpen(false);
      if (langRef.current && !langRef.current.contains(event.target)) setLangOpen(false);
      if (userRef.current && !userRef.current.contains(event.target)) setUserOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const languages = ["English", "Urdu", "Spanish", "French"];

  const userMenu = [
    { icon: <FaUser className="text-gray-500" />, label: "Profile" },
    { icon: <FaBell className="text-gray-500" />, label: "Notifications" },
    { icon: <FaCogs className="text-gray-500" />, label: "Account Settings" },
    { icon: <FaQuestionCircle className="text-gray-500" />, label: "Support Center" },
    { icon: <FaLock className="text-gray-500" />, label: "Lock Screen" },
    { icon: <FaSignOutAlt className="text-gray-500" />, label: "Log Out" },
  ];

  return (
    <div className="fixed top-0 left-0 w-full lg:left-64 lg:w-[calc(100%-16rem)] bg-white shadow-md z-50 h-16 flex items-center justify-between px-4 md:px-6">

      {/* Sidebar Button for Mobile */}
      <div className="flex items-center lg:hidden">
        <button
          onClick={() => setSidebarOpen(true)}
          className="w-10 h-10 rounded-full flex items-center justify-center bg-blue-600 text-white shadow-md hover:bg-blue-700 active:scale-95 transition-all duration-200"
        >
          <IoMenu className="text-xl" />
        </button>
      </div>

      {/* Search + Mega + Apps */}
      <div className="flex-1 flex items-center gap-2 md:gap-3 w-full lg:w-auto">

        {/* Search bar (desktop only) */}
        <div className="hidden lg:flex items-center bg-gray-100 rounded-full px-3 py-1 gap-2 shadow-sm w-full lg:w-auto">
          <IoMdSearch className="text-gray-500 text-xl" />
          <input
            type="text"
            placeholder="Quick Search ..."
            className="outline-none bg-transparent text-sm md:text-base w-full"
          />
        </div>

        {/* Mega Menu */}
        <div ref={megaRef} className="hidden lg:flex relative">
          <button
            onClick={() => setMegaOpen(!megaOpen)}
            className="flex items-center gap-1 text-gray-600 font-medium hover:text-gray-800 px-3 py-1 rounded-md text-sm md:text-base"
          >
            Mega Menu
            <IoChevronDown
              className={`transition-transform duration-300 ${megaOpen ? "rotate-180" : ""}`}
            />
          </button>

          {megaOpen && (
            <div className="absolute left-0 top-10 bg-white shadow-xl rounded-lg w-64 p-4 z-50">
              <p className="font-semibold text-gray-700 mb-2">Dashboard & Analytics</p>

              {[
                "Sales Dashboard",
                "Marketing Dashboard",
                "Finance Overview",
                "User Analytics",
                "Traffic Insights",
              ].map((item) => (
                <div
                  key={item}
                  className="flex justify-between items-center px-2 py-2 hover:bg-gray-100 rounded cursor-pointer"
                >
                  {item}
                  <IoChevronDown className="-rotate-90 text-gray-400" />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Apps */}
        <div ref={appsRef} className="hidden lg:flex relative">
          <button
            onClick={() => setAppsOpen(!appsOpen)}
            className="flex items-center gap-1 text-gray-600 font-medium hover:text-gray-800 px-3 py-1 rounded-md text-sm md:text-base"
          >
            Apps
            <IoChevronDown
              className={`transition-transform duration-300 ${appsOpen ? "rotate-180" : ""}`}
            />
          </button>

          {appsOpen && (
            <div className="absolute left-0 top-10 bg-white shadow-xl rounded-lg w-48 p-2 grid grid-cols-2 gap-3 z-50">
              <div className="flex flex-col items-center p-3 hover:bg-gray-100 rounded cursor-pointer">
                <FcGoogle size={22} />
                <span className="text-xs">Google</span>
              </div>

              <div className="flex flex-col items-center p-3 hover:bg-gray-100 rounded cursor-pointer">
                <SiFigma className="text-pink-500" size={20} />
                <span className="text-xs">Figma</span>
              </div>

              <div className="flex flex-col items-center p-3 hover:bg-gray-100 rounded cursor-pointer">
                <SiDropbox className="text-blue-500" size={20} />
                <span className="text-xs">Dropbox</span>
              </div>

              <div className="flex flex-col items-center p-3 hover:bg-gray-100 rounded cursor-pointer">
                <BsChatDots className="text-green-500" size={20} />
                <span className="text-xs">Chat Files</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Right icons */}
      <div className="flex items-center gap-2 md:gap-3">

        {/* Mobile view */}
        <div className="flex items-center gap-2 lg:hidden">
          <IoNotifications className="text-gray-600 text-xl cursor-pointer" />
          <GrLanguage className="text-gray-600 text-xl cursor-pointer" />

          {/* Mobile Profile Dropdown */}
          <div ref={userRef} className="relative">
            <div
              className="w-10 h-10 overflow-hidden rounded-full cursor-pointer"
              onClick={() => setUserOpen(!userOpen)}
            >
              <img src={img} alt="Profile" className="w-full h-full object-cover scale-110" />
            </div>

            {userOpen && (
              <div className="absolute right-0 top-12 bg-white shadow-lg rounded-lg w-52 z-50 p-2">
                <div className="p-2 border-b border-gray-200 text-sm font-medium">
                  Welcome back 👋!
                </div>
                <ul className="space-y-2 mt-2">
                  {userMenu.map((item) => (
                    <li
                      key={item.label}
                      className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 p-2 rounded text-sm"
                    >
                      {item.icon}
                      <span>{item.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Desktop full icons */}
        <div className="hidden lg:flex items-center gap-2 md:gap-3">
          <CiBrightnessDown className="text-gray-600 text-xl cursor-pointer" />
          <RiApps2Line className="text-gray-600 text-xl cursor-pointer" />
          <IoNotifications className="text-gray-600 text-xl cursor-pointer" />
          <FiSquare className="text-gray-600 text-xl cursor-pointer" />
          <MdOutlineColorLens className="text-gray-600 text-xl cursor-pointer" />
          <MdOutlineSettings className="text-gray-600 text-xl cursor-pointer" />

          {/* Language dropdown (your original code preserved) */}
          <div
            ref={langRef}
            className="relative flex items-center border-l border-gray-300 pl-2 md:pl-3 cursor-pointer"
          >
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1 md:gap-2 text-gray-600 px-2 py-1 rounded hover:bg-gray-100 text-sm md:text-base"
            >
              <GrLanguage className="text-lg md:text-xl" />
              <span className="font-medium">EN</span>
              <IoChevronDown
                className={`text-gray-600 text-sm md:text-base transition-transform duration-300 ${langOpen ? "rotate-180" : ""}`}
              />
            </button>

            {langOpen && (
              <div className="absolute right-0 top-10 bg-white shadow-lg rounded-lg p-2 w-32 z-50">
                {languages.map((lang) => (
                  <div
                    key={lang}
                    className="cursor-pointer hover:bg-gray-100 px-2 py-1 rounded text-sm"
                  >
                    {lang}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Desktop User Login Section (exactly restored) */}
          <div
            ref={userRef}
            className="relative flex items-center gap-2 cursor-pointer border-l border-gray-300 pl-2 md:pl-3"
            onClick={() => setUserOpen(!userOpen)}
          >
            <div className="w-10 h-10 overflow-hidden rounded-full">
              <img src={img} alt="Profile" className="w-full h-full object-cover scale-110" />
            </div>

            <div className="text-left">
              <p className="text-sm text-gray-700 font-semibold leading-4">Zarak Khan</p>
              <p className="text-xs text-gray-500 leading-3">Admin Head</p>
            </div>

            <IoChevronDown
              className={`text-gray-600 ${userOpen ? "rotate-180" : ""}`}
            />

            {userOpen && (
              <div className="absolute right-0 top-14 bg-white shadow-lg rounded-lg w-52 z-50 p-2">
                <div className="p-2 border-b border-gray-200 text-sm font-medium">
                  Welcome back 👋!
                </div>
                <ul className="space-y-2 mt-2">
                  {userMenu.map((item) => (
                    <li
                      key={item.label}
                      className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 p-2 rounded text-sm"
                    >
                      {item.icon}
                      <span>{item.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;