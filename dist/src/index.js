"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
});
const _typescripteslint = _interop_require_default(require("typescript-eslint")), _eslintpluginreact = _interop_require_default(require("eslint-plugin-react")), _eslintpluginreacthooks = _interop_require_default(require("eslint-plugin-react-hooks")), _eslintpluginesx = _interop_require_default(require("eslint-plugin-es-x")), _eslintpluginprettier = _interop_require_default(require("eslint-plugin-prettier")), _eslintconfigprettier = _interop_require_default(require("eslint-config-prettier"));
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
            "es-x": _eslintpluginesx.default
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
            "no-unused-vars": "error",
            "react/display-name": "warn",
            "react/prop-types": "off",
            "react-hooks/rules-of-hooks": "error",
            "react-hooks/exhaustive-deps": "warn",
            "es-x/no-regexp-lookbehind-assertions": "error",
            "prettier/prettier": "error"
        }
    }
];
module.exports = config.reduce((prev, cur)=>({
        ...prev,
        ...cur
    }), {});
