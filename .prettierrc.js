module.exports = {
  // 代码换行长度
  printWidth: 100,
  // 代码缩进空格数
  tabWidth: 2,
  // 缩进不使用tab，使用空格
  useTabs: false,
  // 箭头函数参数只有一个时是否要有小括号。avoid：省略括号
  // arrowParens: 'avoid',
  // 在对象，数组括号与文字之间加空格 "{ foo: bar }"
  bracketSpacing: true,
  // 不格式化vue文件，vue文件的格式化单独设置
  disableLanguages: ['vue'],
  // 不让prettier使用eslint的代码格式进行校验
  eslintIntegration: true,
  // 代码结尾是否加分号
  semi: true,
  // 是否在 Vue 单文件组件中缩进
  vueIndentScriptAndStyle: true,
  // 是否使用单引号或双引号
  singleQuote: true,
  // 是否在多行结构的最后一行添加逗号
  trailingComma: 'none',
  // 是否将 Markdown 文件中的文本换行
  proseWrap: 'never',
  // 指定 HTML 文件中空格的敏感度
  htmlWhitespaceSensitivity: 'ignore',
  // 指定换行符的类型
  endOfLine: 'auto',
  plugins: ['prettier-plugin-packagejson'],
  // 针对特定文件或文件夹的配置覆盖
  overrides: [
    {
      files: '.*rc',
      options: {
        parser: 'json'
      }
    }
  ]
};
