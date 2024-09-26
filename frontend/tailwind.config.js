/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".scrollbar-hide": {
          /* For Webkit-based browsers (Chrome, Safari, etc.) */
          "&::-webkit-scrollbar": {
            display: "none",
          },
          /* For IE and Edge */
          "-ms-overflow-style": "none",
          /* For Firefox */
          "scrollbar-width": "none",
        },
      });
    },
  ],
};
