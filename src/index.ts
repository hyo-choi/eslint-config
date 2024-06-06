import globals from "globals";
import tseslint from "typescript-eslint";
import eslintPluginReact from "eslint-plugin-react";
import eslintPluginReactHooks from "eslint-plugin-react-hooks";
import eslintPluginEcmascript from "eslint-plugin-es-x";
import eslintPluginPrettier from "eslint-plugin-prettier";
import eslintConfigPrettier from "eslint-config-prettier";

const config: ReturnType<typeof tseslint.config>[number] = [
  ...tseslint.configs.recommended,
  // FIXME: type error
  eslintConfigPrettier as any,
  {
    name: "hyo-choi",
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

      "no-unused-vars": "error",
      "@typescript-eslint/no-unused-vars": "error",
      "no-unused-expressions": "off",
      "@typescript-eslint/no-unused-expressions": "error",

      "default-param-last": "off",
      "@typescript-eslint/default-param-last": "error",

      "dot-notation": "off",
      "@typescript-eslint/dot-notation": "error",

      // related to typescript
      "@typescript-eslint/array-type": ["error", { default: "generic" }],
      "@typescript-eslint/ban-types": "error",

      "@typescript-eslint/method-signature-style": ["error", "property"],

      "@typescript-eslint/consistent-indexed-object-style": ["error", "record"],

      "@typescript-eslint/adjacent-overload-signatures": "error",

      "@typescript-eslint/consistent-type-exports": "error",
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
