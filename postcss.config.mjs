const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'red': {
          '500': '#ef4444', // Rouge par défaut (peut être ajusté)
          '600': '#dc2626', // Rouge plus foncé (peut être ajusté)
        },
        'black': '#000000', // Noir
      },
    },
  },
  plugins: ["@tailwindcss/postcss"],
};

export default config;
