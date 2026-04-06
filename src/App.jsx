import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Ecommerce from "./components/Ecommerce";
import Analytics from "./components/Analytics";
import Crm from "./components/Crm";
import Finance from "./components/Finance";
import Project from "./components/Project";

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className="flex">
        
        {/* Sidebar */}
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <div className="flex-1">
          
          {/* Navbar */}
          <Navbar setSidebarOpen={setSidebarOpen} />

          {/* Routes */}
          <Routes>
            <Route path="/ecommerce" element={<Ecommerce />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/crm" element={<Crm />} />
            <Route path="/finance" element={<Finance />} />
            <Route path="/projects" element={<Project />} />
          </Routes>

        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;