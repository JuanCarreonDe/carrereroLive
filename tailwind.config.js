/** @type {import('tailwindcss').Config} */
export default {
  content: ["{html}./src/**/*.{html,ts,tsx}"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        inter:['Inter', 'sans-serif']
      },
      colors:{
        gray: '#171717',
        secondary: '#D3D3D3'
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.gold': {
          'background-image': 'linear-gradient(to right, #754E16, #FFF88C, #754E16)',
          'background-clip': 'text',
          '-webkit-background-clip': 'text',
          'color': 'transparent',
          'font-weight': 'bold',
          'font-size': '32px'
        },
      });
    },
  ],
}