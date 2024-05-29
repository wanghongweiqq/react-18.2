/*
 * @Author: 王宏伟
 * @Email：wanghongwei@hualala.com
 * @Date: 2024-03-04 15:46:24
 * @Description: 本地开发接口代理
 * @FilePath: /react-18.2/src/setupProxy.js
 */
const { createProxyMiddleware } = require('http-proxy-middleware')
module.exports = function (app) {
  app.use(
    createProxyMiddleware(
      '/api/', // 字符串格式，不可使用正则的量词，如：^，尽量层级写完整，这样匹配度更高，如'/api'就可以匹配上这样的路径'/api1/'
      {
        target: process.env.REACT_APP_API,
        secure: false, // 安全策略，默认true，如何target为https，此项必须设置为false，否则接口报错500；如何target为http，此项可以不设置或设置为true/false都可以
        changeOrigin: true,
        pathRewrite: { '^/api/': '/' }, // 字符串格式，可以使用正则
      },
    ),
  )
}
