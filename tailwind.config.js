/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'Merriweather': ['Merriweather', 'serif'],
      'NotoSerifKhojki': ['Noto Serif Khojki', 'serif']
    },
    backgroundImage: {
      'hero-bg-1': "url('./assets/hero-img-1.jpg')",
      'hero-bg-2': "url('./assets/hero-img-2.jpg')",
      'hero-bg-3': "url('./assets/hero-img-3.jpg')",
      'hero-bg-4': "url('./assets/hero-img-4.jpg')",
      'hero-bg-5': "url('./assets/hero-img-5.jpg')",
      'hero-bg-6': "url('./assets/hero-img-6.jpg')",
      'hero-bg-7': "url('./assets/hero-img-7.jpg')",
      'hero-bg-8': "url('./assets/hero-img-8.jpg')",
      'hero-bg-9': "url('./assets/hero-img-9.jpg')",
    },
    extend: {},
  },
  plugins: [],
}