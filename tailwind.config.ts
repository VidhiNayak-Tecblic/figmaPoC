// tailwind.config.ts

import type { Config } from 'tailwindcss';
// import colors from 'tailwindcss/colors';

// const defaultTheme = require('tailwindcss/defaultTheme');

const config: Config = {
  content: ['./node_modules/flowbite-react/**/*.js', './app/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx,md,mdx}'],
  theme: {
    extend: {
      styles: {
        // Add custom styles for the focus outline
        focusOutline: {
          '&:focus': {
            outline: 'none',
            boxShadow: 'none',
          },
        },
      },
      colors: {
        black: {
          50: '#F0F0F0',
          100: '#D9D9D9',
          200: '#BFBFBF',
          300: '#A6A6A6',
          400: '#8C8C8C',
          500: '#737373',
          600: '#595959',
          700: '#404040',
          800: '#262626',
          900: '#000',
        },
        primary: {
          50: '#F0F5FF',
          100: '#C2D4FF',
          200: '#94B2FF',
          300: '#667FFF',
          400: '#3960FF',
          500: '#0B63E5',
          600: '#094ED4',
          700: '#073BB3',
          800: '#052A8F',
          900: '#03216F',
        },
        secondary: {
          50: '#FFFAEB',
          100: '#FFEEC2',
          200: '#FFDF8D',
          300: '#FFD147',
          400: '#FFC424',
          500: '#D6AB25',
          600: '#B08820',
          700: '#8E661B',
          800: '#754D18',
          900: '#5C3D16',
        },
        tertiary: {
          50: '#F4F1FF',
          100: '#E4D8FF',
          200: '#D2B5FF',
          300: '#C08FFF',
          400: '#A96AFF',
          500: '#7534FF',
          600: '#5D26E6',
          700: '#481DCC',
          800: '#3917AD',
          900: '#2F138F',
        },
        success: {
          50: '#EAF8E0',
          100: '#C7EDB3',
          200: '#A3E084',
          300: '#7FD357',
          400: '#5FC33A',
          500: '#0F9918',
          600: '#0E8914',
          700: '#0C7410',
          800: '#0A600C',
          900: '#084F09',
        },
        warning: {
          50: '#FFF7E2',
          100: '#FFE6B2',
          200: '#FFD180',
          300: '#FFB847',
          400: '#FFA124',
          500: '#FF8800',
          600: '#E67600',
          700: '#C66300',
          800: '#A65200',
          900: '#8A4400',
        },
        error: {
          50: '#FDE8E8',
          100: '#F8C1C1',
          200: '#F29292',
          300: '#E76464',
          400: '#E03D3D',
          500: '#E54545',
          600: '#D03838',
          700: '#B82D2D',
          800: '#9C2424',
          900: '#841D1D',
        },
        typography: {
          50: '#F5F5F6',
          100: '#EBEBEC',
          200: '#C9C9CC',
          300: '#A7A7AD',
          400: '#63636E',
          500: '#555770',
          600: '#474B5C',
          700: '#383C4E',
          800: '#2A2E40',
          900: '#1C2032',
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
