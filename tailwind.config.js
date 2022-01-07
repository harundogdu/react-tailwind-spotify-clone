module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brandColor: "#1db954",
        bgBase: "#1a1a1a",
        bgSideBar: "#121212",
        bgLink: "#282828",
        bgText: "#b3b3b3",
        bgFooter: "#181818",
        bgGradient: "#414341",
        bgSettingsHover: "#ffffff1a",
        bgHorizontalCard: "#ffffff63",
        bgShadow: "#333",
        bgNavbarActive: "#2D0003",
        playerNormal : "#535353",
        playerHover : "#1db954",
      },
      spacing: {
        songRem: "9.375rem",
        fullSizeForSideBar: "87vh",
      },
      boxShadow: {
        "spotify": "0 2px 4px 0 rgb(0 0 0 / 20%)",
      }
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
