/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      display: ["Roboto Mono", "monospace"],
      display1: ["Raleway Dots", "cursive"],
      display2: ["Space Mono", "monospace"],
      head_font: ["Tilt Prism", "cursive"],
      head_font2: ["Rowdies", "cursive"],
    },
    extend: {
      aspectRatio: {
        "4/3": "4/3",
      },
      backgroundImage: {
        "bg-img": "url('/src/source/stacked-peaks-haikei.svg')",
        "sd-img": "url('/src/source/Sound_design1.svg')",
        "sd-img2": "url('/src/source/flip_head_svg.png')",
        "sd-img3": "url('/src/source/Sound_design2.svg')",
        wave: "url('/src/source/wave2.png')",
        "wave-1": "url('/src/source/wave3.png')",
        "mix-wave1": "url('/src/source/mix-wave1.svg')",
        "mix-wave2": "url('/src/source/mix-wave2.svg')",
        "mix-wave3": "url('/src/source/mix-wave3.svg')",
        musicbg1: "url('/src/source/musicbg.svg')",
        mixblob1: "url('/src/source/mixblob1.png')",
        musicbg2: "url('/src/source/musicbg2.png')",
        "musicbg2-svg": "url('/src/source/musicbg2.svg')",
        musicbg3: "url('/src/source/musicbg3.png')",
        "musicbg3-svg": "url('/src/source/musicbg3.svg')",
        "foot-pic": "url('/src/source/Home-Footer-p-1600.jpg')",
        ss_head_pic: "url('/src/source/sound_selection_head_pic.jpg')",
        sd_head_pic: "url('/src/source/SD_head.jpg')",
        mixing: "url('/src/source/mixing.jpg')",
        musicTheory: "url('/src/source/MT_head.jpg')",
      },
    },
  },
  darkMode: "class",
  plugins: [require("@tailwindcss/aspect-ratio")],
};
