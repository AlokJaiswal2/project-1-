/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',         // For HTML files in root
    './**/*.html',      // For HTML files in all subfolders
    './js/**/*.js',     // For JS files in /js/ and subfolders
    './components/**/*.{js,jsx,ts,tsx}', // If using React or TSX components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
