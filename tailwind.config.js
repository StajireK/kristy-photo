/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#e8a49c',   // lososová (oblečení)
        accent: '#cfc8a0',    // pole / tráva
        bg: '#f7e8db',        // přirozené pozadí
        soft: '#a37b56',      // zemitá hnědá
        text: '#383838',      // tmavý text
        muted: '#fffaf6',     // světlé pozadí
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
    },
  },
  plugins: [],
};
