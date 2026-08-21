import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        pine: {
          deep: '#14281E',
          mid: '#1B382B',
          surface: '#244636',
        },
        sage: {
          accent: '#8DA792',
          border: '#4A6B56',
          soft: '#DDE7E0',
          light: '#E8EFE9',
        },
        terracotta: {
          DEFAULT: '#D9683B',
          hover: '#C5562B',
        },
      },
      fontFamily: {
        display: ['"DM Serif Display"', 'serif'],
        heading: ['"DM Sans"', 'sans-serif'],
        sans: ['"Open Sans"', '"Roboto"', 'sans-serif'],
        arabic: ['"Amiri"', 'serif'],
      },
      maxWidth: {
        academic: '1300px',
      },
    },
  },
  plugins: [],
};

export default config;