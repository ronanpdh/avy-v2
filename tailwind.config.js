/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        btn: {
          background: "hsl(var(--btn-background))",
          "background-hover": "hsl(var(--btn-background-hover))",
        },
      },
      animation: {
        "lavender-dream":"lavender-dream 5s ease infinite",
      },
      keyframes: {
        "lavender-dream":{"0%":{"background":"linear-gradient(-45deg, #a96dc5, #8f7fc7, #7091c8, #49a3c9)","backgroundSize":"200% 200%","backgroundPosition":"0% 100%"},"50%":{"background":"linear-gradient(-90deg, #a96dc5, #8f7fc7, #7091c8, #49a3c9)","backgroundSize":"200% 200%","backgroundPosition":"100% 0%"},"100%":{"background":"linear-gradient(-45deg, #a96dc5, #8f7fc7, #7091c8, #49a3c9)","backgroundSize":"200% 200%","backgroundPosition":"0% 100%"}},
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
