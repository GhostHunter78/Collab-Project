/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["FiraGO", "sans-serif"],
    },
    extend: {
      colors: {
        bgHeader: "#FFF",
        bgBlue: "#5D37F3",
        background: "#F3F2FA",
        bgMarket: "rgba(255, 184, 47, 0.08)",
        marketColor: "#D6961C",
        bgApp: "rgba(28, 214, 125, 0.08)",
        appColor: "#15C972",
        bgAi: "rgba(177, 28, 214, 0.08)",
        aiColor: "#B71FDD",
        bgUi: "rgba(250, 87, 87, 0.08)",
        uiColor: "#DC2828",
        bgResearch: "rgba(112, 207, 37, 0.08)",
        researchColor: "#60BE16",
        bgFigma: "rgba(8, 210, 174, 0.08)",
        figmaColor: "#1AC7A8",
      },
    },
  },
  plugins: [],
};
