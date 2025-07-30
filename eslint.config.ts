import globals from "globals";
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginSecurity from "eslint-plugin-security";

export default tseslint.config(
    eslint.configs.recommended,
    tseslint.configs.strictTypeChecked,
    pluginSecurity.configs.recommended,
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.es2021
            },
            sourceType: "module",
            parserOptions: {
                projectService: true,
                // @ts-expect-error - not recognized in CJS
                tsconfigRootDir: import.meta.dirname
            }
        },
        rules: {
            "@typescript-eslint/restrict-template-expressions": ["error", {allowNullish: true}]
        }
    }
);