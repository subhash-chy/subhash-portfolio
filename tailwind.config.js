const colors = require("./constants/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        accent: colors.accent,
        accent_dark: colors.accent_dark,
        secondary: colors.secondary,
        secondary_dark: colors.secondary_dark,
        tertiary: colors.tertiary,
        tertiary_dark: colors.tertiary_dark,
      },
      boxShadow: {
        "glow-accent": `0 0 60px ${colors.accent_dark}`,
      },
      // #ff7900
    },
  },
  plugins: [],
};
