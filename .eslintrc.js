module.exports = {
    "extends": "eslint:recommended",
    "plugins": ["mocha"],
    "rules": {
        "indent": ["warn", 4],
        "quotes": ["error", "double"],
        "semi": ["error", "always"],
        "space-before-function-paren": ["error", "never"],
        "linebreak-style": ["error", "windows"],
        "no-unused-vars": [0, {
            "varsIgnorePattern": "^h$"
        }],
        "mocha/no-exclusive-tests": "error"
    },
    "env": {
        "browser": true,
        "jasmine": true
    }
};