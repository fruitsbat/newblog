/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    fontFamily: {
      rammetto: ["RammettoOne"],
      macondo: ["Macondo"],
      sans: ["Atkinson"],
      bold: ["Atkinson"],
      italic: ["Atkinson"],
      syncopate: ["Syncopate"],
      pattaya: ["Pattaya"],
      gasoekone: ["GasoekOne"],
    },
    extend: {
      backgroundImage: {
        "dot-texture": "url('/image/texture.webp')",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/container-queries"),
    require("daisyui"),
  ],
  daisyui: {
    lightTheme: "post it",
    darkTheme: "sleepy",
    themes: [
      {
        "post-it": {
          primary: "#EF8FCF",
          secondary: "#8FEFBD",
          accent: "#5FE1E8",
          neutral: "#1A0E04",
          "base-100": "#FDF6ED",
        },
      },
      {
        sleepy: {
          secondary: "#39576a",
          primary: "#cacb9f",
          accent: "#8775b4",
          neutral: "#f0f1e5",
          "base-100": "#1b1628",
          "base-200": "#2c2441",
          "base-300": "#3d315b",
        },
      },
      {
        magic: {
          "base-100": "#100b27",
          "base-200": "#331541",
          "base-300": "#53315a",
          primary: "#c9dab8",
          secondary: "#ffddcb",
          accent: "#f3b5a8",
          neutral: "#162841",
        },
      },
    ],
  },
};
