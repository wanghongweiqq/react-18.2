/*
 * @Author: 王宏伟
 * @Email：wanghongwei@hualala.com
 * @Date: 2024-04-11 17:43:51
 * @Description: 页面/组件/功能的描述
 * @FilePath: /react-18.2/config/jest/babelTransform.js
 */
'use strict'

const babelJest = require('babel-jest').default

const hasJsxRuntime = (() => {
  if (process.env.DISABLE_NEW_JSX_TRANSFORM === 'true') {
    return false
  }

  try {
    require.resolve('react/jsx-runtime')
    return true
  } catch (e) {
    return false
  }
})()

module.exports = babelJest.createTransformer({
  presets: [
    [
      require.resolve('babel-preset-react-app'),
      { runtime: hasJsxRuntime ? 'automatic' : 'classic' },
    ],
  ],
  babelrc: false,
  configFile: false,
})
