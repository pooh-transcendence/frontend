/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dimgray: "#555",
        brown: "#a83b3b",
        midnightblue: "#182c92",
        slateblue: "#7649bb",
        blueviolet: "#9747ff",
        gray: "#fdfdfd",
        white: "#fff",
        ghostwhite: "#eff1f7",
      },
      fontFamily: {
        "inria-sans": "'Inria Sans'",
      },
      borderRadius: {
        "3xs": "10px",
      },
    },
    fontSize: {
      base: "1rem",
      mini: "0.94rem",
      "13xl": "2rem",
      xl: "1.25rem",
      "21xl": "2.5rem",
      sm: "0.88rem",
      "9xl": "1.75rem",
      xs: "0.75rem",
      "5xl": "1.5rem",
      smi: "0.81rem",
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
}
