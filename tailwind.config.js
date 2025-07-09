/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#e8a49c',   // lososová (oblečení)
        accent: '#cfc8a0',    // pole / tráva
        bg: '#f5f5f5',        // přirozené pozadí
        soft: '#a37b56',      // zemitá hnědá
        text: '#383838',      // tmavý text
        muted: '#fffaf6',     // světlé pozadí
        background: 'var(--background)',
        foreground: 'var(--foreground)',
              border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: "hsl(var(--primary))",
        "primary-foreground": "hsl(var(--primary-foreground))",
        secondary: "hsl(var(--secondary))",
        "secondary-foreground": "hsl(var(--secondary-foreground))",
        destructive: "hsl(var(--destructive))",
        "destructive-foreground": "hsl(var(--destructive-foreground))",
        muted: "hsl(var(--muted))",
        "muted-foreground": "hsl(var(--muted-foreground))",
        accent: "hsl(var(--accent))",
        "accent-foreground": "hsl(var(--accent-foreground))",
        popover: "hsl(var(--popover))",
        "popover-foreground": "hsl(var(--popover-foreground))",
        card: "hsl(var(--card))",
        "card-foreground": "hsl(var(--card-foreground))",
      },
      borderRadius: {
        lg: "var(--radius)",
      },
      fontFamily: {
                sans: ["var(--font-sans)", ...fontFamily.sans],

        'dancing-script': ['Dancing Script', 'cursive'],
        'nunito': ['Nunito', 'sans-serif'],
        'oooh-baby': ['Oooh Baby', 'cursive'],
      },
    },
  },
  plugins: [],
};
