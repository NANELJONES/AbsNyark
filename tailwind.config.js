/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  fontFamily:{
    Fraunces: ["Fraunces"],
    Serif: ["DM Serif Display"],
    Montserrat: ["Montserrat"]
  },


  theme: {
    extend: {

      animation:{

        "spin-slow":"spin 12s linear infinite",
      },
      fontFamily:{

        Montserrat : ["Montserrat"],
        Garamond: ["Garamond"],
        Playfair:["Playfair Display"],
      },


      keyframes:{



        
        wiggle1: {
          '0%, 100%': { 
            transform: 'translateX(30px)',
           
            
          },
          '50%': { 
            transform: 'translateX(4px)',
         
            
          },
        },

                wiggle: {
          '0%, 100%': { 
            transform: 'translateX(10px)',
            transform: 'translateY(30px)'
            
          },
          '50%': { 
            transform: 'translateX(3px)',
            transform: 'translateY(15px)',
            
          },
        }











      },

      boxShadow:{
        "3xl":"0 50px 70px -30px rgba(45,91,253,1)",
      }





     


    },
    colors:{
      "nav_bg": "#2A6243",
      "secondary":"#235539",
      'white': '#FFFFFF',
      "testimonial_grad" :" linear-gradient(117.99deg, #3F3F3F -15.52%, rgba(0, 0, 0, 0.85) 116.71%);"
    },
  },
  plugins: [],
}
