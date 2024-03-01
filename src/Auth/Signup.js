import { auth } from "../firebase";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import Box from "@mui/material/Box";

import { FcGoogle } from "react-icons/fc";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const signUp = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Password do not match.");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        auth.setAuthUser(userCredential.user);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // signInWithPopup(auth, provider);
  const loginGoogleUser = async () => {
    const res = await signInWithPopup(auth);
    console.log(res);
  };

  return (
    <Box className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50 m-auto w-[200px] sm:w-[400px] md:w-[600px] lg:w-[800px] h-[450px]">
      <form
        onSubmit={signUp}
        className="login w-[800px] h-[450px] p-3 shadow-black bg-white  rounded-2xl m-auto flex flex-col justify-center items-center z-10 font-display"
      >
        {/* <h1 className="text-black text-2xl md:text-3xl lg:text-4xl font-bold mb-10 font-head_font2">
          SOUND WAVES
        </h1>
        <div>
          <button
            className=" border border-black px-2 py-1 rounded-md flex justify-center items-center gap-6"
            onClick={loginGoogleUser}
          >
            <FcGoogle className="text-lg" />
            Sign Up With Google
          </button>
        </div> */}
        <div className="text-center py-5">
          <fieldset class="border-t border-gray-300 w-60">
            <legend>
              <p className=" mx-1">or</p>
            </legend>
          </fieldset>
        </div>

        {error && <p className="text-red-500 text-xs">{error}</p>}
        <input
          className="mb-4 w-60 bg-white border-b-[1px] text-black focus:outline-none"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="mb-4 w-60  bg-white border-b-[1px]  text-black focus:outline-none"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          className="mb-4 w-60  bg-white border-b-[1px]  text-black focus:outline-none"
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white rounded my-10 py-1 px-6 md:px-10"
        >
          Sign up
        </button>
        <p className="text-black text-sm md:text-base">
          Already have an account then go to Login
        </p>
      </form>
    </Box>
  );
}

export default Signup;
