module.exports = {
    env: {
      browser: true,
      es6: true,
    },
    extends: [
      'airbnb',
    ],
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 2018,
      sourceType: 'module',
    },
    plugins: [
      'react',
    ],
    rules: {
      "import/extensions" : "never",
      "react/destructuring-assignment": "off",
      "max-len" : "off",
      "react/no-array-index-key": "off",
      "jsx-a11y/label-has-associated-control": "off",
      "jsx-a11y/label-has-for": "off",
      "jsx-a11y/click-events-have-key-events": "off",
      "jsx-a11y/no-static-element-interactions": "off",
      "global-require": "off",
    },
  };