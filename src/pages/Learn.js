import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";
import GraphicEqIcon from "@mui/icons-material/GraphicEq";
import { motion as m } from "framer-motion";

function Learn() {
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
    },
  };
  return (
    <m.div
      className="box-border h-full bg-black"
      variants={var3}
      initial="hidden"
      animate="visible"
    >
      <div className="  ">
        <div className="md:px-10 lg:px-36 bg-white/90">
          <article className="p-5 md:px-20 ">
            <div className="w-full text-center px-3 font-display2">
              <h1 className="flex flex-row justify-center items-center text-4xl md:text-5xl lg:text-6xl font-head_font2 py-10">
                <GraphicEqIcon className="mx-2" fontSize="50px" />
                SOUND WAVES
              </h1>

              <h1 className="text-left text-lg md:text-xl lg:text-2xl font-bold">
                TIPS AND SKILLS:
              </h1>
              <p className="text-left text-sm md:text-md lg:text-lg pt-3 pb-20">
                Mastering the Art of Music Production: Essential Skills and
                Techniques
              </p>
            </div>
            <m.div
              className="grid grid-cols-1 gap-4 p-2 pb-10 md:grid-cols-2 lg:grid-cols-1  text-sm px-10 md:px-20 place-content-evenly font-display"
              variants={var2}
              initial="slide"
              animate="origin"
              transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
            >
              <Link to="./sound-design">
                <button className="group p-2 rounded text-black duration-150 ease-in-out hover:bg-neutral-400 hover:bg-opacity-90 focus:ring-0 active:bg-white text-left w-full">
                  Sound Design
                  <ArrowForwardIcon className="float-right group-hover:translate-x-1 duration-1000 ease-in-out group-hover:scale-105" />
                </button>
              </Link>
              <Link to="./mixing">
                <button className="group p-2 rounded text-black transition duration-150 ease-in-out hover:bg-neutral-400 hover:bg-opacity-90 focus:ring-0 active:bg-white text-left w-full">
                  Mixing
                  <ArrowForwardIcon className="float-right group-hover:translate-x-1 duration-1000 ease-in-out group-hover:scale-105" />
                </button>
              </Link>
              <Link to="./musictheory">
                <button className="group p-2 rounded text-black transition duration-150 ease-in-out hover:bg-neutral-400 hover:bg-opacity-90 focus:ring-0 active:bg-white text-left w-full">
                  Music Theory
                  <ArrowForwardIcon className="float-right group-hover:translate-x-1 duration-1000 ease-in-out group-hover:scale-105" />
                </button>
              </Link>
              <Link to="./soundSelection">
                <button className="group p-2 rounded text-black transition duration-150 ease-in-out hover:bg-neutral-400 hover:bg-opacity-90 focus:ring-0 active:bg-white text-left w-full">
                  Sound Selection
                  <ArrowForwardIcon className="float-right group-hover:translate-x-1 duration-1000 ease-in-out group-hover:scale-105" />
                </button>
              </Link>
            </m.div>

            <h1 className="text-left text-xl font-display font-bold text-black px-5 border-black border-s-[10px]">
              What is Music Production?
            </h1>
            <div className=" rounded my-3">
              <div className="px-6 sm:px-14 md:px-12 py-3">
                <div className="aspect-w-9 aspect-h-5 md:aspect-w-9 md:aspect-h-4">
                  <iframe
                    className="rounded "
                    src="https://www.youtube.com/embed/BUjdnxgBgzM"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              <p className="text-left md:text-center text-sm md:text-md lg:text-lg font-display text-black px-5 py-3 ">
                Music production is the intricate process of creating and
                shaping music through a combination of technical skills,
                artistic creativity,and technological tools. It involves every
                step from the initial idea conception to the final product that
                listeners hear. At its core,music production encompasses various
                stages, such as composition, arrangement, recording, editing,
                mixing, and mastering. Each of these stages plays a pivotal role
                in crafting acohesive and engaging musical piece.In the realm of
                music production, the role of a producer is paramount.A producer
                serves as the guiding force behind a project, overseeing the
                entire process and making critical decisions that shape the
                music's direction. They work closely with artists, songwriters,
                and instrumentalists to bring their visions to life, helping to
                choose the right instruments, sounds,and arrangements that best
                communicate the intended emotions and messages.
              </p>
            </div>

            <h1 className="text-left text-xl font-display font-bold text-black px-5 border-black border-s-[10px]">
              What is a DAW?
            </h1>
            <div className=" rounded my-3">
              <div className="px-6 sm:px-14 md:px-12 py-3">
                <div className="aspect-w-9 aspect-h-5 md:aspect-w-9 md:aspect-h-4">
                  <iframe
                    className="rounded"
                    src="https://www.youtube.com/embed/VJfMhuQYshA"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>

              <p className="text-left md:text-center text-sm md:text-md lg:text-lg font-display text-black px-5 py-3">
                Modern music production heavily relies on technology,with
                Digital Audio Workstations (DAWs) acting as the central tools
                for producers. DAWs provide a virtual workspace where producers
                can record, arrange, edit, and mix audio tracks. This software
                allows for manipulation of various elements, including vocals,
                instruments,and electronic samples, providing a vast array of
                creative possibilities.
              </p>
            </div>
          </article>
        </div>
      </div>
    </m.div>
  );
}

export default Learn;
