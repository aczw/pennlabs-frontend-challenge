/** @type {import("prettier").Config} */
const config = {
  plugins: ["prettier-plugin-tailwindcss"],
  singleAttributePerLine: true,
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
