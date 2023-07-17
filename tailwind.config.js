/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray-20": "#F8F4EB",
        "gray-50": "#EFE6E6",
        "gray-100": "#DFCCCC",
        "gray-500": "#5E0000",
        "primary": "rgba(37, 42, 52, 0.85)",   
        "secondary-300": "rgb(207, 232, 226)",
        "secondary-400": "rgb(33, 157, 128)",
        "secondary-500": "rgb(59, 129, 116)",
      },
      backgroundImage: {
        'dash-pattern': "url('./assets/images/common/Footer/background.png')",
      },
      fontFamily: {
        IRANSans: ["IRANSans", "sans-serif"],
        IRANNastaliqh: ["IRANNastaliqh"],
        sansSerif: ["sans-serif"],
        Nunito: ['Nunito', 'sans-serif'],
        IrishGrover: ['Irish Grover', 'sans-serif'],
      },
      content: {
        // evolvetext: "url('./assets/EvolveText.png')",
        // abstractwaves: "url('./assets/AbstractWaves.png')",
        // sparkles: "url('./assets/Sparkles.png')",
        // circles: "url('./assets/Circles.png')",
      },
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1536px",
      xxl: '1920px',
    },
  },
  plugins: [],
};
