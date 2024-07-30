/*
 * @Author: 王宏伟
 * @Email：wanghongwei@hualala.com
 * @Date: 2024-03-29 10:31:39
 * @Description: stylelint配置文件
 * @FilePath: /react-18.2/.stylelintrc.js
 */
module.exports = {
  'extends': [ 'stylelint-config-standard','stylelint-config-recess-order'],
  'rules': {
    'at-rule-no-unknown': [ true, { 'ignoreAtRules': [//防止css预处理器sass的一些特性不被识别
      'mixin', 'extend', 'content', 'include',
    ] } ],
    'value-no-vendor-prefix': null //禁止值使用浏览器前缀，默认true，保存自动格式化时会删除前缀（不关闭的话会导致部分样式失效。如：display: -webkit-box，就会导致设置省略号时失效 ）
  },
}
