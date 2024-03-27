/*
 * @Author: 王宏伟
 * @Email：wanghongwei@hualala.com
 * @Date: 2024-03-25 15:39:41
 * @Description: css说明
 * @FilePath: /react-18.2/src/view/doc/css.js
 */
import React from 'react'

function Css () {
  return (
    <div className='pg-doc'>
      <h1>css说明</h1>
      <h2>选择安装sass</h2>
      <table>
        <tr>
          <td><em>sass</em></td>
          <td>
            <p>node-sass 7.0.3</p>
            <p>react里默认已经配置了sass, 你直接写sass,运行会发现报Cannot find module &apos;sass&apos;，其实是create-react-app只安装了sass-loader，没有安装node-sass依赖，只需执行安装命令即可：npm install node-sass --save-dev</p>
          </td>
        </tr>
        <tr>
          <td><em>less</em></td>
          <td>
            <p>1、安装less和less-loader，npm install less less-loader -D </p>
            <p>2、create-react-app 创建的 react项目，不支持less,所以我们要对webpack进行配置，npm run eject，会不可逆的生成webpack的配置，less要修改webpack的配置，比较麻烦 </p>
          </td>
        </tr>
      </table>
    </div>
  )
}

export default Css

