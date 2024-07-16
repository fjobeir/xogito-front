import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.tsx"],
  plugins: [],
  theme: {
    extend: {
      colors: {
        primary: '#eeece2'
      }
    },
  },
} satisfies Config;
