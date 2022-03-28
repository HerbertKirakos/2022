const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'black': '#111111',
      'pink': '#FDF1E6',
      'red': '#EB5757',
      'green': '#27AE60',
      'gray': '#7F7974',
      'gray-light': '#E4D9CF',
      'white': '#ffffff',
    },
    extend: {
      fontFamily: {
        "NotoSans": ["Noto Sans", ...defaultTheme.fontFamily.sans], 
        "NotoSerif": ["Noto Serif", ...defaultTheme.fontFamily.sans],
      },
    },
    screens: {
      'xs': '375px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
  plugins: [],
}