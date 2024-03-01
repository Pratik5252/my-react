import React, { useEffect, useState } from "react";
import axios from "axios";
import Waveform from "../waveform";
import Download from "./Download";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import heading_pic1 from "../source/Sounds_Icon_01.png";
import heading_pic2 from "../source/Sounds_Icon_02.png";
// import svg_bg from '../source/stacked-peaks-haikei.svg'
import { motion as m } from "framer-motion";

const serverUrl = "http://localhost:5000";
const apiUrl = `${serverUrl}/api/sounds`;

const batchSize = 15;

function Sound() {
  const [sounds, setSounds] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loadedSoundsCount, setLoadedSoundsCount] = useState(batchSize);

  useEffect(() => {
    async function fetchSounds() {
      try {
        const response = await axios.get(apiUrl);
        setSounds(response.data);
      } catch (error) {
        console.error("Error fetching sounds:", error);
      }
    }
    fetchSounds();
  }, []);

  const filteredSounds = sounds.filter(
    (sound) =>
      sound.Name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sound.Key.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sound.Bpm.toString().includes(searchQuery)
  );

  const handleKeyword = (keyword) => {
    setSearchQuery(keyword.toLowerCase());
  };

  const soundsToDisplay = searchQuery
    ? filteredSounds.slice(0, loadedSoundsCount)
    : sounds.slice(0, loadedSoundsCount);

  const noItemsMessage = searchQuery
    ? "No matching items found."
    : "No available items.";

  const loadMoreSounds = () => {
    setLoadedSoundsCount((prevCount) => prevCount + batchSize);
  };
  const showLoadMoreButton = loadedSoundsCount < sounds.length;
  // bg - bg - img;

  const var1 = {
    slide: {
      y: "100%",
    },
    origin: {
      y: 0,
      transition: {
        when: "beforeChildren",
      },
    },
  };
  const var2 = {
    slide: {
      x: "-100%",
    },
    origin: {
      x: 0,
    },
  };
  const var3 = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      staggerChildren: 0.2,
    },
  };

  return (
    <m.div
      className="box-border h-full font-display"
      variants={var1}
      initial="slide"
      animate="origin"
      exit={{ opacity: 0 }}
    >
      <div className="md:px-10 lg:px-32 h-full bg-gray-300">
        <div className="p-5 px-3 md:px-10 ">
          <h1 className="text-center text-xl sm:text-2xl  lg:text-3xl font-medium pt-10 px-[4px]">
            Sonic Sculpting: Exploring the Realm of Sounds
          </h1>

          <m.div
            className="container grid grid-rows-2  gap-4 p-6 m-auto mt-10 lg:flex lg:flex-col lg:items-center"
            variants={var2}
            transition={{
              duration: 1,
              type: "spring",
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="flex flex-row items-center px-6 gap-4 ">
              <img src={heading_pic1} alt="" width="70px" height="70px" />
              <div className="">
                <h1 className="text-2xl">100% royalty free</h1>
                <p className="text-sm lg:text-base">
                  Use your sounds anywhere, they’re cleared for commercial use.
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center px-6 gap-4 ">
              <img src={heading_pic2} alt="" width="70px" height="70px" />
              <div className="">
                <h1 className="text-2xl">Yours forever</h1>
                <p className="text-sm lg:text-base">
                  Every sound you download is yours to keep and use it in DAW
                </p>
              </div>
            </div>
          </m.div>
        </div>

        <form>
          <div className="m-2 mt-10 mx-12 md:mx-20 lg:mx-40 relative ">
            <div className="absolute inset-y-0 left-1 flex items-center">
              <SearchRoundedIcon />
            </div>
            <input
              type="text"
              placeholder="Search..."
              className="w-full h-10 ring-1 focus:outline-none rounded-xl indent-7"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="mx-12 md:mx-20 lg:mx-40 mb-2 flex gap-1">
            <button
              type="button"
              className="text-sm bg-white text-gray-600 px-2 rounded-md border"
              onClick={() => handleKeyword("kick")}
            >
              kick
            </button>
            <button
              type="button"
              className="text-sm bg-white text-gray-600 px-2 rounded-md border "
              onClick={() => handleKeyword("snare")}
            >
              snare
            </button>
            <button
              type="button"
              className="text-sm bg-white text-gray-600 px-2 rounded-md border"
              onClick={() => handleKeyword("perc")}
            >
              perc
            </button>
            <button
              type="button"
              className="text-sm bg-white text-gray-600 px-2 rounded-md border"
              onClick={() => handleKeyword("hihat")}
            >
              hihat
            </button>
          </div>
        </form>
        <div className="md:p-5 md:px-3">
          <div className="pt-5 px-3 md:px-10 md:rounded-md bg-white mb-2">
            <div className="grid grid-flow-col-dense gap-4 py-1 px-2 border-y-[1px] border-gray-200">
              <div>File</div>
              <div className="col-span-2">Sound</div>
              <div>Key</div>
              <div>Bpm</div>
              <div></div>
            </div>
            {soundsToDisplay.length > 0 ? (
              <m.div
                className=""
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.2,
                }}
              >
                {soundsToDisplay.map((sound, index) => (
                  <m.div
                    key={index}
                    className="grid grid-cols-6 gap-4 p-4"
                    variants={var3}
                  >
                    <div className="truncate ...">{sound.Name}</div>
                    <div className="col-span-2">
                      <Waveform audio={sound.sound} />
                    </div>
                    <div className="">{sound.Key}</div>
                    <div className="">{sound.Bpm}</div>
                    <div>
                      <Download audioUrl={sound.sound} />
                    </div>
                  </m.div>
                ))}
              </m.div>
            ) : (
              <p className="text-center text-gray-500 mt-4">{noItemsMessage}</p>
            )}
            {showLoadMoreButton && (
              <div className="text-center py-5">
                <fieldset class="border-t border-gray-200 mx-20">
                  <legend>
                    <m.button
                      className="bg-black text-white px-5 py-1 mx-1 rounded-lg"
                      onClick={loadMoreSounds}
                      whileHover={{ scale: 1.03 }}
                      transition={{ type: "spring" }}
                    >
                      Show more
                    </m.button>
                  </legend>
                </fieldset>
              </div>
            )}
          </div>
        </div>
      </div>
    </m.div>
  );
}

export default Sound;
