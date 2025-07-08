/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#999999',    // jemná šedá pro tlačítka / akcenty
        accent: '#cccccc',     // světlejší šedá na hover/fill
        bg: '#f5f5f5',         // pozadí (místo bílé) – příjemná šedobílá
        soft: '#e0e0e0',       // sekce, boxy, stíny
        text: '#222222',       // skoro černý text
        muted: '#f9f9f9',      // extra světlá šedá, třeba pro footer
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      fontFamily: {
        'dancing-script': ['Dancing Script', 'cursive'],
        'nunito': ['Nunito', 'sans-serif'],
        'oooh-baby': ['Oooh Baby', 'cursive'],
      },
    },
  },
  plugins: [],
};
