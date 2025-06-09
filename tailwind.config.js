/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Dark backgrounds
        'dark-primary': '#1f2335',
        'dark-secondary': '#24283b',
        'dark-tertiary': '#292e42',
        'dark-quaternary': '#3b4261',
        'dark-quinary': '#414868',
        
        // Accent and UI colors
        'muted-blue': '#545c7e',
        'slate-purple': '#565f89',
        'lavender-gray': '#737aa2',
        'light-lavender': '#a9b1d6',
        'pale-blue': '#c0caf5',
        
        // Blue shades
        'deep-blue': '#394b70',
        'royal-blue': '#3d59a1',
        'bright-blue': '#7aa2f7',
        'sky-blue': '#7dcfff',
        'light-cyan': '#b4f9f8',
        
        // Purple shades
        'light-purple': '#bb9af7',
        'medium-purple': '#9d7cd8',
        
        // Warm colors
        'orange': '#ff9e64',
        'yellow': '#ffc777',
        
        // Green shades
        'light-green': '#c3e88d',
        'bright-green': '#9ece6a',
        'teal': '#4fd6be',
        'light-teal': '#73daca',
        'blue-green': '#41a6b5',
        
        // Red shades
        'pink-red': '#ff757f',
        'bright-pink': '#f7768e',
        'ruby-red': '#c53b53',
        'magenta': '#ff007c',
        
        // Semantic colors using the new palette
        primary: {
          DEFAULT: '#7aa2f7',
          hover: '#7dcfff',
          dark: '#3d59a1',
        },
        secondary: {
          DEFAULT: '#bb9af7',
          hover: '#9d7cd8',
        },
        success: {
          DEFAULT: '#9ece6a',
          light: '#c3e88d',
        },
        warning: {
          DEFAULT: '#ffc777',
          dark: '#ff9e64',
        },
        error: {
          DEFAULT: '#ff757f',
          dark: '#c53b53',
        },
        background: {
          DEFAULT: '#1f2335',
          secondary: '#24283b',
          tertiary: '#292e42',
        },
        surface: {
          DEFAULT: '#24283b',
          elevated: '#292e42',
          higher: '#3b4261',
        },
        text: {
          primary: '#c0caf5',
          secondary: '#a9b1d6',
          muted: '#737aa2',
          accent: '#7aa2f7',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
} 