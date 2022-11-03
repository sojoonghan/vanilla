module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es2021: true,
        node: true,
    },
    extends: [
        "airbnb",
        "eslint:recommended",
        "eslint-config-prettier"
    ],
    plugins: [
        "prettier"
    ],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    settings: {
        "import/resolver": "webpack",
    },
    rules: {
        "prettier/prettier": [
            "error",
            {
                endOfLine: "auto",
            },
        ],
    },
};

// npm i -D eslint-config-prettier