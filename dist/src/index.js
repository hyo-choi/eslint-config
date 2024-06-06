"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
});
const _globals = _interop_require_default(require("globals")), _typescripteslint = _interop_require_default(require("typescript-eslint")), _eslintpluginreact = _interop_require_default(require("eslint-plugin-react")), _eslintpluginreacthooks = _interop_require_default(require("eslint-plugin-react-hooks")), _eslintpluginesx = _interop_require_default(require("eslint-plugin-es-x")), _eslintpluginprettier = _interop_require_default(require("eslint-plugin-prettier")), _eslintconfigprettier = _interop_require_default(require("eslint-config-prettier"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const config = [
    ..._typescripteslint.default.configs.recommended,
    _eslintconfigprettier.default,
    {
        name: "hyo-choi",
        settings: {
            react: {
                version: "detect"
            }
        },
        plugins: {
            prettier: _eslintpluginprettier.default,
            react: _eslintpluginreact.default,
            "react-hooks": _eslintpluginreacthooks.default,
            "es-x": _eslintpluginesx.default,
            "@typescript-eslint": _typescripteslint.default.plugin
        },
        rules: {
            "prefer-const": "error",
            "no-restricted-imports": [
                "error",
                {
                    patterns: [
                        "../*"
                    ]
                }
            ],
            "no-undef": "error",
            "func-style": [
                "error",
                "declaration"
            ],
            "no-unused-vars": "off",
            "@typescript-eslint/no-unused-vars": "error",
            "no-unused-expressions": "off",
            "@typescript-eslint/no-unused-expressions": "error",
            "default-param-last": "off",
            "@typescript-eslint/default-param-last": "error",
            "no-loss-of-precision": "off",
            "@typescript-eslint/no-loss-of-precision": "error",
            "@typescript-eslint/array-type": [
                "error",
                {
                    default: "generic"
                }
            ],
            "@typescript-eslint/ban-types": "error",
            "@typescript-eslint/consistent-type-definitions": [
                "error",
                "interface"
            ],
            "@typescript-eslint/consistent-indexed-object-style": [
                "error",
                "record"
            ],
            "@typescript-eslint/no-duplicate-enum-values": "error",
            "@typescript-eslint/method-signature-style": [
                "error",
                "property"
            ],
            "@typescript-eslint/adjacent-overload-signatures": "error",
            "@typescript-eslint/no-unnecessary-type-constraint": "error",
            "@typescript-eslint/no-invalid-void-type": "error",
            "react/display-name": "warn",
            "react/prop-types": "off",
            "react-hooks/rules-of-hooks": "error",
            "react-hooks/exhaustive-deps": "warn",
            "react/function-component-definition": [
                2,
                {
                    namedComponents: "function-declaration",
                    unnamedComponents: "function-expression"
                }
            ],
            "es-x/no-regexp-lookbehind-assertions": "error",
            "prettier/prettier": "error"
        }
    }
].reduce((prev, cur)=>({
        ...prev,
        ...cur
    }), {});
config.languageOptions.globals = {
    ..._globals.default.browser,
    ..._globals.default.node
}, module.exports = config;
