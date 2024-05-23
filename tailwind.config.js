/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "hover-txt-clr": "#FFD700",
        "main-bg-clr": "#222222",
        "light-white-clr": "#FAFAFA;",
        gold2: "#f9f295",
        gold: "#ffd700",
        darkGold: "#ac7c00",
        lightGold: "#faf398",
        mediumGold: "#e0aa3e",
        darkGoldBorder: "#b88a44",
        darkslategray: "#414141",
      },
      transform: ["hover", "focus"],
      scale: ["hover", "focus"],
      fontFamily: {
        riviera: ["RivieraNightsTrial", "sans-serif"],
        cailyne: ["Cailyne", "sans-serif"],
        calvinoTrial: ["CalvinoTrial", "sans-serif"],
      },
      fontWeight: {
        ultralight: 200,
        normal: 400,
        medium: 500,
        bold: 700,
        black: 900,
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".hover-grow": {
          transition: "transform 0.3s",
          "&:hover": {
            transform: "scale(1.1)",
          },
        },
      });
    },
  ],
};
