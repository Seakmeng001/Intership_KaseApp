import React, { useState,} from "react";
import { Outlet } from "react-router-dom";
import Slidebar from "../Sidebar/Slidebar";
import Dashboard from "../Dashboard/Dashboard";

const Layout = () => {
  
  const [sidebarToggle, setSidebarToggle] = useState(false);

  const setSidebarState = (state: boolean) => {
    setSidebarToggle(state); 
  };
  // const loginData = localStorage.getItem("loginData");
  // useEffect(() => {
  //   if (loginData === null) {
  //     navigate('/home');
  //   }
  // },[navigate]);

  return (
    <div className='flex'>
      <Slidebar sidebarToggle={sidebarToggle} />
      <Dashboard sidebarToggle={sidebarToggle} setSidebarState={setSidebarState} children={<Outlet />} />
    </div>
  );
}

export default Layout;
