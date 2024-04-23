import type { Config } from 'tailwindcss';

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        'midnight-blue': '#212832',
        'dark-midnight-blue': '#14183E',
        'alice-blue': '#F0F4F9',
        cinnabar: '#DF6951',
        'navy-blue': '#181E4B',
        'royal-blue': '#4152CA',
        'royal-purple': '#5E6282',
        tangerine: '#F1A501',
        'slate-gray': '#686D77',
        champagne: '#FFF1DA',
        'rich-black': '#080809',
        'white-smoke': '#F5F5F5',
        'pastel-purple': '#8A79DF',
        'light-gray': '#F7F7F7',
        periwinkle: '#DFD7F9',
      },
    },
    fontFamily: {
      volkhov: ['Volkhov', 'serif'],
      poppins: ['Poppins', 'sans-serif'],
    },
  },
};
