/** @type {import('tailwindcss').Config} */
module.exports = {
  content:  [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    backgroundColor:{
      'primary':'#19191F'
    },
    screens:{
      sm:"740px",
      md:"920px",
      lg:"1024px",
    },
    color:{
      white:"#ffffff",
      descGray:"#DFD8D8",
      primaryGra:"linear-gradient(90deg, rgba(31,162,255,1), rgba(18,216,250,1), rgba(166,255,203,1))",
      },
  plugins: [],
}

}