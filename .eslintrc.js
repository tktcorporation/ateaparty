module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  plugins: ["react", "@typescript-eslint"],
  rules: {
    // 1: Turn off rules that are no longer necessary in React 17 and in Next.js
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
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
