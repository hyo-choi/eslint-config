import tseslint, { Config } from "typescript-eslint";
import eslintPluginReact from "eslint-plugin-react";
import eslintPluginReactHooks from "eslint-plugin-react-hooks";
import eslintPluginEcmascript from "eslint-plugin-es-x";
import eslintConfigPrettier from "eslint-config-prettier";

/**
 * eslint prettier 한방에 해결하고 싶은데 vscode formatter가 아직 9버전대 지원을 안하니까 그냥 prettier 지우고 eslint로 통합할까 ㄱ-
 */

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
    },
  },
];

// 왜 array로 하고 pnpm eslint --print-config 하면 안될까?? (unexpected array 뜸)
// eslint-disable-next-line no-undef
module.exports = config.reduce((prev, cur) => ({ ...prev, ...cur }), {});
