import React from "react";
import eq from "../../source/eq.jpg";
import compress from "../../source/compression.png";
import transients from "../../source/Transients.jpg";
import TresholdRatio from "../../source/TresholdRatio.jpg";
import AttackRelease from "../../source/AttackRelease.jpg";
import StaticMix from "../../source/Static-Mix.jpg";
import Peak from "../../source/Peak.jpg";
import RMS from "../../source/RMS.jpg";
import { Link } from "react-router-dom";
import { motion as m } from "framer-motion";

function Mixing() {
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
        <div className=" flex justify-center items-center h-72 lg:h-screen bg-mixing bg-repeat-round">
          <h1 className=" text-white text-4xl  md:text-4xl lg:text-6xl font-semibold font-head_font2 px-[3px]">
            MIXING
          </h1>
        </div>
        <div className="">
          <div className=" border-black/30 border-b-2">
            <div className=" py-3 md:px-10 lg:px-36 bg-white/90 md:rounded-b px-3">
              <div className="p-5 px-3 md:px-20 border-black/30 border-b-2">
                <h1 className="text-left  text-2xl md:text-3xl lg:text-4xl font-display2 font-bold px-5 py-5">
                  What is audio mixing?
                </h1>
                <h6 className="text-left font-display2 font-semibold px-5 py-3">
                  Audio mixing is the process of blending and combining audio
                  tracks so that each element has a pleasing sound and distinct
                  space in a finished stereo recording.
                </h6>
                <div className="border-y-2 border-black/30 py-3">
                  <h4 className="text-left text-lg font-display2 px-5 py-2">
                    Jump to Topics
                  </h4>
                  <ul className="text-left text-sm md:text-md lg:text-lg font-display2 text-black px-8 list-inside list-disc">
                    <li className="hover:underline decoration-blue-600 decoration-2">
                      <a href="#EQ">How to EQ</a>
                    </li>
                    <li className="hover:underline decoration-blue-600 decoration-2">
                      <a href="#compression">Compression 101</a>
                    </li>
                    <li className="hover:underline decoration-blue-600 decoration-2">
                      <a href="#staticMix">Static Mix Technique</a>
                    </li>
                    <li className="hover:underline decoration-blue-600 decoration-2">
                      <a href="#headroom">Headroom in Audio</a>
                    </li>
                  </ul>
                </div>
                <p
                  id="EQ"
                  className="text-left text-sm md:text-md lg:text-lg font-display text-black px-5 py-3 "
                >
                  Mixing in music refers to the process of combining individual
                  tracks and elements of a song to create a balanced, cohesive,
                  and sonically pleasing final audio product. It's a critical
                  stage in the music production process that involves adjusting
                  various parameters to ensure that all the elements work
                  together harmoniously and effectively convey the artistic
                  intention of the music.
                </p>
                <h1 className="text-left text-xl font-display font-bold text-black px-5 border-black border-s-[10px]">
                  How to EQ: A guide to master EQ
                </h1>
                <div className="bg-gray-300/80 rounded my-2">
                  <ul className="text-left text-sm md:text-md lg:text-lg font-display text-black px-3  list-inside">
                    <p className="py-2">
                      An EQ is a super versatile tool. Sound designers will use
                      it to shape their sounds, filters are essentially EQs, you
                      can even use EQs for various modulation purposes, and so
                      much more. However, in this article, we’ll focus on the
                      primary use case for an EQ – using it to clean up sounds
                      for a good-sounding mix.
                    </p>

                    <div>
                      <h2 className="text-left text-lg font-display font-bold text-black my-2 px-5 border-gray-700 border-s-[8px]">
                        When to use an EQ
                      </h2>
                      <div className="p-3  lg:bg-cover hover:scale-95 overflow-clip hover:duration-300 hover:ease-in-out">
                        <img
                          src={eq}
                          alt="EQ"
                          className="rounded m-auto shadow-sm shadow-black"
                        />
                      </div>
                      <p className="py-2">
                        So to know how to EQ requires you to know when to use an
                        EQ, you must first find a problem. Because if there’s no
                        problem, you don’t need an EQ. Here’s what that means.
                      </p>
                      <p className="py-2">
                        Let’s say you’re working on a dark trap beat, and you
                        notice that your pads are heavily clashing with your
                        808s. Again, that’s your problem right there. To fix it,
                        open your EQ and add a soft “low cut” or “high pass” at
                        around 100hz to 200hz to give your 808 all the space in
                        the low-end. That’s it.
                      </p>
                      <p className="py-2">
                        What you don’t want to do is start creating problems
                        that don’t exist and “fixing” them with an EQ. That’s
                        not how to EQ. Don’t be like, “Yeah, my vocals sound
                        totally fine, but let me boost the high-end so they are
                        a bit brighter because I always do that” or{" "}
                        <i>
                          “I always boost the lows on my kick drum, so even
                          though this one sounds fine, I’m going to boost it for
                          no reason”.
                        </i>
                      </p>
                      <h2 className="text-left text-md font-display font-bold text-black py-2">
                        Here’s a brief list of the most common mixing problems,
                        and how to EQ them:
                      </h2>
                      <ul className="text-left text-sm md:text-md lg:text-lg font-display text-black px-3 list-inside list-disc">
                        <li className="py-2">
                          <strong>Muddy low-end:</strong> Low frequencies are
                          sensitive. You want to devote the space below ~140hz
                          to one instrument at a time. So adding a low cut at
                          100hz to 200hz on elements that bleed into your
                          low-end is helpful.
                        </li>
                        <li className="py-2">
                          <strong>Clashing elements:</strong>If two elements in
                          your mix are fighting for space, you must prioritize
                          one of the elements and attenuate the problem area on
                          the less important element. For example, let’s say
                          your vocals and bass are fighting in the high-end.
                          Determine which one needs that space more, probably
                          the vocals, and lower the high-end on the bass.
                        </li>
                        <li className="py-2">
                          <strong>Basic EQ:</strong> If you need some sizzle in
                          the highs, just boost the highs. Need more low-end?
                          Add it. Are the low-mids bothering you? Carve them
                          out. Don’t overthink how to EQ. When it comes to basic
                          equalization, just do it.
                        </li>
                        <li className="py-2">
                          <strong>Resonant peaks:</strong>If you notice weird
                          resonant peaks in your mix, grab a sharp “bell” EQ and
                          sweep through the frequency area to pin down the
                          problem frequency and cut it out.
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h2 className="text-left text-lg font-display font-bold text-black my-2 px-5 border-gray-700 border-s-[8px] ">
                        EQ is not magic. It can’t do everything.
                      </h2>
                      <p className="py-2">
                        Remembering that an EQ is not a magical tool that fixes
                        all problems is important. Let’s go back to our Deep
                        House synth lead example and how to EQ that. If you
                        notice that it sounds dull and an EQ high-end boost
                        isn’t fixing the problem or sounds too artificial, other
                        techniques might be the better option.
                      </p>
                      <p className="py-2">
                        That said, it’s essential to understand that while an EQ
                        is extremely powerful, it can’t do everything. So
                        knowing how to EQ and not forcing or abusing the EQ is
                        also crucial since you don’t want to make things sound
                        worse when your intentions are to make things sound
                        better.
                      </p>
                      <p className="py-2">
                        Ideally, you’ll want to start off with good sounds that
                        need minimal to no EQ. If you struggle with good sound
                        selection, check out our{" "}
                        <Link
                          to="../learn/soundSelection"
                          className=" underline underline-offset-2 hover:no-underline decoration-black/50 decoration-2 hover:bg-gray-500 hover:translate-x-10 rounded transition-all duration-300"
                        >
                          sound selection guide
                        </Link>
                        , that’ll help you choose the right sounds.
                      </p>
                      <div className="px-6 sm:px-14 md:px-12 py-3">
                        <div className="aspect-w-9 aspect-h-5 md:aspect-w-9 md:aspect-h-4">
                          <iframe
                            className="rounded"
                            src="https://www.youtube.com/embed/ZLjALGQD4bY?si=T4e4t44C6B1ak-ns"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          ></iframe>
                        </div>
                        <div className="font-display">
                          <a
                            href="https://www.youtube.com/watch?v=ZLjALGQD4bY"
                            target="_blank"
                          >
                            <p className="text-xs sm:text-sm text-left hover:text-black/75 hover:underline-offset-2 hover:underline hover:decoration-blue-600 hover:decoration-2">
                              Source -
                              {"  https://www.youtube.com/watch?v=ZLjALGQD4bY"}
                            </p>
                          </a>
                        </div>
                      </div>
                    </div>
                  </ul>
                </div>
              </div>
              <div
                id="compression"
                className="p-5 px-3 md:px-20 border-black/30 border-b-2"
              >
                <h1 className="text-left text-xl font-display font-bold text-black px-5 border-black border-s-[10px]">
                  Compression 101: How to Use a Compressor for a Better Mix
                </h1>
                <div className="bg-gray-300/80 rounded my-2">
                  <ul className="text-left text-sm md:text-md lg:text-lg font-display text-black px-5  list-inside">
                    <p className="py-2">
                      Compression reduces the overall dynamic range of a piece
                      of audio by detecting when it exceeds a specified level,
                      and then attenuating it by a specified amount. Put simply,
                      it narrows the difference between the loudest and softest
                      parts of a track so that it’s more consistent in level.
                    </p>
                    <div>
                      <h2 className="text-left text-lg font-display font-bold text-black my-2 px-5 border-gray-700 border-s-[8px]">
                        Why is audio compression used in mixing?
                      </h2>
                      <div className="p-3  lg:bg-cover hover:scale-95 overflow-clip hover:duration-300 hover:ease-in-out">
                        <img
                          src={compress}
                          alt="compresser"
                          className="rounded m-auto"
                        />
                      </div>
                      <p className="py-2">
                        It is one of the fundamental tasks in mixing any type of
                        music.
                      </p>
                      <p className="py-2">
                        Despite that, compression in music production is often
                        misunderstood. With such an important process, it can be
                        hard for beginners to get started..
                      </p>
                      <p className="py-2">
                        In this article I’ll go through everything you need to
                        understand the role that audio compression plays in
                        mixing music. I’ll unpack how it works and give you the
                        best tips for learning to use it in your own process.
                      </p>
                      <h2 className="text-left text-lg font-display font-bold text-black py-2">
                        Compression is used in music to reduce the dynamic range
                        of signals with loud and quiet elements so that both can
                        be heard clearly.
                      </h2>
                      <ul className="text-left text-sm md:text-md lg:text-lg font-display text-black px-3 list-inside list-disc">
                        <p className="py-2">
                          Think of the difference between a soft sound like a
                          whispered vocal and the aggressive crack of a snare.
                          To make them both heard on a recording, the mix
                          engineer has to manage the dynamics.
                        </p>
                        <p className="py-2">
                          But even within the same sound, quiet details can be
                          easily overshadowed by the loudest moments.
                        </p>
                        <p className="py-2">
                          A good way to understand it is to think of the sound
                          of a recorded drum set. The fast onset of sound when
                          the stick hits the drum skin is a clear example of a
                          <strong> transient.</strong>
                        </p>
                        <p className="py-2">
                          In most sounds, the transient is the loudest moment in
                          the signal. To hear the transients equally with the
                          body of the sound, compression is often necessary.
                        </p>
                        <div className="p-3  lg:bg-cover hover:scale-95 overflow-clip hover:duration-300 hover:ease-in-out">
                          <img
                            src={transients}
                            alt="transients"
                            className="rounded shadow-sm shadow-black m-auto"
                          />
                        </div>
                      </ul>
                    </div>
                    <div>
                      <h2 className="text-left text-lg font-display font-bold text-black my-2 px-5 border-gray-700 border-s-[8px]">
                        How does audio compression work?
                      </h2>
                      <ul className="text-left text-sm md:text-md lg:text-lg font-display text-black px-3 list-inside">
                        <h2 className="text-left text-lg font-display font-bold text-black my-2 mt-5 px-5">
                          Threshold & Ratio
                        </h2>
                        <div className="p-3  lg:bg-cover hover:scale-95 overflow-clip hover:duration-300 hover:ease-in-out">
                          <img
                            src={TresholdRatio}
                            alt="TresholdRatio"
                            className="rounded shadow-sm shadow-black m-auto"
                          />
                        </div>
                        <p className="py-2">
                          The level where the compressor begins working is
                          called the <strong>threshold</strong>—you set it with
                          a dB control to determine the parts of the signal the
                          compressor acts on.
                        </p>
                        <p className="py-2">
                          Set the threshold high and the compressor will only
                          reduce the gain of the most aggressive transients Set
                          the threshold lower and it compresses more of the
                          signal.
                        </p>
                        <p className="py-2">
                          The <strong>ratio</strong> control determines how much
                          the compressor reduces the gain once the signal passes
                          the threshold.
                        </p>
                        <p className="py-2">
                          Ratio is written as a comparison with the unaffected
                          signal. The higher the first number in the ratio, the
                          more intense the compression.
                        </p>
                        {/*  */}
                        <h2 className="text-left text-lg font-display font-bold text-black my-2 mt-5 px-5">
                          Attack & Release
                        </h2>
                        <div className="p-3  lg:bg-cover hover:scale-95 overflow-clip hover:duration-300 hover:ease-in-out">
                          <img
                            src={AttackRelease}
                            alt="AttackRelease"
                            className="rounded shadow-sm shadow-black m-auto"
                          />
                        </div>
                        <p className="py-2">
                          Attack and release determine the timing of the
                          compressor’s action. These are the key controls for
                          making your compression sound musical and pleasing.
                        </p>
                        <p className="py-2">
                          How should the gain reduction behave once the
                          compressor starts acting on the signal? Should it kick
                          in immediately or come on more slowly? Should it stop
                          all at once or gradually let go?
                        </p>
                        <h2 className="text-left text-lg font-display font-bold text-black my-2 mt-5">
                          Advance Compression techniques
                        </h2>
                        <ul className="text-left text-sm md:text-md lg:text-lg font-display text-black px-3 list-inside list-disc">
                          <li className="py-1 text-sm">Serial compression</li>
                          <li className="py-1 text-sm">Parallel compression</li>
                          <li className="py-1 text-sm">
                            Sidechain compression
                          </li>
                        </ul>
                      </ul>
                      <div className="px-4 sm:px-12 md:px-10 py-3">
                        <div className="aspect-w-9 aspect-h-5 md:aspect-w-9 md:aspect-h-4">
                          <iframe
                            className="rounded"
                            src="https://www.youtube.com/embed/o7Lwp2mO3Fo?si=wm9T1KOLm2GvY6ZG"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          ></iframe>
                        </div>
                        <div className="font-display">
                          <a
                            href="https://www.youtube.com/watch?v=o7Lwp2mO3Fo"
                            target="_blank"
                          >
                            <p className="text-xs sm:text-sm text-left hover:text-black/75 hover:underline-offset-2 hover:underline hover:decoration-blue-600 hover:decoration-2">
                              Source -
                              {"  https://www.youtube.com/watch?v=o7Lwp2mO3Fo"}
                            </p>
                          </a>
                        </div>
                      </div>
                    </div>
                  </ul>
                </div>
              </div>
              <div
                id="staticMix"
                className="p-5 px-3 md:px-20 border-black/30 border-b-2"
              >
                <h1 className="text-left text-xl font-display font-bold text-black px-5 border-black border-s-[10px]">
                  Static Mix Technique: How to Start Your Mix With Confidence
                </h1>
                <div className="bg-gray-300/80 rounded my-2">
                  <ul className="text-left text-sm md:text-md lg:text-lg font-display text-black px-5  list-inside">
                    <li className="py-2">
                      Another excellent sound selection tip is to start
                      collecting sounds even before you start working on a
                      track. This is helpful because it allows you to have a
                      bank of sounds to choose from when you are ready to start
                      producing.
                    </li>
                    <div>
                      <h2 className="text-left text-lg font-display font-bold text-black my-2 px-5 border-gray-700 border-s-[8px]">
                        What is the static mix technique?
                      </h2>
                      <div className="p-3  lg:bg-cover hover:scale-95 overflow-clip hover:duration-300 hover:ease-in-out">
                        <img
                          src={StaticMix}
                          alt="StaticMix"
                          className="rounded shadow-sm shadow-black m-auto"
                        />
                      </div>
                      <p className="py-2">
                        A static mix is a rough draft mix made with only the
                        basic DAW mixer tools like the channel faders, aux sends
                        and panning.
                      </p>
                      <p className="py-2">
                        It’s done to balance the levels of all the tracks in a
                        session and put them in a general position before
                        changing any of the sounds with compression, EQ or
                        reverb.
                      </p>
                      <p className="py-2">
                        A static mix helps you hear how each element interacts
                        and make a plan for how to proceed with your process.
                      </p>
                    </div>
                    <div>
                      <h2 className="text-left text-lg font-display font-bold text-black my-2 px-5 border-gray-700 border-s-[8px]">
                        Why start with a static mix?
                      </h2>
                      <p className="py-2">
                        During recording, it’s easy to follow your creative
                        intuition and lay down a lot of material.
                      </p>
                      <p className="py-2">
                        When you start mixing your music, you’ll have to shift
                        gears. Elements that seemed fun and interesting when you
                        recorded them could be creating clutter or contributing
                        to muddy sound.
                      </p>
                      <p className="py-2">
                        Creating a static mix will help you find the focal
                        points of your track and build your session to support
                        them.
                      </p>
                      <p className="py-2">
                        Not only that, it will make your compression and EQ
                        decisions easier. You may not have to make changes to
                        the dynamics and frequency balance of each track.
                      </p>
                      <p className="py-2">
                        Finally, it will help you understand when to use mix
                        automation. If it’s clear from setting the fader level
                        and pan position that your sounds will require more than
                        gentle sculpting to fit, automation can come to the
                        rescue.
                      </p>
                    </div>
                    <div>
                      <h2 className="text-left text-lg font-display font-bold text-black my-2 px-5 border-gray-700 border-s-[8px]">
                        How to build a static mix
                      </h2>
                      <ul className="text-left text-sm md:text-md lg:text-lg font-display text-black px-5  list-inside list-decimal">
                        <li className="text-left text-lg font-display font-bold text-black my-2">
                          Choose your loudest elements
                        </li>
                        <p className="py-2">
                          In most modern mixes these will be kick, snare and
                          vocal tracks. Start your static mix by setting each of
                          these faders to unity and listen to how they interact.
                        </p>
                        <p className="py-2">
                          If you’ve paid attention to gain staging throughout
                          your process you should have ample headroom. In that
                          case you can leave all three at 0 dBFS if needed.
                        </p>
                        <p className="py-2">
                          But depending on how they fit together, you may have
                          to turn one or the other down slightly.
                        </p>
                        <li className="text-left text-lg font-display font-bold text-black my-2">
                          Build your stereo field
                        </li>
                        <p className="py-2">
                          As you add the rest of your mix in, start
                          experimenting with stereo positions.
                        </p>
                        <p className="py-2">
                          There’s no rules, but in general the lead vocal track,
                          kick, snare and bass should occupy the center of the
                          mix
                        </p>
                        <p className="py-2">
                          Any tracks recorded in stereo should be left that way,
                          but feel free to experiment with the balance between
                          left and right if needed.
                        </p>
                        <p className="py-2">
                          The remaining mono tracks should be panned across the
                          mix to taste. Just make sure not to neglect the
                          extreme left and right of the spectrum.
                        </p>
                        <p className="py-2">
                          A wide sounding mix always contains some material at
                          the far edges as well as throughout the stereo space.
                        </p>
                        <div className="px-6 sm:px-14 md:px-12 py-3">
                          <div className="aspect-w-9 aspect-h-5 md:aspect-w-9 md:aspect-h-4">
                            <iframe
                              className="rounded"
                              src="https://www.youtube.com/embed/Ysw-ZrcP_00?si=-rQvC8j3eM2OXXGR"
                              title="YouTube video player"
                              frameborder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            ></iframe>
                          </div>
                          <div className="font-display">
                            <a
                              href="https://www.youtube.com/watch?v=Ysw-ZrcP_00"
                              target="_blank"
                            >
                              <p className="text-xs sm:text-sm text-left hover:text-black/50 hover:underline-offset-2 hover:underline hover:decoration-blue-600 hover:decoration-2">
                                Source -
                                {
                                  "   https://www.youtube.com/watch?v=Ysw-ZrcP_00"
                                }
                              </p>
                            </a>
                          </div>
                        </div>
                        <li className="text-left text-lg font-display font-bold text-black my-2">
                          Balance the levels
                        </li>
                        <p className="py-2">
                          With most of the elements in place, you’ll get a sense
                          for how each track needs to be adjusted.
                        </p>
                        <p className="py-2">
                          Here’s where you need to use your ears and balance
                          each element so it speaks clearly in the mix.
                        </p>
                        <p className="py-2">
                          There’s no right or wrong here, but you may need to
                          make several passes to get the balance as close as
                          possible.
                        </p>
                        <p className="py-2">
                          If something is taking up too much space, decrease its
                          level fader or pan it away from conflicts with main
                          elements.
                        </p>
                        <div className="px-6 sm:px-14 md:px-12 py-3">
                          <div className="aspect-w-9 aspect-h-5 md:aspect-w-9 md:aspect-h-4">
                            <iframe
                              className="rounded"
                              src="https://www.youtube.com/embed/yRzMby4PXzc?si=5_bNLaagC3UUj3qL"
                              title="YouTube video player"
                              frameborder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            ></iframe>
                          </div>
                          <div className="font-display">
                            <a
                              href="https://www.youtube.com/watch?v=yRzMby4PXzc"
                              target="_blank"
                            >
                              <p className="text-xs sm:text-sm text-left hover:text-black/50 hover:underline-offset-2 hover:underline hover:decoration-blue-600 hover:decoration-2">
                                Source -
                                {
                                  "   https://www.youtube.com/watch?v=yRzMby4PXzc"
                                }
                              </p>
                            </a>
                          </div>
                        </div>
                      </ul>
                    </div>
                  </ul>
                </div>
              </div>
              <div id="headroom" className="p-5 px-3 md:px-20">
                <h1 className="text-left text-xl font-display font-bold text-black px-5 border-black border-s-[10px]">
                  Headroom in Audio
                </h1>
                <div className="bg-gray-300/80 rounded my-2">
                  <ul className="text-left text-sm md:text-md lg:text-lg font-display text-black px-5  list-inside">
                    <li className="py-2">
                      It comes into play whenever you record tracks, add plugins
                      or export files with your DAW.
                    </li>
                    <div>
                      <h2 className="text-left text-lg font-display font-bold text-black my-2 px-5 border-gray-700 border-s-[8px]">
                        What is headroom?
                      </h2>
                      <div className="px-6 sm:px-14 md:px-12 py-3">
                        <div className="aspect-w-9 aspect-h-5 md:aspect-w-9 md:aspect-h-4">
                          <iframe
                            className="rounded"
                            src="https://www.youtube.com/embed/0FG_7QSUf68?si=ByAQdlKYJEGGC3TC"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          ></iframe>
                        </div>
                      </div>
                      <p className="py-2">
                        Every recording medium has a limit for how loud the
                        signal can be. When you go over that limit, the tops of
                        your signal’s waveform will get abruptly cut off.
                      </p>
                      <p className="py-2">
                        Any audio information that passes above the limit is
                        thrown away, causing harsh distortion and unpleasant
                        artifacts.
                      </p>
                      <p className="py-2">
                        This effect is called clipping, and it’s the worst
                        consequence of bad headroom. In your DAW, the clipping
                        point is 0 dBFS (or decibels from full scale) on your
                        channel meters.
                      </p>
                      <p className="py-2">
                        The amount of space in between the signal and the
                        clipping point is the headroom. It’s also measured in
                        dBFS.
                      </p>
                    </div>
                    <div>
                      <h2 className="text-left text-lg font-display font-bold text-black my-2 px-5 border-gray-700 border-s-[8px]">
                        Why is headroom important?
                      </h2>
                      <p className="py-2">
                        Keeping good headroom is essential for getting the most
                        out of your mix. When you’re busy making music it’s easy
                        to keep adding tracks to a session.
                      </p>
                      <p className="py-2">
                        But all those combining signals build up at your master
                        bus. Eventually, your mix could come close to the limit.
                      </p>
                      <p className="py-2">
                        Even if you don’t get all the way to clipping, you’ll
                        start to notice the effects of poor headroom if you
                        listen closely.
                      </p>
                      <p className="py-2">
                        You might find that all you need to do to increase
                        clarity, separation and width is to pull down your
                        faders or keep your tracking levels in check.
                      </p>
                      <p className="py-2">
                        In fact, the best approach is to maintain good gain
                        staging at every point in your workflow
                      </p>
                    </div>
                    <div>
                      <h2 className="text-left text-lg font-display font-bold text-black my-2 px-5 border-gray-700 border-s-[8px]">
                        How do you create headroom in a mix?
                      </h2>
                      {/* <ul className="text-left text-xs md:text-sm lg:text-md font-display text-black px-5  list-inside list-decimal"> */}
                      <h1 className="text-left text-base font-display font-bold text-black  py-2">
                        All you have to do to get healthy levels in your mix is
                        leave enough space for dynamic sounds to breathe.
                      </h1>
                      <p className="py-2">
                        There are two important measurement styles to know when
                        it comes to loudness—<strong>peak</strong> and{" "}
                        <strong>RMS</strong>.
                      </p>
                      <p className="py-2">
                        Peak level measures the intensity of the loudest single
                        moment in an audio signal, while RMS takes an average of
                        the intensity over time.
                      </p>
                      <p className="py-2">
                        Dedicated audio meter plugins or the channel meters in
                        your DAW mixer generally display both figures.
                      </p>
                      <p className="py-2">
                        Peak levels are shown with an indicator light that
                        persists at the highest dB value a signal reaches over
                        time.
                      </p>
                      <div className="p-3  lg:bg-cover hover:scale-95 overflow-clip hover:duration-300 hover:ease-in-out">
                        <img
                          src={Peak}
                          alt="Peak"
                          className="rounded shadow-sm shadow-black m-auto"
                        />
                      </div>
                      <p className="py-2">
                        RMS levels move and breathe with a solid bar of lights
                        indicating the average signal level.
                      </p>
                      <div className="p-3  lg:bg-cover hover:scale-95 overflow-clip hover:duration-300 hover:ease-in-out">
                        <img
                          src={RMS}
                          alt="RMS"
                          className="rounded shadow-sm shadow-black m-auto"
                        />
                      </div>
                      <p className="py-2">
                        Watching both is the key to good headroom. You should
                        aim to have the peak levels of your sound hitting around
                        -9 or -10 dBFS at the loudest with the average hovering
                        around -18 dBFS.
                      </p>
                      {/* </ul> */}
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
export default Mixing;
