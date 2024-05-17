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
      },
      transform: ["hover", "focus"],
      scale: ["hover", "focus"],
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
