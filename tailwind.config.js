/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,css,js}"],
  theme: {
    fontFamily: {
      'body': ['Plus Jakarta Sans', 'sans-serif'],
      'heading': ['Zain', 'sans-serif'],
      'title': ['Galada', 'cursive'],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
            "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  daisyui: {
    themes: [
      {
        custom: {
          "base-100": "#FDECCA",
          "base-200": "#FADFA1",
          "base-300": "#F7D177",
          neutral: "#F5C147",
          "neutral-content": "#1A1715",
          accent: "#F2AC16",
          "accent-content": "#1A1715",
          "base-content": "#1A1715",
          primary: "#C96868",
          "primary-content": "#FCEFEE",
          secondary: "#7EACB5",
          "secondary-content": "#F2F7F8"
        }
      }
    ]
  },
  plugins: [
      require('@tailwindcss/typography'),
      require('daisyui'),
  ],
}

