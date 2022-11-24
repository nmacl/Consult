module.exports = {
  tabWidth: 2,
  printWidth: 80,
  semi: false,
  singleQuote: true,
  trailingComma: 'all',
  arrowParens: 'always',
  endOfLine: 'lf',
  plugins: [
    require.resolve('prettier-package-json'),
    require.resolve('@trivago/prettier-plugin-sort-imports'),
  ],

  importOrderParserPlugins: [
    'classProperties',
    'decorators-legacy',
    'typescript',
    'jsx',
  ],
  importOrder: ['^@(.*)/(.*)$', '^~/(.*)$', '^@/(.*)$', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
}
