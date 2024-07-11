import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [
    ...compat.extends("sanity", "sanity/react", "sanity/typescript").map(config => ({
        ...config,
        files: ["schemas/**/*"],
    })),
    {
        files: ["schemas/**/*"],

        languageOptions: {
            globals: {
                ...globals.node,
                ...globals.browser,
            },
        },

        rules: {
            "max-len": "off",
            quotes: [2, "backtick"],
        },
    },
];