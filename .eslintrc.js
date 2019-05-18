module.exports = {
    "extends": "airbnb",
    "env": {
        "browser": true,
        "node": true,
    },
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "ecmaVersion": 2017,
            "experimentalObjectRestSpread": true
        }
    },
    "rules": {
        "global-require": "off",
        "indent": ["error", 4, {
            "SwitchCase": 1
        }],
        "object-curly-newline": ["error", {
            "ExportDeclaration": { "multiline": true, "minProperties": 7 }
        }],
        "import/prefer-default-export": "off",
        "import/extensions": ["error", { "ignorePackages": true }],
        "radix": "off",
        "react/no-array-index-key": "off",
        "react/jsx-indent": [2, 4],
        "react/jsx-indent-props": [2, 4],
        "react/jsx-one-expression-per-line": ["warning", { "allow": "single-child" }],
        "react/require-default-props": "off",
        "react/destructuring-assignment": "off",
    },
};
