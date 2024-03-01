import React from "react";
import genre from "../../source/sound_selection.jpg";
import catalog from "../../source/sound_selection_2.jpg";
import { motion as m } from "framer-motion";

function SoundSelection() {
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
        <div className=" flex justify-center items-center h-72 lg:h-screen bg-ss_head_pic bg-repeat-round">
          <h1 className=" text-white text-4xl  md:text-4xl lg:text-6xl font-semibold font-head_font2 px-[3px]">
            SOUND SELECTION
          </h1>
        </div>
        <div className="">
          <div className="border-black/30 border-b-2">
            <div className="md:px-10 lg:px-36 py-1 bg-white/90 md:rounded-b px-3">
              <div className="p-5 px-3 md:px-20 border-black/30 border-b-2">
                <h1 className="text-left text-2xl md:text-3xl lg:text-4xl font-display2 font-bold px-5 py-3">
                  Sound selection secrets: How to choose the right sounds
                </h1>
                <h6 className="text-left font-display2 font-semibold px-5 py-3">
                  Knowing which sounds work well together and when to use them
                  is essential to producing good-sounding music. So here are our
                  best sound selection tips.
                </h6>

                <p className="text-left text-sm md:text-md lg:text-lg font-display text-black px-5 py-3 ">
                  One of the most important aspects of producing great-sounding
                  music is selecting the right sounds. If you choose sounds that
                  don’t work well together, your music will not sound good, no
                  matter how much work you put into that project.
                </p>
                <h1 className="text-left text-xl font-display font-bold text-black px-5 border-black border-s-[10px]">
                  Stick to a genre or mood.
                </h1>
                <div className="bg-gray-300/80 rounded my-2">
                  <ul className="text-left text-sm md:text-md lg:text-lg font-display text-black px-3  list-inside">
                    <li className="py-2">
                      When selecting sounds for your track, it is essential to
                      remember the overall sound you are trying to achieve.
                      Every sound that you choose should fit into that overall
                      soundscape. If you are creating a track with a specific
                      mood or emotion in mind, be sure to select sounds that
                      will support that mood.
                    </li>
                    <li className="py-2">
                      For example, if you are trying to produce a more mellow
                      and chill track, using harsh and aggressive drums on your
                      soft and lush synths probably isn’t the best combination.
                      In this case, try using drums that have a softer sound.
                      This will help create a better sound overall and prevent
                      your track from sounding jarring or out of place.
                    </li>
                    <li className="py-2">
                      We are not trying to say that you should not be creative.
                      Mixing and combining genres and moods is one of the most
                      effective ways for musicians to find their own sound.
                      However, you can very quickly go overboard with it. It’s
                      not difficult to create something that sounds off and out
                      of place. However, it’s incredibly challenging to create
                      something that sounds new, fresh, and unique just by
                      combining genres.
                    </li>
                  </ul>
                  <div className="p-3  lg:bg-cover hover:scale-95 overflow-clip hover:duration-300 hover:ease-in-out">
                    <img
                      src={genre}
                      alt=""
                      className="rounded shadow-xs shadow-black m-auto"
                    />
                  </div>
                </div>
              </div>
              <div className="p-5 px-3 md:px-20 border-black/30 border-b-2">
                <h1 className="text-left text-xl font-display font-bold text-black px-5 border-black border-s-[10px]">
                  Good sounds don’t always work together.
                </h1>
                <div className="bg-gray-300/80 rounded my-2">
                  <ul className="text-left text-sm md:text-md lg:text-lg font-display text-black px-3  list-inside">
                    <li className="py-2">
                      One simple mistake beginners tend to make is throwing
                      sounds together that they think sound good on their own.
                      So you may have a snare that you find really good, then a
                      kick drum that sounds nice and punchy, and perhaps a
                      favorite synth lead, and so on. They may sound fantastic,
                      but it doesn’t mean they’ll automatically work great
                      together.
                    </li>
                    <li className="py-2">
                      Imagine you combine the best Progressive House kick with
                      the best Dubstep snare, the best Trance bass, the best
                      Hip-Hop hi-hats, and the best Reggae vocals. They may be
                      the “best” sounds in their respective categories, but I
                      guarantee it’ll sound all over the place.
                    </li>
                    <li className="py-2">
                      If you have a folder with your favorite drums and synth
                      presets, it’s helpful to sort those sounds by genre or
                      mood. This is practical, especially for beginners, since
                      you limit your sound selection options and narrow them
                      down to specific categories. Doing this makes it harder
                      for you to make bad sound selection choices.
                    </li>
                    <li className="py-2">
                      As you become more experienced, you’ll develop a better
                      ear for what works well together and what doesn’t.
                      However, it’s still a good idea to keep things organized
                      so that you can quickly find the right sounds when you
                      need them.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="p-5 px-3 md:px-20 border-black/30 border-b-2">
                <h1 className="text-left text-xl font-display font-bold text-black px-5 border-black border-s-[10px]">
                  Collect sounds before you start producing.
                </h1>
                <div className="bg-gray-300/80 rounded my-2">
                  <ul className="text-left text-sm md:text-md lg:text-lg font-display text-black px-3  list-inside">
                    <li className="py-2">
                      Another excellent sound selection tip is to start
                      collecting sounds even before you start working on a
                      track. This is helpful because it allows you to have a
                      bank of sounds to choose from when you are ready to start
                      producing.
                    </li>
                    <li className="py-2">
                      There are many ways to collect sounds. You can buy sound
                      packs, download free ones, or even create your own sounds.
                      You can find many great free sound packs online if you’re
                      on a budget or can’t spend any money at all.
                    </li>
                    <li className="py-2">
                      As a beginner, getting your hands on genre-based packs is
                      crucial. This will give you a great foundation to start
                      with and allow you to develop your sound selection skills
                      since you’ll better understand what makes a sound fit into
                      a particular genre, mood, or vibe.
                    </li>
                  </ul>
                  <div className="p-3  lg:bg-cover hover:scale-95 overflow-clip hover:duration-300 hover:ease-in-out ">
                    <img
                      src={catalog}
                      alt=""
                      className="rounded shadow-xs shadow-black m-auto"
                    />
                  </div>
                </div>
              </div>

              <div className="p-5 px-3 md:px-20">
                <h1 className="text-left text-xl font-display font-bold text-black px-5 border-black border-s-[10px]">
                  Get inspired by other artists’ sound selection choices.
                </h1>
                <div className="bg-gray-300/80 rounded my-2">
                  <ul className="text-left text-sm md:text-md lg:text-lg font-display text-black px-3  list-inside">
                    <li className="py-2">
                      Don’t be afraid to get inspired by and “steal” the types
                      of sounds other artists use. There’s nothing wrong with
                      that. In fact, it’s one of the best ways to learn and
                      improve your sound selection skills.
                    </li>
                    <li className="py-2">
                      Listen to tracks in your favorite genre and try to
                      identify the different sounds being used. Then, see if you
                      can find similar sounds and add them to your library or
                      track. Getting really deep into the individual layers of
                      another song you enjoy is a great way to get new ideas for
                      your own productions.
                    </li>
                    <li className="py-2">
                      You don’t need to reinvent the wheel with every new song
                      you start and put pressure on yourself by trying to create
                      something new and fresh that no one has ever heard before.
                      Sometimes, if you just want to create a Skrillex-style
                      Future Bass banger, just have a look at one of his big
                      Future Bass tracks and use it as a reference for your own
                      sound selection.
                    </li>
                  </ul>
                  <div className="px-6 sm:px-14 md:px-12 py-3">
                    <div className="aspect-w-9 aspect-h-5 md:aspect-w-9 md:aspect-h-4">
                      <iframe
                        className="rounded"
                        src="https://www.youtube.com/embed/mkOWxZLy6eU?si=Pmqwa63rpvjTWYFH"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                    <div className="font-display">
                      <a
                        href="https://www.youtube.com/watch?v=mkOWxZLy6eU"
                        target="_blank"
                      >
                        <p className="text-xs sm:text-sm text-left hover:text-black/75 hover:underline-offset-2 hover:underline hover:decoration-blue-600 hover:decoration-2">
                          Source -
                          {"   https://www.youtube.com/watch?v=mkOWxZLy6eU"}
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </m.div>
  );
}
export default SoundSelection;
