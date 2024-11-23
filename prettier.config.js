/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const config = {
  semi: false,
  singleQuote: true,
  overrides: [
    {
      files: ["slides.md", "pages/*.md"],
      options: {
        parser: "slidev",
        plugins: ["prettier-plugin-slidev"],
      },
    },
  ],
};

export default config;
