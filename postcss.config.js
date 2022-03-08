module.exports = {
  plugins: {
    autoprefixer: {},
    doiuse: {
      //? just use to check some times when you want.
      // browsers: ["ie >= 8", "> 1%"],
    },
    cssnano: {
      preset: "cssnano-preset-default",
    },
    "postcss-color-alpha": {},
    "postcss-custom-selectors": {},
    "postcss-inline-svg": {},
    "postcss-plugin": {},
    "postcss-preset-env": {},
    "postcss-utilities": {},
    "rucksack-css": {},
  },
};

// "postcss-pseudo-content-insert": {},
/* "postcss-css-variables": {
      preserve: true,
      preserveInjectedVariables: true,
      preserveAtRulesOrder: true,
      variables: {},
 }, */
