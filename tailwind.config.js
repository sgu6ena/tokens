const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')

const primary = '#135DEA'


module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {

        black: colors.black,
        white: colors.white,
        green: colors.green,
        blue: {
          300: '#F2F4F5',
          700: '#135DEA',
        },
        gray: {
          600: '#72777A',
          700: '#5A6664',
          800: '#404446',
          900: '#090A0A',
        }
      }
    },
  },
  plugins: [

    plugin(({addComponents, theme, addUtilities}) => {
      addComponents({

        '.text-link': {
          textUnderlineOffset: 4,
          color: 'rgba(255, 255, 255, .9)',
          transition: 'text-decoration-color .3s ease-in-out',
          textDecorationLine: 'underline',
          textDecorationColor: 'rgba(255, 0, 0, 0.2)',
          '&:hover': {
            textDecorationColor: 'rgba(255, 255, 255, 0.9)',
          },
        },
        '.btn': {
          background: primary,
          padding: '16px 32px',
          color: 'white',
          borderWidth: '1px',
          borderRadius: '8px',
          transition: 'all 0.3s ease-in-out',
          borderColor: primary,
          '&:hover': {
            color: primary,
            background: 'white',
            borderColor: primary,
          },

        }

      });
      addUtilities({
        '.block-shadow': {
          boxShadow: '0px 1px 24px 4px rgba(20, 20, 20, 0.08)',
        },

        '.outline-border-none': {
          outline: 'none',
          border: 'none',
        },

        '.flex-center-between': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        },

        '.image-like-bg': {
          objectPosition: 'center',
          objectFit: 'cover',
          pointerEvents: 'none',
        },
      })
    }),
  ],
}