module.exports = {
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: "tsconfig.json",
        tsconfigRootDir: __dirname,
        sourceType: "module"
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/strict-type-checked',
        'plugin:security/recommended-legacy'
    ],
    rules: {
        "@typescript-eslint/restrict-template-expressions": ["error", {allowNullish: true}]
    },
    root: true,
    env: {
        browser: true,
        es2020: true
    },
    ignorePatterns: [".eslintrc.js"]
}