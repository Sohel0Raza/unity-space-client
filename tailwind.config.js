/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#c006c0",

          secondary: "#1f3a41",

          accent: "#00ffff",

          neutral: "#ff00ff",

          base: "#E4E6E9",

          info: "#E4E6E9",

          success: "#00ff00",

          warning: "#00ff00",

          error: "#ff0000",
        },
      },
    ],
  },
  plugins: [daisyui],
};
