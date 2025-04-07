module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {project: "./tsconfig.json"},
  env: {es6: true},
  ignorePatterns: ["lib", "node_modules", "build", "coverage", "*.md", "**/*.mjs"],
  plugins: ["import", "eslint-comments", "functional"],
  extends: [
    "eslint:recommended",
    "plugin:eslint-comments/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/typescript",
    "plugin:functional/lite",
    "prettier"
  ],
  globals: {BigInt: true, console: true, WebAssembly: true},
  rules: {
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "eslint-comments/disable-enable-pair": ["error", {allowWholeFile: true}],
    "eslint-comments/no-unused-disable": "error",
    "functional/prefer-readonly-type": "off",
    "functional/prefer-immutable-types": "off",
    "functional/no-return-void": "off",
    "functional/no-classes": "off",
    "functional/no-throw-statements": "off",
    "no-param-reassign": ["error"],
    "no-empty-function": "off",
    "default-case": 0,
    camelcase: 0,
    "react/prop-types": 0,
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "padding-line-between-statements": [
      "error",
      {
        blankLine: "never",
        prev: "*",
        next: "import"
      },
      {
        blankLine: "always",
        prev: "*",
        next: "export"
      },
      {
        blankLine: "any",
        prev: "export",
        next: "export"
      },
      {
        blankLine: "always",
        prev: ["const", "let", "var"],
        next: "return"
      },
      {
        blankLine: "always",
        prev: ["class", "block-like"],
        next: "*"
      }
    ],
    "eol-last": ["error", "always"],
    "no-unused-vars": ["error", {ignoreRestSiblings: true}],
    "@typescript-eslint/ban-ts-comment": "warn",
    curly: "error",
    "functional/no-mixed-types": "off"
  },
  overrides: [
    {
      files: ["./*.config.js", ".eslintrc.js"],
      rules: {"functional/immutable-data": "off", "no-undef": "off", "@typescript-eslint/no-var-requires": "off"}
    },
    {
      files: ["*.ts"],
      rules: {
        "@typescript-eslint/ban-ts-comment": "warn",
        "@typescript-eslint/ban-ts-ignore": "off",
        "@typescript-eslint/no-unused-vars": [
          "error",
          {
            vars: "all",
            args: "none",
            ignoreRestSiblings: true
          }
        ],
        "@typescript-eslint/explicit-module-boundary-types": 0,
        "@typescript-eslint/naming-convention": [
          "error",
          {
            selector: ["enum"],
            format: ["UPPER_CASE"],
            suffix: ["_ENUM"]
          },
          {
            selector: ["enumMember"],
            format: ["UPPER_CASE"]
          },
          {
            selector: "function",
            format: ["camelCase", "PascalCase"]
          },
          {
            selector: "property",
            filter: {
              regex: "^_oneall$",
              match: true
            },
            format: null
          },
          {
            selector: "variable",
            types: ["boolean"],
            prefix: ["is", "should", "has", "IS"],
            format: null
          },
          {
            selector: "variable",
            format: ["camelCase", "PascalCase", "UPPER_CASE"]
          },
          {
            selector: "parameter",
            filter: {
              regex: "^_+$",
              match: true
            },
            format: null
          },
          {
            selector: "parameter",
            format: ["camelCase", "PascalCase"],
            leadingUnderscore: "allow"
          },
          {
            selector: "typeLike",
            format: ["PascalCase"]
          },
          {
            selector: "objectLiteralProperty",
            filter: {
              regex: "^__typename|__html|aria-.+$",
              match: true
            },
            format: null
          },
          {
            selector: "objectLiteralProperty",
            filter: {
              regex: "^[0-9]+$",
              match: true
            },
            format: null
          },
          {
            selector: "interface",
            format: ["PascalCase"],
            custom: {
              regex: "^I[A-Z]|I[A-Za-z]$",
              match: true
            }
          }
        ]
      }
    }
  ]
};
