import tseslint, { Config } from "typescript-eslint";
import eslintPluginReact from "eslint-plugin-react";
import eslintPluginReactHooks from "eslint-plugin-react-hooks";
import eslintPluginEcmascript from "eslint-plugin-es-x";
import eslintPluginPrettier from "eslint-plugin-prettier";
import eslintConfigPrettier from "eslint-config-prettier";

const config: Config = [
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
      "no-unused-vars": "error",

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

      // specific ecmascript features
      "es-x/no-regexp-lookbehind-assertions": "error",

      // prettier related
      "prettier/prettier": "error",
    },
  },
];

// 왜 array로 하고 pnpm eslint --print-config 하면 안될까?? (unexpected array 뜸)
// eslint-disable-next-line no-undef
module.exports = config.reduce((prev, cur) => ({ ...prev, ...cur }), {});
