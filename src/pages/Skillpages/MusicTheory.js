import React from "react";
import MusicTeory from "../../source/MusicTheory.jpg";
import scales from "../../source/scales.png";
import Chords from "../../source/Chords.png";
import { motion as m } from "framer-motion";

function SoundDesign() {
  const var2 = {
    slide: {
      x: "100%",
    },
    origin: {
      x: 0,
    },
  };
  return (
    <m.div
      className="box-border h-full"
      variants={var2}
      initial="slide"
      animate="origin"
      transition={{ duration: 0.5 }}
    >
      <div className="w-full text-center bg-black z-20 ">
        {/* max-sm:bg-[#6600FF] */}
        <div className=" flex justify-center items-center h-72 lg:h-screen bg-musicTheory  bg-repeat-round grayscale">
          <h1 className=" text-black text-4xl  md:text-4xl lg:text-6xl font-semibold font-head_font2 px-[3px]">
            MUSIC THEORY
          </h1>
        </div>
        <div className="">
          <div className="  border-black/30 border-b-2">
            <div className="md:px-10 lg:px-36 py-1 bg-white/90 md:rounded-b px-3">
              <div className="p-5 px-3 md:px-20 border-black/30 border-b-2">
                <h1 className="text-left text-2xl md:text-3xl lg:text-4xl font-display2 font-bold px-5 py-3">
                  Music Theory: The Basics You Need to Make Better Music
                </h1>
                <h6 className="text-left font-display2 font-semibold px-5 py-3">
                  Music theory is the structure underneath the songs you love
                  that explains how they do what they do.
                </h6>

                <p className="text-left text-sm md:text-md lg:text-lg font-display text-black px-5 py-3 ">
                  But music theory can also show you the way forward.
                </p>
                <h1 className="text-left text-xl font-display font-bold text-black px-5 border-black border-s-[10px]">
                  What is music theory?
                </h1>
                <div className="bg-gray-300/80 rounded my-2">
                  <ul className="text-left text-sm md:text-md lg:text-lg font-display text-black px-3  list-inside">
                    <div className="p-3  lg:bg-cover hover:scale-95 overflow-clip hover:duration-300 hover:ease-in-out">
                      <img
                        src={MusicTeory}
                        alt=""
                        className="rounded shadow-xs shadow-black m-auto"
                      />
                    </div>
                    <p className="py-2">
                      Music theory is how musicians explain and describe the
                      phenomena heard in a musical composition.
                    </p>
                    <p className="py-2">
                      Music theory defines the core aspects of music and
                      provides a system for musicians to communicate their ideas
                      to one another.
                    </p>
                    <div>
                      <h2 className="text-left text-lg font-display font-bold text-black my-2 px-5 border-gray-700 border-s-[8px]">
                        Why should you learn music theory?
                      </h2>
                      <p className="py-2">
                        Music theory may seem like a stuffy academic practice
                        that turns making music into a crossword puzzle.
                      </p>
                      <p className="py-2">
                        Nothing could be further from the truth. All musicians
                        can benefit from learning some aspects of music theory.
                      </p>
                      <p className="py-2">
                        Understanding music theory concepts is the key to
                        progressing on your instrument, writing better songs and
                        breaking through creative blocks.
                      </p>
                      <p className="py-2">
                        You can pick up the important parts of music theory by
                        learning on your own and applying the concepts to your
                        everyday music practice.
                      </p>
                      <div className="px-6 sm:px-14 md:px-12 py-3">
                        <div className="aspect-w-9 aspect-h-5 md:aspect-w-9 md:aspect-h-4">
                          <iframe
                            className="rounded"
                            src="https://www.youtube.com/embed/CluuHrr7HG4?si=fb3bfBAm9X94NAOc"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          ></iframe>
                        </div>
                        <div className="font-display">
                          <a
                            href="https://www.youtube.com/watch?v=CluuHrr7HG4&t=587s"
                            target="_blank"
                          >
                            <p className="text-xs sm:text-sm text-left hover:text-black/75 hover:underline-offset-2 hover:underline hover:decoration-blue-600 hover:decoration-2">
                              Source -
                              {
                                "   https://www.youtube.com/watch?v=CluuHrr7HG4&t=587s"
                              }
                            </p>
                          </a>
                        </div>
                      </div>
                    </div>
                  </ul>
                </div>
              </div>
              <div className="p-5 px-3 md:px-20 ">
                <h1 className="text-left text-xl font-display font-bold text-black px-5 border-black border-s-[10px]">
                  Getting started with the basics of music
                </h1>
                <div className="bg-gray-300/80 rounded my-2">
                  <ul className="text-left text-sm md:text-md lg:text-lg font-display text-black px-3  list-inside">
                    <p className="py-2">
                      I’m talking about the primary building blocks that every
                      musical composition has in common.
                    </p>
                    <p className="py-2">
                      These are the music theory concepts you can probably grasp
                      intuitively—even if you don’t know what they’re called.
                    </p>
                    <div className="text-left text-sm md:text-md lg:text-lg font-display text-black">
                      <h2 className="text-left text-lg font-display font-bold text-black my-2 px-5 border-gray-700 border-s-[8px]">
                        SCALES
                      </h2>
                      <div className="p-3  lg:bg-cover hover:scale-95 overflow-clip hover:duration-300 hover:ease-in-out">
                        <img
                          src={scales}
                          alt=""
                          className="rounded shadow-xs shadow-black m-auto"
                        />
                      </div>
                      <p className="py-2">
                        Scales are the raw material for melodies. Any melodic
                        musical passage with a singable tune relies on a scale
                        for its form.
                      </p>
                      <p className="py-2">
                        A scale is a sequential collection of notes with a
                        specific pattern of tones and semitones.
                      </p>
                      <p className="py-2">
                        This pattern determines the sound of the scale and the
                        way it’s used in songs.
                      </p>
                      <p className="py-2">
                        This pattern determines the sound of the scale and the
                        way it’s used in songs.
                      </p>
                      <p className="py-2">
                        Different scales bring different moods, emotions and
                        characteristics to a piece—and allow for different
                        melodic possibilities.
                      </p>
                      <p className="py-2">
                        The two basic scales are the major and minor, The major
                        scale follows the pattern
                        <i>tone-tone-semitone-tone-tone-tone-semitone</i>.
                      </p>
                      <p className="py-2">
                        The minor scale follows the pattern
                        <i>tone-semitone-tone-tone-semitone-tone-tone</i>.
                      </p>
                      <div className="px-6 sm:px-14 md:px-12 py-3">
                        <div className="aspect-w-9 aspect-h-5 md:aspect-w-9 md:aspect-h-4">
                          <iframe
                            className="rounded"
                            src="https://www.youtube.com/embed/PG_u4NDJtwU?si=rnmudqa3nyj2GyZX"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          ></iframe>
                        </div>
                        <div className="font-display">
                          <a
                            href="https://www.youtube.com/watch?v=PG_u4NDJtwU"
                            target="_blank"
                          >
                            <p className="text-xs sm:text-sm text-left hover:text-black/75 hover:underline-offset-2 hover:underline hover:decoration-blue-600 hover:decoration-2">
                              Source -
                              {"   https://www.youtube.com/watch?v=PG_u4NDJtwU"}
                            </p>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="text-left text-sm md:text-md lg:text-lg font-display text-black">
                      <h2 className="text-left text-lg font-display font-bold text-black my-2 px-5 border-gray-700 border-s-[8px]">
                        CHORDS
                      </h2>
                      <div className="p-3  lg:bg-cover hover:scale-95 overflow-clip hover:duration-300 hover:ease-in-out">
                        <img
                          src={Chords}
                          alt=""
                          className="rounded shadow-xs shadow-black m-auto"
                        />
                      </div>
                      <p className="py-2">
                        Chords are two or more harmonic notes played at the same
                        time. Most basic chords are built using three notes.
                        Chords are built on their root note (the starting note).
                        The rest of the notes in a chord are determined by the
                        chord quality.
                      </p>
                      <div className="px-6 sm:px-14 md:px-12 py-3">
                        <div className="aspect-w-9 aspect-h-5 md:aspect-w-9 md:aspect-h-4">
                          <iframe
                            className="rounded"
                            src="https://www.youtube.com/embed/Jjm7Ti-iwz0?si=lP7zCrr37E1pHX7p"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          ></iframe>
                        </div>
                        <div className="font-display">
                          <a
                            href="https://www.youtube.com/watch?v=Jjm7Ti-iwz0&t=1s"
                            target="_blank"
                          >
                            <p className="text-xs sm:text-sm text-left hover:text-black/75 hover:underline-offset-2 hover:underline hover:decoration-blue-600 hover:decoration-2">
                              Source -
                              {
                                "   https://www.youtube.com/watch?v=Jjm7Ti-iwz0&t=1s"
                              }
                            </p>
                          </a>
                        </div>
                      </div>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </m.div>
  );
}
export default SoundDesign;
