import music from "../source/music_production.jpg";
import daw from "../source/DAW.jpg";
import synth from "../source/synthesizer_2.jpg";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import { motion as m } from "framer-motion";

function Home() {
  const navigate = useNavigate();
  const handleClick = () => navigate("");

  return (
    <m.div
      className="h-full w-full box-border md:p-5 lg:p-10 bg-white bg-cover"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="font-display">
        <div className="">
          <div className="bg-white text-black grid grid-flow-row md:grid-cols-2">
            <div className="h-auto my-auto text-center lg:text-center md:text-center max-md:py-20">
              <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold font-head_font2 px-[3px]">
                SOUND WAVES
              </h1>
              <p className="pt-5 text-sm lg:text-lg">
                Explore your sounds with sound waves library
              </p>
            </div>
            <div className="flex justify-center items-center py-12 max-md:pt-0">
              <div className="w-3/4">
                <img src={music} className=" shadow-black shadow rounded-xl" />
              </div>
            </div>
          </div>
          <div className=" bg-black text-white grid grid-flow-row md:grid-cols-2">
            <div className=" row-start-2 md:row-start-1 flex justify-center items-center py-12 max-md:pt-0">
              <div className="w-3/4">
                <img src={daw} className="rounded-xl" />
              </div>
            </div>
            <div className=" h-auto my-auto text-center lg:text-center md:text-center sm:text-center max-md:py-20">
              <h2 className="text-3xl md:text-4xl font-display2">LIBRARY</h2>
              <p className="py-5 text-sm md:text-md lg:text-lg">
                Sounds are compatiable with any DAW
              </p>
              <button className="bg-blue-700 p-1 text-white rounded-md w-44 hover:bg-blue-600  hover:ease-in-out duration-300 font-display">
                <Link to="./sound">Explore Sounds</Link>
              </button>
            </div>
          </div>

          <div className=" bg- text-black grid  grid-flow-row md:grid-cols-2 ">
            <div className=" h-auto my-auto text-center lg:text-center md:text-center sm:text-center mx-10 md:mx-20 lg:mx-40 max-md:py-20">
              <h2 className="text-3xl md:text-4xl  font-display2">LEARN</h2>
              <p className="py-5 text-sm md:text-md lg:text-lg">
                Know the basics to begin
              </p>
              <button className="bg-blue-700 p-1 text-white rounded-md w-24 hover:bg-blue-600  hover:ease-in-out duration-300 font-display">
                <Link to="./learn">Learn</Link>
              </button>
            </div>
            <div className=" flex justify-center items-center py-12 max-md:pt-0">
              <div className="w-3/4">
                <img src={synth} className="shadow-black shadow rounded-xl " />
              </div>
            </div>
          </div>

          <div className="overflow-hidden ">
            <div className="bg-foot-pic bg-cover hover:scale-105 duration-500">
              <div className="flex flex-col items-center justify-center">
                <p className=" text-white text-center text-sm md:text-xl m-auto mt-32 font-display2">
                  Start your music production right now
                </p>
                <button className=" bg-blue-700 p-1 mb-[100px] text-white rounded-md w-24 hover:saturate-200 hover:ease-in-out duration-300 font-display">
                  <Link to="/">Start Now</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </m.div>
  );
}

export default Home;
