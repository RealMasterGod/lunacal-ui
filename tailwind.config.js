/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        hrShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.33)',
        rightShadow: '5.67px 5.67px 3.78px 0px rgba(0, 0, 0, 0.4)',
        myShadow: ['13.49px 16.87px 37.47px 8.43px #0A0A0A', '-8.43px -16.87px 50.6px -16.87px #485B71'],
        imageBtnShadow: ['7px 7px 7px 0px #222', '-6px -6px 10px -5px #707070','1px 2px 2px 1px #707070 inset' ],
        arrowShadow: ['0px 0px 30px 9px #ffffff2f,0 0 30px 15px #0000004f'],
      },
    },
  },
  plugins: [],
}

