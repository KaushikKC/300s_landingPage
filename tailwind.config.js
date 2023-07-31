/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        'fade-in-down': {
          '0%': {
            transform: "scale(0.5)", opacity: 0, filter: "blur(10px)"
           
          },
          '100%': {
            opacity: '1',
           
          },
        },
        'fade-in': {
          '0%': {
            opacity: '0',
          },
          '50%': {
            opacity: '0.5',
          },
          '100%': {
            opacity: '1',
          },
        },
        'drop-down': {
          '0%' : {transform: 'translateY(-200px) scaleY(0.9)', opacity: '0'},
  '5%': {opacity: '.7'},
  '50%' :{transform: 'translateY(0px) scaleY(1)', opacity: '1'},
  '65%': {transform: 'translateY(-17px) scaleY(.9)', opacity: '1'},
  '75%' :{transform: 'translateY(-22px) scaleY(.9)', opacity: '1'},
  '100%' :{transform: 'translateY(0px) scaleY(1)', opacity: '1'}
        }
      }
    },
  },
  plugins: [],
}
