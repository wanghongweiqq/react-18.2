/*
 * @Author: 王宏伟
 * @Email：wanghongwei@hualala.com
 * @Date: 2024-04-11 17:43:51
 * @Description: 页面/组件/功能的描述
 * @FilePath: /react-18.2/config/webpack/persistentCache/createEnvironmentHash.js
 */
'use strict'
const { createHash } = require('crypto')

module.exports = env => {
  const hash = createHash('md5')
  hash.update(JSON.stringify(env))

  return hash.digest('hex')
}
