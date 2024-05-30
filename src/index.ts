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
].reduce((prev, cur) => ({ ...prev, ...cur }), {});

// NOTE: 기본적으로 node, browser 둘다 활성화 되어있음, 상황에 따라 override 바람
config.languageOptions!.globals = { ...globals.browser, ...globals.node };

// 왜 array로 하고 pnpm eslint --print-config 하면 안될까?? (unexpected array 뜸)
module.exports = config;
