import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./node_modules/flowbite-react/**/*.js', './app/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        gray: {
          100: '#666666',
        },
        primary: '#515A6E',
        black: {
          100: '#111111',
        },
      },
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
      },
      fontWeight: {
        thin: '300',
        regular: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('flowbite/plugin')],
  darkMode: 'class',
};

export default config;
