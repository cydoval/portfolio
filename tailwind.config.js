import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["fira_reg", "Arial", "sans-serif"],
        light: ["fira_light", "Arial", "sans-serif"],
        medium: ["fira_bold", "Arial", "sans-serif"],
      },
      boxShadow: {
        soft: "0 24px 60px rgba(33, 37, 45, 0.08)",
      },
    },
  },
  daisyui: {
    themes: [
      {
        caldoval: {
          primary: "#9C3F00",
          secondary: "#C99700",
          accent: "#22274D",
          neutral: "#21252D",
          "base-100": "#F8F9FA",
          "base-200": "#EEF1F4",
          "base-300": "#D9DEE5",
          "base-content": "#21252D",
          info: "#2563EB",
          success: "#15803D",
          warning: "#C99700",
          error: "#B91C1C",
        },
      },
    ],
  },
  plugins: [daisyui],
};
