import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import GraphicEqIcon from "@mui/icons-material/GraphicEq";
import ReorderRoundedIcon from "@mui/icons-material/ReorderRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiFillYoutube,
} from "react-icons/ai";
import AuthDetails from "../Auth/AuthDetails";
import Sidebar from "./Sidebar";

function Navbar() {
  const [showSideBar, setShowSideBar] = useState(false);

  const toggleNavbar = () => {
    setShowSideBar(!showSideBar);
  };

  useEffect(() => {
    function handleOutsideClick(event) {
      if (showSideBar && event.target.closest(".navbar") === null) {
        setShowSideBar(false);
      }
    }
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [showSideBar]);

  return (
    <div className="navbar  box-border bg-black w-full flex flex-row justify-between sticky top-0 z-10">
      <div className="leftSide h-12 flex justify-center items-center text-white space-x-3 font-bold">
        <GraphicEqIcon className="ml-2" />
        <Link to="/" className="italic">
          SOUND WAVES
        </Link>
      </div>

      <Sidebar showSideBar={showSideBar} />

      <div className="rightSide flex items-center justify-center text-white float-right">
        <div className="hidden sm:flex space-x-5 mx-14 px-5 font-display">
          <Link
            className="nav-link p-1 px-5 rounded  hover:text-gray-400 ease-in-out duration-500 "
            to="/sound"
          >
            Sounds
          </Link>
          <Link
            className="nav-link p-1 px-5 rounded  hover:text-gray-400 ease-in-out duration-500 "
            to="/learn"
          >
            Learn
          </Link>
          {/* <button className="nav-link text-white bg-blue-700 p-1 px-5 rounded  hover:text-slate-100 transition-colors ease-in-out duration-1000 font-semibold "><Link  to="/login">Login
          </Link></button> */}
          <div className="flex justify-center items-center bg-blue-700 py-1 px-2  rounded  hover:bg-blue-600  ease-in-out duration-500">
            <AuthDetails />
          </div>
        </div>
        <button onClick={toggleNavbar}>
          <div className="flex sm:hidden mx-5 px-5">
            {showSideBar ? <CloseRoundedIcon /> : <ReorderRoundedIcon />}
          </div>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
