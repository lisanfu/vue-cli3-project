module.exports = {
  root: true,
  env: {
    // 一个环境定义了一组预定义的全局变量
    node: true,
    browser: true,
    commonjs: true,
    es6: true // 启用除module外所有es6特性
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: { // ESLint 允许你指定你想要支持的 JavaScript 语言选项
    parser: '@babel/eslint-parser', // 解析器
    requireConfigFile: false
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        mocha: true
      }
    }
  ]
}
