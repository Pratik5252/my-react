import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import Modal from "@mui/material/Modal";
import Login from "./Login";
import ProtectedRoute from "./ProtectedRoute";
import Download from "../components/Download";

// export const AuthContext = React.createContext();

function AuthDetails() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [authUser, setAuthUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out successful");
        // navigate('/login');
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      {authUser ? (
        <button onClick={userSignOut}>Sign Out</button>
      ) : (
        <>
          <button onClick={handleOpen} className=" transition duration-1000">
            Sign In
          </button>
          <Modal open={open} onClose={handleClose}>
            <Login />
          </Modal>
        </>
      )}
    </div>
  );
}

export default AuthDetails;
