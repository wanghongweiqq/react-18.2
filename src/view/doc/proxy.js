/*
 * @Author: 王宏伟
 * @Email：wanghongwei@hualala.com
 * @Date: 2024-03-25 15:39:41
 * @Description: 本地开发接口代理
 * @FilePath: /react-18.2/src/view/doc/proxy.js
 */
import React from 'react'

function Proxy () {
  return (
    <div className='pg-doc'>
      <h1>proxy本地开发接口代理说明</h1>
      <p>react项目如果是create-react-app创建，就已经包含了跨域的npm包：<em>http-proxy-middleware</em>（版本号：2.0.3），直接在src目录下新建<em>setupProxy.js</em>即可</p>
      <p> createProxyMiddleware( &apos;/api/&apos;, &#123;target, secure, changeOrigin, pathRewrite ... &#125; )</p>
      <p>配置修改后重新运行项目方可生效</p>
      <p>配置修改后重新运行项目方可生效</p>
      <table>
        <tr>
          <td>路径</td>
          <td>字符串格式，不可使用正则的量词，如：^，尽量层级写完整，这样匹配度更高，如 &apos;/api &apos;就可以匹配上这样的路径 &apos;/api1/ &apos;</td>
        </tr>
        <tr>
          <td>target</td>
          <td>安全策略，默认true，如何target为https，此项必须设置为false，否则接口报错500；如何target为http，此项可以不设置或设置为true/false都可以</td>
        </tr>
        <tr>
          <td>secure</td>
          <td>目标地址的域名或IP</td>
        </tr>
        <tr>
          <td>changeOrigin</td>
          <td>如果跨域了需要设置为true，一般都涉及到跨域了</td>
        </tr>
        <tr>
          <td>pathRewrite</td>
          <td>路径的反向代理策略，字符串格式，可以使用正则</td>
        </tr>
      </table>
    </div>
  )
}

export default Proxy

