{
    "root": true,
    "parser": "@babel/eslint-parser",
    "env": [
      browser: true,
      builtin: true,
      es6: true,
      node: true,
    ],
    "parserOptions": [
      ecmaVersion: 2018,
      sourceType: "module",
      requireConfigFile: false,
      babelOptions: {
        plugins: [["@babel/plugin-proposal-decorators", { legacy: true }]],
      },
    ],
    "rules": {
      "block-scoped-var": 2,
      "dot-notation": 0,
      eqeqeq: [2, "allow-null"],
      "guard-for-in": 2,
      "no-alert": 2,
      "no-bitwise": 2,
      "no-caller": 2,
      "no-cond-assign": 0,
      "no-console": 2,
      "no-debugger": 2,
      "no-empty": 0,
      "no-eval": 2,
      "no-extend-native": 2,
      "no-extra-parens": 0,
      "no-inner-declarations": 2,
      "no-irregular-whitespace": 2,
      "no-iterator": 2,
      "no-loop-func": 2,
      "no-mixed-spaces-and-tabs": 2,
      "no-multi-str": 2,
      "no-new": 2,
      "no-plusplus": 0,
      "no-proto": 2,
      "no-restricted-globals": [2, "Promise"],
      "no-script-url": 2,
      "no-sequences": 2,
      "no-shadow": 2,
      "no-this-before-super": 2,
      "no-trailing-spaces": 2,
      "no-undef": 2,
      "no-unused-vars": 2,
      "no-with": 2,
      "no-var": 2,
      radix: 2,
      semi: 2,
      strict: 0,
      "valid-typeof": 2,
      "wrap-iife": [2, "inside"],
      curly: 2,
      "no-duplicate-imports": 2,
      "sort-imports": [
        "error",
        {
          ignoreDeclarationSort: true,
        },
      ],
      "object-shorthand": ["error", "properties"],
    },
    "ignorePatterns": ["src/**/*.test.ts", "src/frontend/generated/*"]
}