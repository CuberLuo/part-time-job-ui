module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ['plugin:vue/vue3-essential', 'standard'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      modules: true
    },
    requireConfigFile: false,
    parser: '@babel/eslint-parser'
  },
  plugins: ['vue'],
  rules: {
    semi: [2, 'never'], // 禁止尾部使用分号“ ; ”
    'no-var': 'error', // 禁止使用 var
    indent: 0, // 取消缩进检测
    'no-mixed-spaces-and-tabs': 'error', // 不能空格与tab混用
    quotes: [2, 'single'], // 使用单引号
    // 关闭函数名与括号之间要求存在空格的问题
    'space-before-function-paren': 'off',
    'vue/multi-word-component-names': [
      'error',
      {
        ignores: ['index'] // 需要忽略的组件名
      }
    ],
    // 关闭导入组件未使用报错问题
    'no-unused-vars': 'off',
    //关闭要求双斜线后面有空格的规则
    'spaced-comment': 'off',
    //关闭不允许三目运算符返回Boolean值的规则
    'no-unneeded-ternary': 'off',
    //关闭强制要求使用===或!==的规则
    eqeqeq: ['off']
  }
}
