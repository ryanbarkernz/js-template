// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    browser: true,
  },
  extends: 'airbnb-base',
  'rules': {
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
