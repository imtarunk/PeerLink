import React from "react";
import { Link, Outlet } from "react-router-dom";
import banner from "../assets/travelmateLogo.png";
import Footer from "./footer";

const Authpage = () => {
  return (
    <div className="flex flex-row items-center justify-center m-[5%]">
      <div className="flex flex-col items-center justify-center">
        <div>
          <img src={banner} alt="" width={"380px"} />
        </div>
        {/* <h1 className="font-bold text-4xl m-4">The Hub of Your College Life.</h1> */}
        <button className="relative text-gray-400 uppercase font-sans cursor-pointer m-0  p-0 bg-transparent border-none tracking-widest text-2xl">
          <span className="block actual-text stroke-1 stroke-gray-400  hover:bg-gray-200 hover:text-black">
            &nbsp;The Hub of Your College Life&nbsp;
          </span>


        </button>
      </div>
      <div className="flex items-center justify-between m-4 p-4">
        <Outlet />
      </div>
      <div className="flex flex-col absolute -bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );
};

export default Authpage;
