/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // C&C corporate palette (CI-Guide): primary blue #226094,
        // deep navy #164861, bright accent #33CCFF.
        brand: {
          50: '#eef6fc',
          100: '#d6eaf7',
          200: '#aed5ee',
          300: '#7bb8e0',
          400: '#4f9fd4',
          500: '#2f80b8',
          600: '#226094',
          700: '#1b4d78',
          800: '#164861',
          900: '#123a4f',
          950: '#0c2838',
        },
        accent: {
          300: '#7ddcff',
          400: '#33ccff',
          500: '#12b6ee',
        },
      },
      fontFamily: {
        sans: ['"Open Sans"', 'Arial', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out both',
        'float': 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
