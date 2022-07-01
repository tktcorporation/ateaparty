module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  plugins: [
    "@typescript-eslint",
    "import",
    "react",
    "simple-import-sort",
    "unused-imports",
  ],
  rules: {
    // 1: Turn off rules that are no longer necessary in React 17 and in Next.js
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "warn",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],
  },
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
