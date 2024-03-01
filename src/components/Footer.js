import React from "react";
import { Link } from "react-router-dom";
import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";

function Footer() {
  return (
    <div className="footer box-border">
      <div className="bg-black">
        <div className="py-8 px-6">
          <div className="container mx-auto w-full">
            <div className="grid grid-cols-3 md:w-1/2 gap-x-4 text-sm md:text-base ">
              <div className="flex flex-col  text-white">
                <h3 className="font-bold mb-3">SOUNDS</h3>
                <Link
                  to="/sound"
                  className=" mb-2 hover:text-gray-400  ease-in duration-300"
                >
                  Library
                </Link>
                <Link
                  to="/sound"
                  className=" mb-2 hover:text-gray-400  ease-in duration-300"
                >
                  Samples
                </Link>
              </div>
              <div className="flex flex-col text-white">
                <h3 className="font-bold mb-3">SKILLS</h3>
                <Link
                  to="/learn"
                  className=" mb-2 hover:text-gray-400  ease-in duration-300"
                >
                  Learn
                </Link>
                <Link
                  to="/learn"
                  className="mb-2 hover:text-gray-400  ease-in duration-300"
                >
                  Watch Video
                </Link>
              </div>
              <div className="flex flex-col text-white">
                <h3 className="font-bold mb-3">CONTACT</h3>

                <Link
                  to=""
                  target="_blank"
                  className="flex flex-row items-center mb-2 gap-x-2"
                >
                  <AiFillFacebook className="text-gray-400 hover:text-white" />
                  Facebook
                </Link>

                <Link
                  to=""
                  target="_blank"
                  className="flex flex-row items-center mb-2 gap-x-2"
                >
                  <AiOutlineInstagram className="text-gray-400 hover:text-white" />
                  Instagram
                </Link>
                <Link
                  to=""
                  target="_blank"
                  className="flex flex-row items-center gap-x-2"
                >
                  <AiFillYoutube className="text-gray-400 hover:text-white" />
                  Youtube
                </Link>
              </div>
            </div>
            <footer className="text-white mt-16 flex text-[10px] sm:text-sm md:text-base items-center">
              <div className="mr-6">
                <p>&copy; SoundWaves.com All Rights Reserved</p>
              </div>
              <div className="flex justify-center items-center gap-2">
                <p className="mr-4">
                  <Link to="/">About us</Link>
                </p>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
