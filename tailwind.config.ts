import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // These match the 'shadcn' variables in your page.tsx
        background: "#ffffff",
        foreground: "#171717",
        border: "#e5e5e5",
        muted: {
          DEFAULT: "#f5f5f5",
          foreground: "#737373",
        },
        secondary: {
          DEFAULT: "#fafafa",
          foreground: "#171717",
        },
      },
      fontFamily: {
        // This allows you to use 'font-serif' for that elegant Lakunle look
        serif: ['var(--font-serif)', 'serif'],
        sans: ['var(--font-sans)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;