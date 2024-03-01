import { signInWithPopup } from "firebase/auth";
import React from "react";
import Signup from "./Signup";
import { useNavigate } from "react-router-dom";
import {
  auth,
  googleProvider,
  facebookProvider,
  twitterProvider,
} from "../firebase";
import Box from "@mui/material/Box";

import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook, AiOutlineTwitter } from "react-icons/ai";
import GraphicEqIcon from "@mui/icons-material/GraphicEq";

function Login() {
  const loginGoogleUser = async (e) => {
    e.preventDefault();
    try {
      const res = await signInWithPopup(auth, googleProvider);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  const loginFacebookUser = async (e) => {
    e.preventDefault();
    try {
      const res = await signInWithPopup(auth, facebookProvider).then(
        ({ user }) => {
          this.setState({ user });
        }
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  const loginTwitterUser = async (e) => {
    e.preventDefault();

    const res = await signInWithPopup(auth, twitterProvider)
      .then((e) => {
        console.log(e);
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Box className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50 m-auto w-[400px] sm:w-[400px] md:w-[600px] lg:w-[800px] h-[450px]">
      <form className="login w-[800px] h-[450px] p-3 shadow-black shadow-lg bg-white rounded-2xl m-auto flex flex-col justify-center items-center z-10 font-display">
        <h1 className="flex flex-row justify-center items-center text-black text-2xl md:text-3xl lg:text-4xl font-bold mb-10 font-head_font2">
          <GraphicEqIcon className="mx-2" fontSize="50px" />
          SOUND WAVES
        </h1>

        <p className="text-sm py-2">Login/SignUp</p>
        <div className="flex flex-col gap-4">
          <button
            className=" border border-black px-2 py-1 rounded-full flex justify-center items-center gap-8 w-40 md:w-60 lg:w-80"
            onClick={loginGoogleUser}
          >
            <FcGoogle className="text-lg" />
            Google
          </button>

          <button
            className=" border border-black px-2 py-1 rounded-full flex justify-center items-center gap-6 w-40 md:w-60 lg:w-80"
            onClick={loginFacebookUser}
          >
            <AiFillFacebook className="text-lg" />
            Facebook
          </button>
          <button
            className=" border border-black px-2 py-1 rounded-full flex justify-center items-center gap-8 w-40 md:w-60 lg:w-80"
            onClick={loginTwitterUser}
          >
            <AiOutlineTwitter className="text-lg" />
            Twitter
          </button>
        </div>

        {/* <p className="text-black text-sm md:text-base">
          Create new account -
          <button
            onClick={handleOpen}
            className="hover:text-blue-600 hover:underline pl-1"
          >
            Sign Up
          </button>
          <Modal open={open} onClose={handleClose}>
            <Signup />
          </Modal>
        </p> */}
      </form>
    </Box>
  );
}

export default Login;
