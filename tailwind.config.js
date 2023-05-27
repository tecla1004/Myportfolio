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
    extend: {
      colors:{
        'white':"#ffffff",
        'gray':"#DFD8D8",
        'gradient':"#165EC8",
        
        },
      backgroundColor:{
          'primary':'#19191F',
          'gradientBtn':"rgb(201,101,245)",
        },
      screens:{
          sm:"740px",
          md:"920px",
          lg:"1024px",
        },
    },
   
   
   
  plugins: [],
}

}
