import React, { useContext } from "react";
import { FiDownload } from "react-icons/fi";
import { useAuth, AuthContext } from "../context/AuthContext";
import { Modal } from "@mui/material";
import Login from "../Auth/Login";
function Download({ audioUrl }) {
  const { currentUser } = useAuth();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleDownload = () => {
    if (currentUser) {
      const link = document.createElement("a");
      link.href = audioUrl;
      link.download = audioUrl; // Set the desired filename
      link.click();
    } else {
      handleOpen();
    }
  };
  return (
    <>
      {currentUser ? (
        <button onClick={handleDownload} className="">
          <FiDownload />
        </button>
      ) : (
        <>
          <button onClick={handleOpen} className="">
            <FiDownload />
          </button>
          <Modal open={open} onClose={handleClose}>
            <Login />
          </Modal>
        </>
      )}
    </>
  );
}
export default Download;
