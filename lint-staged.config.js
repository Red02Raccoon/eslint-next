module.exports = {
  linters: {
    '*.js': ['eslint --fix', 'prettier --write', 'git add'],
  },
  ignore: ['**/dist/*.min.js'],
}
