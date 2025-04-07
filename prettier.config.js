module.exports = {
  arrowParens: "always",
  bracketSpacing: false,
  printWidth: 120,
  semi: true,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "none",
  importOrder: ["<THIRD_PARTY_MODULES>", "^[./]"],
  plugins: ["@trivago/prettier-plugin-sort-imports"],
  importOrderSeparation: false,
  importOrderSortSpecifiers: true
};
