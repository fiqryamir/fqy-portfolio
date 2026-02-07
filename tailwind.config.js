/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        // "Ink" black and "Paper" white
        brutal: {
          bg: '#ffffff',
          text: '#000000',
          border: '#000000', 
          // A light grey for the grid lines so they don't distract from text
          grid: '#e5e5e5' 
        }
      },
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      }
    }
  },
  plugins: []
};