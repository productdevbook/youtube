/** @type {import('tailwindcss').Config} */
const { addDynamicIconSelectors } = require('@iconify/tailwind');

module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [
    // Iconify plugin
    addDynamicIconSelectors(),

    // `icon-hover-`
    addDynamicIconSelectors({
      prefix: "icon-hover",
      overrideOnly: true,
    }),
  ],
}
