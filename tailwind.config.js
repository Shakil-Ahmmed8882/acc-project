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
      backgroundImage: {
        "gold-gradient":
          "linear-gradient(180deg, #FFD700 -71%, #AC7C00 100%)",
      },
      colors: {
        // updated color name
        "background-dark": "#222222" /* Dark Background */,
        "light-text": "#FAFAFA" /* Light White Text */,
        "pale-gold": "#f9f295" /* Pale Gold */,
        "standard-gold": "#ffd700" /* Standard Gold */,
        "deep-gold": "#ac7c00" /* Deep Gold */,
        "soft-gold": "#faf398" /* Soft Gold */,
        "rich-gold": "#e0aa3e" /* Rich Gold */,
        "dark-gold-border": "#b88a44" /* Dark Gold Border */,
        "dark-slate-gray": "#414141" /* Dark Slate Gray */,
        
      },
      transform: ["hover", "focus"],
      scale: ["hover", "focus"],
      fontFamily: {
        riviera: ["RivieraNightsTrial", "sans-serif"],
        cailyne: ["Cailyne", "sans-serif"],
        calvinoTrial: ["CalvinoTrial", "sans-serif"],
        castoroTitling: ['"Castoro Titling"', "serif"],
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
