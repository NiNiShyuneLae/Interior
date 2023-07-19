/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1280px',
          xl: '1350px'
        }
      },
      colors: {
        primary: '#272727',
        secondary: '#b19777',
        boxColor: '#323232',
        textColor: '#999999',
        headColor: '#fff',
        selectionColor:'#232323'
      },
      fontFamily: {
        'Didact': 'Didact Gothic',
        'Oswald' : 'Oswald'
      },
      letterSpacing: {
        tightest: '-.075em',
        tighter: '-.05em',
        tight: '-.025em',
        normal: '0',
        wide: '4px',
        wider: '9px',
        widest: '15px',
      },
      fontSize: {
        sm: '12px',
        base: '13px',
        xl: '15px',
        '2xl': '28px',
        '3xl': '48px',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
      },
      
    },
  },
  plugins: [],
}

