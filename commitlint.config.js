/*
 * @Author: 王宏伟
 * @Email：wanghongwei@hualala.com
 * @Date: 2022-08-31 17:37:56
 * @Description: git提交时校验的信息，主要校验的type，后紧跟英文冒号+空格（中英文都可以）:
 * @FilePath: /react-18.2/commitlint.config.js
 */
module.exports = {
  extends: [ '@commitlint/config-conventional' ],
  rules: {
    'subject-case': [ 0, 'never' ],
    'type-enum': [
      2, 'always', [// 按首字母顺序排列
        'build', // 打包构建
        'chore', // 改变构建流程/增加依赖库/工具等
        'ci', // Continuous Integration:持续集成
        'docs', // 仅仅修改文档，比如README
        'feat', // 新增功能Feature
        'fix', // 修复bug
        'perf', // 优化相关，比如提升性能、体验
        'refactor', // 代码重构，没有增加新功能或修复bug
        'revert', // 回滚到某一个版本
        'style', // 修改了css、空格、缩进、等，不改变代码逻辑
        'test', // 测试用例，包括单元测试集成测试等
      ],
    ],
  },
}
