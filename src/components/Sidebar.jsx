import React, { useState } from "react";
import Logo from "../../public/Logo/logo (2).png";
import { GiSurroundedEye } from "react-icons/gi";
import { RiDashboard2Fill } from "react-icons/ri";
import { IoChevronDown } from "react-icons/io5";
import {
  FaShoppingCart,
  FaComments,
  FaProjectDiagram,
  FaFileInvoice,
} from "react-icons/fa";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const [openDashboard, setOpenDashboard] = useState(true);

  return (
    <>
      <div
        className={`
          fixed top-0 left-0 h-screen w-64 bg-black/85 text-gray-300 p-2
          transform transition-transform duration-300
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} 
          lg:translate-x-0 lg:static z-40
        `}
      >
        <div className="mb-4 flex items-end gap-3">
          <img
            src={Logo}
            alt="Logo"
            className="w-20 h-20 object-contain ml-5 -mt-1"
          />
          <GiSurroundedEye className="text-2xl text-gray-400 mb-6 ml-17" />
        </div>

        <h2 className="text-xs text-gray-500 mb-3 font-bold tracking-widest">
          MAIN
        </h2>

        <div>
          <div
            onClick={() => setOpenDashboard(!openDashboard)}
            className="flex items-center justify-between px-2 py-2 cursor-pointer hover:bg-[#1a1a1a] rounded-md"
          >
            <div className="flex items-center gap-2">
              <RiDashboard2Fill className="text-lg" />
              <span className="text-sm">Dashboard</span>
            </div>

            <IoChevronDown
              className={`text-sm transition-transform duration-300 ${
                openDashboard ? "rotate-180" : ""
              }`}
            />
          </div>

          {openDashboard && (
            <ul className="mt-2 ml-6 space-y-2 text-sm">
              <li className="hover:bg-[#1a1a1a] px-3 py-2 rounded-md cursor-pointer">Ecommerce</li>
              <li className="hover:bg-[#1a1a1a] px-3 py-2 rounded-md cursor-pointer">Analytics</li>
              <li className="hover:bg-[#1a1a1a] px-3 py-2 rounded-md cursor-pointer">CRM</li>
              <li className="hover:bg-[#1a1a1a] px-3 py-2 rounded-md cursor-pointer">Finance</li>
              <li className="hover:bg-[#1a1a1a] px-3 py-2 rounded-md cursor-pointer">Projects</li>
            </ul>
          )}
        </div>

        <h2 className="text-xs text-gray-500 mt-9 mb-4 font-bold tracking-widest">
          APPS
        </h2>

        <div className="ml-6 space-y-2">
          <div className="flex items-center gap-2 px-2 py-2 hover:bg-[#1a1a1a] rounded-md">
            <FaShoppingCart className="text-lg" />
            <span className="text-sm font-semibold">Ecommerce</span>
          </div>
          <div className="flex items-center gap-2 px-2 py-2 hover:bg-[#1a1a1a] rounded-md">
            <FaComments className="text-lg" />
            <span className="text-sm font-semibold">Chat</span>
          </div>
          <div className="flex items-center gap-2 px-2 py-2 hover:bg-[#1a1a1a] rounded-md">
            <FaProjectDiagram className="text-lg" />
            <span className="text-sm font-semibold">Projects</span>
          </div>
          <div className="flex items-center gap-2 px-2 py-2 hover:bg-[#1a1a1a] rounded-md">
            <FaFileInvoice className="text-lg" />
            <span className="text-sm font-semibold">Invoice</span>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;