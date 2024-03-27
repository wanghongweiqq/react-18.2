/*
 * @Author: 王宏伟
 * @Email：wanghongwei@hualala.com
 * @Date: 2024-03-22 17:34:45
 * @Description: eslint配置文件
 * @FilePath: /react-18.2/.eslintrc.js
 */
module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [ 'eslint:recommended', 'plugin:react/recommended' ],
  'overrides': [
    {
      'env': { 'node': true },
      'files': [ '.eslintrc.{js,cjs}' ],
      'parserOptions': { 'sourceType': 'script' },
    },
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'plugins': [ 'react' ],
  /**
   * "off" 或 0 - 关闭规则
   * "warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出),
   * "error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
   */
  'rules': {
  // 'no-console': 0,
  // 'no-debugger': 0,
    'no-undef': 'error',
    'no-unused-vars': 'warn',
    'indent': [ 'error', 2, { SwitchCase: 1 } ], // 缩进：2个空格,Switch语句按1倍缩进执行
    'no-multiple-empty-lines': [ 'error', { max: 1 } ], // 空行最多不能超过1行
    'quotes': [ 'error', 'single' ],
    'semi': [ 'error', 'never' ], // 行末尾分号：不要分号
    'semi-spacing': [ 'error', { before: false, after: true } ], // 分号前后空格：前不要后要
    'no-trailing-spaces': 'error', // 禁用行尾空格
    'no-whitespace-before-property': 'error', // 禁止属性前有空白，错误示例：item. b=xxx
    'space-in-parens': [ 'error', 'never' ], // 禁止圆括号内的空格
    'comma-dangle': [ 'error', 'always-multiline' ], // 数组或对象最后一个值后是否有逗号：和结束符在同一行的时候没有,否则有。（only-multiline：和结束符在同一行的时候没有,否则可有可没有）
    'comma-spacing': 'error', // 逗号前后是否有空格，默认前没有，后有
    'no-inner-declarations': 1, // 函数声明只能在程序或另一个函数体的顶层,不要在if等语句中
    'no-use-before-define': [ 'error', { 'functions': true, 'classes': true, 'variables': true, 'allowNamedExports': false } ], // 在定义之前禁止使用变量，依次为：函数声明，类声明，变量声明，export声明
    'object-curly-spacing': [ 'error', 'always' ], // 在大括号内强制保持一致的间距，{ x:1 }前后有空格,{}除外但中间可以有一个空格
    'array-bracket-spacing': [ 'error', 'always' ], // 在数组括号内强制保持一致的间距，[ 1 ]前后有空格,[]除外但中间可以有一个空格
    'no-await-in-loop': 'error', // 禁止在循环中 出现 await
    'no-template-curly-in-string': 'error', // 禁止在常规字符串中出现模板字面量占位符语法，如：'Hello ${name}!'
    'block-scoped-var': 'error', // 在定义的范围内强制使用变量，把 var 语句看作是在块级作用域范围之内，超出作用域报错
    'no-extra-bind': 'error', // 禁止不必要的函数绑定，方法内没有使用bind的入参
    'wrap-iife': [ 'error', 'outside' ], // 此规则要求所有立即调用的函数表达式都用括号括起来，例如：const x = (function () { return { y: 1 } }())
    'block-spacing': [ 'error', 'always' ], // 代码块中大括号前和后有空格
    'brace-style': [ 'error', '1tbs', { allowSingleLine: true } ], // 代码块中使用一致的大括号风格，大括号的缩进与换行，比如if/else，允许单行
    'func-call-spacing': [ 'error', 'never' ], // 禁止在函数标识符和其调用之间有空格
    'jsx-quotes': [ 'error', 'prefer-single' ], // 强制所有不包含单引号的 JSX 属性值使用单引号
    'key-spacing': 'error', // 强制在对象字面量的键和值之间使用一致的空格,默认冒号前没有后有
    'generator-star-spacing': [ 'error', { before: true, after: false } ], // 强制 generator 函数中 * 号周围使用一致的空格,前有后没有
    'eqeqeq': 'error', // 要求使用===全等于
    'no-duplicate-imports': 'error', // 禁止重复导入
    'spaced-comment': [ 'error', 'always' ], // 注释风格:有空格
    'no-multi-spaces': 'error', // 禁止出现多个空格，错误示例：a   === b
    'space-before-function-paren': [ 'error', 'always' ], // 函数定义时括号前面要不要有空格
    'arrow-spacing': 'error', // =>的前/后空格
    'space-before-blocks': [ 'error', 'always' ], // 不以新行开始的块{前面要不要有空格
    'no-const-assign': 'error', // 禁止修改const声明的变量
    'space-infix-ops': 'error', // 要求操作符周围有空格,如：a + b
    'template-curly-spacing': [ 'error', 'always' ], // 要求或禁止模板字符串中的嵌入表达式周围空格的使用
    'array-bracket-newline': [ 'error', { 'multiline': true } ], //  数组的中括号[]自身执行一致的换行符，如果其中值有换行符自身就换行（自身单独一行），否则，中括号自身不换行
    'array-element-newline': [ 'error', 'consistent' ], //  在每个数组元素后强制换行，"consistent"：需要一致地使用数组元素之间的换行符，有一个换行了，其他的都换
    'object-curly-newline': [ 'error', { 'multiline': true } ], // 对象大括号{}自身执行一致的换行符，如果其中属性有换行符自身就换行（自身单独一行），否则，大括号自身不换行
    'object-property-newline': [ 'error', { 'allowAllPropertiesOnSameLine': true } ], // 是否强制将对象属性放置在单独的行上，如果属性有一个换行那就所有的都换行，否则都在一行
  },
}
