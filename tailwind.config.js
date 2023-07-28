/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: {
          DEFAULT: '#242424',
          dark: '#333333',
          light: '#494949',
        },
        accent: {
          DEFAULT: '#DCEDF3',
        },
        error: {
          DEFAULT: '#F7AC85',
        },
        warning: {
          DEFAULT: '#FFE9B3',
        },
        success: {
          DEFAULT: '#EDFEBE',
        }
      }
    },
  },
  plugins: [],
}
