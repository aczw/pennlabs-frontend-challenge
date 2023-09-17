/** @type {import("prettier").Config} */
const config = {
  plugins: ["prettier-plugin-tailwindcss"],
  singleAttributePerLine: true,
  tabWidth: 2,
  overrides: [
    {
      files: ["package.json"],
      options: {
        rangeEnd: 0,
      },
    },
  ],
};

module.exports = config;
