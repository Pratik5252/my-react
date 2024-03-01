import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiFillYoutube,
} from "react-icons/ai";
import AuthDetails from "../Auth/AuthDetails";

function Sidebar({ showSideBar }) {
  const sidebarClass = showSideBar
    ? "absolute z-20 h-screen bg-black left-0 sm:hidden text-white  -translate-x-0 "
    : "absolute z-20 h-screen bg-black left-0 sm:hidden text-white -translate-x-full";

  return (
    <>
      <div
        className={`transition-transform duration-500 ease-in-out transform ${sidebarClass}`}
        id={showSideBar ? "open" : "close"}
      >
        <div className="space-y-5 mt-6 mx-20  flex flex-col justify-center items-center font-display">
          <Link
            className="nav-link p-1 px-5 rounded hover:text-gray-400 ease-in-out duration-500  "
            to="/"
          >
            Home
          </Link>
          <Link
            className="nav-link p-1 px-5 rounded hover:text-gray-400 ease-in-out duration-500 "
            to="/sound"
          >
            Sounds
          </Link>
          <Link
            className="nav-link p-1 px-5 rounded hover:text-gray-400 ease-in-out duration-500 "
            to="/learn"
          >
            Learn
          </Link>
          <div className="flex justify-center items-center bg-blue-700 py-1 px-2 rounded hover:bg-blue-600 ease-in-out duration-500">
            <AuthDetails showSideBar={showSideBar} />
          </div>
          <div className="pt-64">
            <div className="flex flex-col justify-center items-center">
              <p className="nav-link">
                <Link to="/about">About us</Link>
              </p>
              <p className="mt-4">Contact us through</p>
              <div className="flex flex-row space-x-5 ">
                <a href="#" target="_blank">
                  <AiFillFacebook className="text-gray-400 hover:text-white" />
                </a>
                <a href="#" target="_blank">
                  <AiOutlineInstagram className="text-gray-400 hover:text-white" />
                </a>
                <a href="#" target="_blank">
                  <AiFillYoutube className="text-gray-400 hover:text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
