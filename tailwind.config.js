/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'text-color':'#ffffff',
        'hover-text-color':'#ccc6c6',
        'custom-border':'#e91624'
        
      },
    }
  },
  plugins: [],
}

