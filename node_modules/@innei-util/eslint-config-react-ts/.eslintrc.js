module.exports = {
  root: true,
  extends: ['@innei-util/eslint-config-ts', 'plugin:react-hooks/recommended'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-no-target-blank': 'off',
    'react/display-name': 'off',

    'import/no-default-export': 'off',
  },
}
