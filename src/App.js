import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Sound from "./components/Sound";
import Learn from "./pages/Learn";
import { AuthContextProvider } from "./context/AuthContext";
import SoundDesign from "./pages/Skillpages/SoundDesign";
import Mixing from "./pages/Skillpages/Mixing";
import MusicTheory from "./pages/Skillpages/MusicTheory";
import SoundSelection from "./pages/Skillpages/SoundSelection";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <AuthContextProvider>
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route index element={<Home />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="/sound" element={<Sound />} />
            <Route path="/learn/sound-design" element={<SoundDesign />} />
            <Route path="/learn/mixing" element={<Mixing />} />
            <Route path="/learn/musictheory" element={<MusicTheory />} />
            <Route path="/learn/soundSelection" element={<SoundSelection />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </AuthContextProvider>
    </div>
  );
}

export default App;
