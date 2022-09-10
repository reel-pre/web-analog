/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        analog: "20% 60% 20%",
        analogDesktop: "20% 20% 20%",
      },
      gridTemplateRows: {
        analog: "20% 60% 20%",
      },
    },
  },
  plugins: [],
};
