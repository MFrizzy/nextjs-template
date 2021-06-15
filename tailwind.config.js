const plugin = require("tailwindcss/plugin");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./modules/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    plugin(function({ addBase }) {
      addBase({
        'html': { scrollBehavior: "smooth" },
      })
    })
  ],
};
