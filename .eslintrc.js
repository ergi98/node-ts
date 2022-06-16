module.exports = {
  env: {
    node: true,
    es2021: true,
  },
  extends: [
    "prettier",
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    ecmaVersion: "latest",
    sourceType: "module",
    tsconfigRootDir: "./",
  },
  plugins: ["@typescript-eslint", "prettier", "import"],
  rules: {
    "prettier/prettier": "error",
    "import/extensions": "off",
    "no-console": "off",
    "import/no-unresolved": "error",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["error"],
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts"],
    },
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
        project: "./tsconfig.json",
      },
    },
  },
};
