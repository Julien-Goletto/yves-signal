/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // './pages/**/*.{js,ts,jsx,tsx,mdx}',
    // './components/**/*.{js,ts,jsx,tsx,mdx}',
    // './utils/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        },
      colors: {
        'primary-dark': '#062347',
        'primary-regular': '#0F478A',
        'primary-medium': '#2677D9',
        'primary-light': '#85AEE0',
        'secondary-dark': '#350137',
        'secondary-regular': '#840F8A',
        'secondary-medium': '#D126D9',
        'secondary-light': '#DC85E0',
        'white': '#F1F2F4',
        'gray': '#C4CBD4',
        'black': '#011936',
        'movies': '#FC9A3F',
        'videogames': '#6AE692',
        'books': '#FDFD96',
        'series': '#FF6961',
      },
      screens: {
        'xs': '450px',
      },
    },
  },
  plugins: [],
};
