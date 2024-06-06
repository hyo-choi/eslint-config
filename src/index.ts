// import { dirname } from "path";
// import { fileURLToPath } from 'url';
import globals from "globals";
import tseslint from "typescript-eslint";
import eslintPluginReact from "eslint-plugin-react";
import eslintPluginReactHooks from "eslint-plugin-react-hooks";
import eslintPluginEcmascript from "eslint-plugin-es-x";
import eslintPluginPrettier from "eslint-plugin-prettier";
import eslintConfigPrettier from "eslint-config-prettier";

const config: ReturnType<typeof tseslint.config>[number] = [
  ...tseslint.configs.recommendedTypeChecked,
  // FIXME: type error
  eslintConfigPrettier as any,
  {
    name: "hyo-choi",
    // FIXME: for type information required rule
    // https://typescript-eslint.io/getting-started/typed-linting/
    // languageOptions: {
    //   parserOptions: {
    //     project: true,
    // tsconfigRootDir: dirname(fileURLToPath(import.meta.url)),
    //   },
    // },
    // https://github.com/jsx-eslint/eslint-plugin-react#configuration
    settings: {
      react: {
        version: "detect",
      },
    },
    plugins: {
      prettier: eslintPluginPrettier,
      react: eslintPluginReact,
      "react-hooks": eslintPluginReactHooks,
      "es-x": eslintPluginEcmascript,
      "@typescript-eslint": tseslint.plugin,
    },
    rules: {
      // general
      "prefer-const": "error",
      "no-restricted-imports": [
        "error",
        {
          patterns: ["../*"],
        },
      ],
      "no-undef": "error",

      "func-style": ["error", "declaration"],

      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "error",
      "no-unused-expressions": "off",
      "@typescript-eslint/no-unused-expressions": "error",

      "default-param-last": "off",
      "@typescript-eslint/default-param-last": "error",

      // "dot-notation": "off",
      // "@typescript-eslint/dot-notation": "error",

      // "no-return-await": "off",
      // "@typescript-eslint/return-await": ["error", "in-try-catch"],

      // "no-throw-literal": "off",
      // "@typescript-eslint/only-throw-error": "error",

      "no-loss-of-precision": "off",
      "@typescript-eslint/no-loss-of-precision": "error",

      // related to typescript
      "@typescript-eslint/array-type": ["error", { default: "generic" }],
      "@typescript-eslint/ban-types": "error",
      "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
      "@typescript-eslint/consistent-indexed-object-style": ["error", "record"],
      // "@typescript-eslint/promise-function-async": "error",

      "@typescript-eslint/no-duplicate-enum-values": "error",

      "@typescript-eslint/method-signature-style": ["error", "property"],
      "@typescript-eslint/adjacent-overload-signatures": "error",

      // "@typescript-eslint/no-confusing-void-expression": "error",
      // "@typescript-eslint/no-explicit-any": "error",
      // "@typescript-eslint/no-base-to-string": "error",
      // "@typescript-eslint/no-floating-promises": "error",
      // "@typescript-eslint/no-misused-promises": "error",
      // "@typescript-eslint/no-redundant-type-constituents": "error",
      // "@typescript-eslint/no-redundant-type-constituents": "error",
      // "@typescript-eslint/no-unnecessary-condition": "error",
      // "@typescript-eslint/no-unsafe-argument": "error",
      // "@typescript-eslint/no-unsafe-assignment": "error",
      // "@typescript-eslint/no-unsafe-call": "error",
      // "@typescript-eslint/no-array-delete": "error",
      // "@typescript-eslint/no-unsafe-return": "error",
      // "@typescript-eslint/no-unsafe-member-access": "error",
      "@typescript-eslint/no-unnecessary-type-constraint": "error",
      "@typescript-eslint/no-invalid-void-type": "error",

      // "@typescript-eslint/strict-boolean-expressions": "error",

      // "@typescript-eslint/require-array-sort-compare": [
      //   "error",
      //   { ignoreStringArrays: true },
      // ],

      // "@typescript-eslint/consistent-type-exports": "error",
      // 추후...
      // "@typescript-eslint/consistent-type-imports": "error",

      // "import/no-relative-parent-imports": ["error"],
      // "import/order": [
      //   "error",
      //   {
      //     groups: [
      //       ["builtin", "external"],
      //       "internal",
      //       ["parent", "sibling", "index"],
      //     ],
      //     "newlines-between": "always",
      //   },
      // ],

      // related to react
      "react/display-name": "warn",
      "react/prop-types": "off",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "react/function-component-definition": [
        2,
        {
          namedComponents: "function-declaration",
          unnamedComponents: "function-expression",
        },
      ],

      // specific ecmascript features
      "es-x/no-regexp-lookbehind-assertions": "error",

      // prettier related
      "prettier/prettier": "error",
    },
  },
].reduce((prev, cur) => ({ ...prev, ...cur }), {});

// NOTE: 기본적으로 node, browser 둘다 활성화 되어있음, 상황에 따라 override 바람
config.languageOptions!.globals = { ...globals.browser, ...globals.node };

// 왜 array로 하고 pnpm eslint --print-config 하면 안될까?? (unexpected array 뜸)
module.exports = config;
