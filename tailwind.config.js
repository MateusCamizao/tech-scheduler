/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        card: "var(--card)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        success: "var(--success)",
        danger: "var(--danger)",
        textPrimary: "var(--text-primary)",
        textSecondary: "var(--text-secondary)",
        border: "var(--border)",
        input: "var(--input)",
      },
    },
  },
  plugins: [],
}