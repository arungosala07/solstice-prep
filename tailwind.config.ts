import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
      },
      colors: {
        cream: "#FAFAF7",
        "cream-subtle": "#F5F5F0",
        charcoal: "#1C1C1E",
        amber: {
          DEFAULT: "#F5A623",
          50: "#FEF9EC",
          100: "#FDF0CC",
          200: "#FAE099",
          300: "#F8CF66",
          400: "#F7BF33",
          500: "#F5A623",
          600: "#E08A05",
          700: "#A86604",
          800: "#704303",
          900: "#382102",
        },
        sunrise: "#FF6B35",
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
        "pulse-glow": "pulseGlow 2.5s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(245,166,35,0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(245,166,35,0.6)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
