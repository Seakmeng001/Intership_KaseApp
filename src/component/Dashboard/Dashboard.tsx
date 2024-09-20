import React from 'react';
import Navbar from '../Navbar/Navbar';

interface DashboardProps {
  sidebarToggle: boolean,
  setSidebarState: (state: boolean) => void,
  children: React.ReactNode
}

const Dashboard = ({ sidebarToggle, setSidebarState, children }: DashboardProps) => {
  // console.log("dash")
  return (
    
    <div className={`${sidebarToggle ? "" : "ml-64"} w-full`}>
      <Navbar sidebarToggle={sidebarToggle} setSidebarState={setSidebarState}/>
        {/* <ImageHome/> */}
        {children}
    </div>
  )
}
export default Dashboard;
