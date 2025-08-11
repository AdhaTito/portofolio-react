/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        mainColor: "#FF7A00",
        secondaryColor: "#3F4F6F",
        ascentColor: "#F09C4E",
      },
      fontFamily: {
        poppins: ["poppins"],
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
};
