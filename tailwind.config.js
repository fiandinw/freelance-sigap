module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat Alternates', 'sans-serif'],
        'lato': ['Lato', 'sans-serif'],
        'opensans': ['Open Sans', 'sans-serif']
      }
    },
    colors: {
      'hitam': '#151515',
      'abuabu': '#DCDCDC',
      'putih': '#FEFEFE',
      'hijau-tua': '#2E6A50',
      'hijau-muda': '#74C69D',
      'hijau-black': '#081B15',
      'hijau-dark': '#1A4331',
      'hijau-med':'#4E8B65',
      'hijau-med-dark':'#347B4E',
      'biru': '#45B9FF',
      'merah':'#DC2626'
    },
  },
  plugins: [],
  darkMode: "class",
}
