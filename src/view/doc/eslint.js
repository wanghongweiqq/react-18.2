/*
 * @Author: 王宏伟
 * @Email：wanghongwei@hualala.com
 * @Date: 2024-03-25 15:39:41
 * @Description: eslint配置
 * @FilePath: /react-18.2/src/view/doc/eslint.js
 */
import React from 'react'

function Eslint () {
  return (
    <div className='pg-doc'>
      <h1>eslint配置说明</h1>
      <h2>安装Eslint</h2>
      <h3>第1步：安装Eslint</h3>
      <p>npm install eslint --save-dev</p>
      <p>版本号：8.57.0</p>
      <h3>第2步：执行初始话命令</h3>
      <p>npx eslint --init</p>
      <p><img alt='执行该命令后进入的问答模式' src='images/eslint.png' /></p>
      <p>eslint初始话过程中会安装eslint-plugin-react，完成后会在根目录生成.eslintrc.js文件</p>
      <h3>第3步：更新.eslintrc.js文件</h3>
      <p>主要是更新一些具体的rules规则，如：空格、换行、缩进等</p>
    </div>
  )
}

export default Eslint

