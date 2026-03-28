import React, { useState, useRef, useEffect } from "react";
import { IoMdSearch } from "react-icons/io";
import {
  IoChevronForward,
  IoChevronDown,
  IoNotifications,
  IoMenu,
  IoClose,
} from "react-icons/io5";
import { FiSlash, FiSquare } from "react-icons/fi";
import { RiApps2Line } from "react-icons/ri";
import { CiBrightnessDown } from "react-icons/ci";
import { MdOutlineColorLens, MdOutlineSettings } from "react-icons/md";
import { GrLanguage } from "react-icons/gr";
import img from "../../public/images/image.jpeg";

import {
  FaShoppingCart,
  FaComments,
  FaTasks,
  FaEnvelope,
  FaBuilding,
  FaAddressBook,
  FaCalendarAlt,
  FaLifeRing,
  FaUser,
  FaBell,
  FaCogs,
  FaSignOutAlt,
  FaLock,
  FaQuestionCircle,
} from "react-icons/fa";

const Navbar = () => {
  const [megaOpen, setMegaOpen] = useState(false);
  const [appsOpen, setAppsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const megaRef = useRef();
  const appsRef = useRef();
  const langRef = useRef();
  const userRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (megaRef.current && !megaRef.current.contains(event.target))
        setMegaOpen(false);
      if (appsRef.current && !appsRef.current.contains(event.target))
        setAppsOpen(false);
      if (langRef.current && !langRef.current.contains(event.target))
        setLangOpen(false);
      if (userRef.current && !userRef.current.contains(event.target))
        setUserOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const dashboardItems = [
    "Sales Dashboard",
    "Marketing Dashboard",
    "Finance Overview",
    "User Analytics",
    "Traffic Insights",
  ];
  const projectItems = [
    "Kanban Workflow",
    "Project Timeline",
    "Task Management",
    "Team Members",
    "Assignments",
  ];
  const userItems = [
    "User Profiles",
    "Access Control",
    "Security Settings",
    "User Groups",
    "Authentication",
  ];

  const appsColumn1 = [
    {
      icon: <FaShoppingCart className="text-orange-500" />,
      label: "eCommerce",
      desc: "Products, orders & etc.",
    },
    {
      icon: <FaComments className="text-blue-500" />,
      label: "Chat",
      desc: "Team conversations",
    },
    {
      icon: <FaTasks className="text-green-500" />,
      label: "Task",
      desc: "Plan and track work",
    },
    {
      icon: <FaEnvelope className="text-red-500" />,
      label: "Email",
      desc: "Messages and inbox",
    },
  ];

  const appsColumn2 = [
    {
      icon: <FaBuilding className="text-purple-500" />,
      label: "Companies",
      desc: "Business profiles",
    },
    {
      icon: <FaAddressBook className="text-pink-500" />,
      label: "Contacts Diary",
      desc: "People and connections",
    },
    {
      icon: <FaCalendarAlt className="text-yellow-500" />,
      label: "Calendar",
      desc: "Events and reminders",
    },
    {
      icon: <FaLifeRing className="text-cyan-500" />,
      label: "Support",
      desc: "Help and assistance",
    },
  ];

  const languages = ["English", "Urdu", "Spanish", "French"];

  const userMenu = [
    { icon: <FaUser className="text-gray-500" />, label: "Profile" },
    { icon: <FaBell className="text-gray-500" />, label: "Notifications" },
    { icon: <FaCogs className="text-gray-500" />, label: "Account Settings" },
    {
      icon: <FaQuestionCircle className="text-gray-500" />,
      label: "Support Center",
    },
    { icon: <FaLock className="text-gray-500" />, label: "Lock Screen" },
    { icon: <FaSignOutAlt className="text-gray-500" />, label: "Log Out" },
  ];

  return (
    <div className="fixed top-0 left-0 w-full md:left-64 md:w-[calc(100%-16rem)] bg-white shadow-md z-50 h-16 flex flex-wrap md:flex-nowrap items-center justify-between px-4 md:px-6">
      <div className="flex md:hidden items-center">
        <button onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? (
            <IoClose className="text-2xl" />
          ) : (
            <IoMenu className="text-2xl" />
          )}
        </button>
      </div>

      <div
        className={`flex items-center gap-2 md:gap-3 w-full md:w-auto ${mobileOpen ? "block" : "hidden md:flex"}`}
      >
        {/* Search */}
        <div className="flex items-center bg-gray-100 rounded-full px-3 py-1 gap-2 shadow-sm w-full md:w-auto">
          <div className="bg-gray-200 rounded-full p-1 flex items-center justify-center">
            <IoMdSearch className="text-gray-500" />
          </div>
          <input
            type="text"
            placeholder="Quick Search ..."
            className="outline-none bg-transparent text-sm md:text-base w-full"
          />
        </div>

        <div ref={megaRef} className="relative">
          <button
            onClick={() => setMegaOpen(!megaOpen)}
            className="flex items-center gap-1 text-gray-600 font-medium hover:text-gray-800 px-3 py-1 rounded-md text-sm md:text-base"
          >
            Mega Menu
            <IoChevronDown
              className={`transition-transform duration-300 ${megaOpen ? "rotate-180" : ""}`}
            />
          </button>
          <div
            className={`absolute top-12 left-0 bg-white shadow-lg p-4 md:p-6 w-full md:w-187.5 rounded-lg z-50 transition-all duration-200 ${megaOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}
          >
            <div className="flex flex-col md:flex-row gap-6 md:gap-10">
              <ul className="space-y-1">
                {dashboardItems.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 cursor-pointer hover:text-blue-600"
                  >
                    <IoChevronForward className="text-gray-500" /> {item}
                  </li>
                ))}
              </ul>
              <ul className="space-y-1">
                {projectItems.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 cursor-pointer hover:text-blue-600"
                  >
                    <FiSlash className="text-gray-500" /> {item}
                  </li>
                ))}
              </ul>
              <ul className="space-y-1">
                {userItems.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 cursor-pointer hover:text-blue-600"
                  >
                    <IoChevronForward className="text-gray-500" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div ref={appsRef} className="relative">
          <button
            onClick={() => setAppsOpen(!appsOpen)}
            className="flex items-center gap-1 text-gray-600 font-medium hover:text-gray-800 px-3 py-1 rounded-md text-sm md:text-base"
          >
            Apps
            <IoChevronDown
              className={`transition-transform duration-300 ${appsOpen ? "rotate-180" : ""}`}
            />
          </button>
          <div
            className={`absolute top-12 left-0 bg-white shadow-lg p-4 md:p-6 w-full md:w-137.5 rounded-lg z-50 transition-all duration-200 ${appsOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}
          >
            <div className="flex flex-col md:flex-row gap-4 md:gap-10">
              <ul className="space-y-4">
                {appsColumn1.map((item) => (
                  <li
                    key={item.label}
                    className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 p-2 rounded-md"
                  >
                    {item.icon}
                    <div>
                      <p className="font-medium text-sm">{item.label}</p>
                      <p className="text-xs text-gray-500">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <ul className="space-y-4">
                {appsColumn2.map((item) => (
                  <li
                    key={item.label}
                    className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 p-2 rounded-md"
                  >
                    {item.icon}
                    <div>
                      <p className="font-medium text-sm">{item.label}</p>
                      <p className="text-xs text-gray-500">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`flex items-center gap-2 md:gap-3 ${mobileOpen ? "block" : "hidden md:flex"}`}
      >
        <CiBrightnessDown className="text-gray-600 text-xl cursor-pointer" />
        <RiApps2Line className="text-gray-600 text-xl cursor-pointer" />
        <IoNotifications className="text-gray-600 text-xl cursor-pointer" />
        <FiSquare className="text-gray-600 text-xl cursor-pointer" />
        <MdOutlineColorLens className="text-gray-600 text-xl cursor-pointer" />
        <MdOutlineSettings className="text-gray-600 text-xl cursor-pointer" />

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

        <div
          ref={userRef}
          className="relative flex items-center gap-2 cursor-pointer border-l border-gray-300 pl-2 md:pl-3"
          onClick={() => setUserOpen(!userOpen)}
        >
          <div className="w-10 h-10 overflow-hidden rounded-full">
            <img
              src={img}
              alt="Zarak Khan"
              className="w-full h-full object-cover scale-110"
            />
          </div>
          <div className="text-left hidden md:block">
            <p className="text-sm text-gray-700 font-semibold leading-4">
              Zarak Khan
            </p>
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
  );
};

export default Navbar;
