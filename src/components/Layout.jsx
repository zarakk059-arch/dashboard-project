import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Ecommerce from "./Ecommerce";
import PerformanceCard from "./PerformanceCard";

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    
    <div className="flex">
    
      {/* Sidebar (appears once) */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Main content */}
      <div className="flex-1">
        {/* Navbar passes toggle to control sidebar */}
        <Navbar setSidebarOpen={setSidebarOpen} />
         <Ecommerce/>
        

        {/* Page content starts below navbar */}
        <main className="pt-16 lg:ml-64 p-4">{children}</main>
      </div>
     
    </div>
    
  );
};

export default Layout;