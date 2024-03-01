import React from "react";
import SD from "../../source/SoundDesign.jpg";
import SD2 from "../../source/SoundDesign2.jpg";
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
        <div className=" flex justify-center items-center h-72 lg:h-screen bg-sd_head_pic bg-repeat-round">
          <h1 className=" text-white text-4xl  md:text-4xl lg:text-6xl font-semibold font-head_font2 px-[3px]">
            SOUND DESIGN
          </h1>
        </div>
        <div className="">
          <div className="  border-black/30 border-b-2">
            <div className="md:px-10 lg:px-36 py-1 bg-white/90 md:rounded-b px-3">
              <div className="p-5 px-3 md:px-20 border-black/30 border-b-2">
                <h1 className="text-left text-2xl md:text-3xl lg:text-4xl font-display2 font-bold px-5 py-3">
                  Sound design: How to make sounds
                </h1>
                <h6 className="text-left font-display2 font-semibold px-5 py-3">
                  Sound design is the art of shaping audio towards a desired
                  goal. Learn how to make sounds from scratch, what sound
                  designers do, and download free sound-design plug-ins to get
                  started.
                </h6>

                <p className="text-left text-sm md:text-md lg:text-lg font-display text-black px-5 py-3 ">
                  Sound design is how you create the timbre of the basic
                  building blocks in your tracks.
                </p>
                <h1 className="text-left text-xl font-display font-bold text-black px-5 border-black border-s-[10px]">
                  What is sound design?
                </h1>
                <div className="bg-gray-300/80 rounded my-2">
                  <ul className="text-left text-sm md:text-md lg:text-lg font-display text-black px-3  list-inside">
                    <div className="p-3  lg:bg-cover hover:scale-95 overflow-clip hover:duration-300 hover:ease-in-out">
                      <img
                        src={SD}
                        alt=""
                        className="rounded shadow-xs shadow-black m-auto"
                      />
                    </div>
                    <p className="py-2">
                      Sound design is a broad discipline that includes
                      everything from creative recording and mixing techniques
                      to sampling, editing synth presets and tweaking effects
                      chains. It also includes techniques in film scoring and
                      soundtrack work like foley and special effects.
                    </p>
                    <div>
                      <h2 className="text-left text-lg font-display font-bold text-black my-2 px-5 border-gray-700 border-s-[8px]">
                        Sound design in music
                      </h2>
                      <div className="p-3  lg:bg-cover hover:scale-95 overflow-clip hover:duration-300 hover:ease-in-out">
                        <img
                          src={SD2}
                          alt=""
                          className="rounded shadow-xs shadow-black m-auto"
                        />
                      </div>
                      <p className="py-2">
                        The term “sound design” probably originated with film
                        sound work, but today sound design refers to any
                        situation where you manipulate the texture of your
                        sounds.
                      </p>
                      <p className="py-2">
                        The sonic elements in your songs can come from so many
                        different places.
                      </p>
                      <p className="py-2">
                        Whether your raw sonic material originates from sample
                        packs, VST synths, microphones or somewhere else, the
                        basic character of the sounds you work with is created
                        through sound design.
                      </p>
                      <p className="py-2">
                        How do you shape the envelopes on your synth plugins?
                        How do you order the effects in your vocal chain? Where
                        do you put your room mics? What samples do you choose
                        for your kick drum? These are all basic sound design
                        questions.
                      </p>
                      <div className="px-6 sm:px-14 md:px-12 py-3">
                        <div className="aspect-w-9 aspect-h-5 md:aspect-w-9 md:aspect-h-4">
                          <iframe
                            className="rounded"
                            src="https://www.youtube.com/embed/NJLIS2MkFe4?si=wHqinFfV8NmzdPxn"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          ></iframe>
                        </div>
                        <div className="font-display">
                          <a
                            href="https://www.youtube.com/watch?v=NJLIS2MkFe4"
                            target="_blank"
                          >
                            <p className="text-xs sm:text-sm text-left hover:text-black/75 hover:underline-offset-2 hover:underline hover:decoration-blue-600 hover:decoration-2">
                              Source -
                              {"   https://www.youtube.com/watch?v=NJLIS2MkFe4"}
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
                  Sound design tools
                </h1>
                <div className="bg-gray-300/80 rounded my-2">
                  <ul className="text-left text-sm md:text-md lg:text-lg font-display text-black px-3  list-inside">
                    <p className="py-2">
                      Sound design is so open-ended that almost any process in
                      music production can be used for it. In fact, there’s no
                      easy way to say how to get started with sound design.
                    </p>
                    <p className="py-2">
                      The best way is to simply dive in, find the methods and
                      tools that work best for you and follow your intuition.
                    </p>
                    <div className="text-left text-sm md:text-md lg:text-lg font-display text-black">
                      <h2 className="text-left text-xl font-display font-bold text-black my-2 mt-5">
                        1. Effects
                      </h2>
                      <p className="py-2">
                        Manipulating sound with audio effects is a powerful
                        sound design technique. Effects can take a boring sound
                        into outer space and back.
                      </p>
                      <p className="py-2">
                        There’s no rules when it comes to effects for sound
                        design. Combining effects, changing their order, and
                        routing them in creative ways are all great techniques.
                      </p>
                      <p className="py-2">
                        If your goal is to change a sound rather than enhance it
                        or make it sit in the mix, you don’t have to worry about
                        preserving the original texture either. Feel free to go
                        wild
                      </p>
                      <h2 className="text-left text-xl font-display font-bold text-black my-2 mt-5">
                        2. Experimental recording techniques
                      </h2>
                      <p className="py-2">
                        There are plenty of ways to get creative during the
                        recording process itself. Sound design starts at the
                        source.
                      </p>
                      <p className="py-2">
                        Experiment with mic choices and positioning, signal
                        chains or any other off-the-wall techniques you can
                        think of.
                      </p>
                      <p className="py-2">Use the studio like an instrument!</p>
                      <h2 className="text-left text-xl font-display font-bold text-black my-2 mt-5">
                        3. Your DAW
                      </h2>
                      <p className="py-2">
                        Some of the original sound design effects came from
                        basic operations that could be performed with analog
                        tape.
                      </p>
                      <p className="py-2">
                        You can still use a lot of the same techniques in your
                        DAW. Changing the speed or playback direction of an
                        audio clip has a massive impact.
                      </p>
                      <p className="py-2">
                        Even simply reversing the playback direction of audio on
                        the timeline can sound alien.
                      </p>
                      <h2 className="text-left text-xl font-display font-bold text-black my-2 mt-5">
                        4. Sampling
                      </h2>
                      <p className="py-2">
                        Sampling and samplers are also great sound design
                        resources. There’s an almost infinite number of samples
                        out there to choose from.
                      </p>
                      <p className="py-2">
                        Even something as simple as choosing which samples to
                        use could be considered sound design.
                      </p>
                      <p className="py-2">
                        Samplers almost always contain built-in synthesis tools
                        like filters and envelope generators.
                      </p>
                      <p className="py-2">
                        What do your sample packs sound like when you manipulate
                        the attack, decay, sustain and release?
                      </p>
                      <p className="py-2">
                        Resample your sounds after tweaking them with effects to
                        form completely new textures.
                      </p>
                      <p className="py-2">
                        Or pick a sound and spread it across the keyboard. How
                        does it sound at different pitches? Better, worse or
                        just different? It’s up to you!
                      </p>
                      <h2 className="text-left text-xl font-display font-bold text-black my-2 mt-5">
                        5. Synthesis
                      </h2>
                      <p className="py-2">
                        Synthesis is one of the most fundamental sound design
                        methods. You’re literally creating a sound from nothing!
                      </p>
                      <p className="py-2">
                        With a synth you get to control every single aspect of
                        the sound you create. That means that each parameter
                        decision is a sound design choice.
                      </p>
                      <p className="py-2">
                        Take the time to learn and understand the influence that
                        oscillators, filters, LFOs and envelope generators have
                        on your signal
                      </p>
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
