const { addDynamicIconSelectors } = require("@iconify/tailwind");
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  plugins: [require("daisyui"), addDynamicIconSelectors()],
  theme: {
    extend: {
      fontFamily: {
        "young-serif": ['"Young Serif"', "serif"],
      },
      colors: {
        primary: "#003349",
        "brown-500": "#8b6e4e",
        "custom-blue": "#2A9FF3",
        expiring30: "#FDE933",
        expiring60: "#2655FA",
        expiring90: "#30D507",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#003349",
          secondary: "#124156",
          accent: "#7E7E7E",
          neutral: "#85714D",
          "base-100": "#FFFFFF",
          shadow: "#E8F1FF",
          info: "#2A9FF3",
          warning: "#00ff00",
          error: "#FF0404",
        },
      },
    ],
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
};
