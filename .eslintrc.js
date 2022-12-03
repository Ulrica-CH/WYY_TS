module.exports = {
  env: {
    browser: true,
    es2021: true,
    // 增加对node CommonJS支持
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    // 根据prettier检测代码
    'plugin:prettier/recommended'
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-var-requires': 0,
    // 不写函数组件名报错
    'react/display-name': 0,
    // 不引入React报错
    'react/react-in-jsx-scope': 0,
    '@typescript-eslint/no-explicit-any': 0
  }
}
