import React from "react";
import { useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
 
const Admin = () => {

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <div className="flex">
      <div className="flex flex-col items-center w-80 h-screen bg-[#E8EDF3] pt-6 gap-4">
        <b className="text-2xl text-[#323131] ">Admin</b>
        <NavLink className={" w-full text-center text-2xl text-[#323131] "} to="manage">
          <p>Manage</p>
        </NavLink>
        <NavLink className={" w-full text-center text-2xl text-[#323131] "} to="name">
          <p>Lorem</p>
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default Admin;