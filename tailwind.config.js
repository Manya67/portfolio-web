/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        noto: ["Noto Sans Linear A", "sans-serif"],
        notosans: ["Noto Sans Kawi", "sans-serif"],
      },
    },
  },
  plugins: [],
};
