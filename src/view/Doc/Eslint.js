/*
 * @Author: 王宏伟
 * @Email：wanghongwei@hualala.com
 * @Date: 2024-03-25 15:39:41
 * @Description: eslint配置说明
 * @FilePath: /react-18.2/src/view/doc/eslint.js
 */
import React from 'react'

function Eslint () {
  return (
    <div className='pg-doc'>
      <h1>eslint配置说明</h1>
      <h2>安装eslint</h2>
      <h3>第1步：安装eslint</h3>
      <p>npm install eslint --save-dev</p>
      <p>版本号：8.57.0</p>
      <h3>第2步：执行初始话命令</h3>
      <p>npx eslint --init</p>
      <p><img alt='执行该命令后进入的问答模式' src={require('@/assets/images/doc/eslint.png')} /></p>
      <p>eslint初始话过程中会安装eslint-plugin-react，完成后会在根目录生成.eslintrc.js文件</p>
      <h3>第3步：更新.eslintrc.js文件</h3>
      <p>3.1、主要是更新一些具体的rules规则，如：空格、换行、缩进等</p>
      <p>3.2、环境env里添加node， 防止node的语法报错，如require/module.exports等报错 not defined</p>
      <p>3.3、设置settings，为react制定版本号，detect：是告诉ESLint去自动检测项目中安装的React版本，并使用相应的React规则。</p>
      <p><img alt='eslint的更新项' src={require('@/assets/images/doc/eslintrc.png')} /></p>

      <h2>安装eslint-plugin-import</h2>
      <p>该插件目的在于支持ES6以上的导入/导出语法，并防止文件路径和导入名称拼写错误的问题。</p>
      <h3>第1步：安装eslint-plugin-import</h3>
      <p>npm i -D eslint-plugin-import</p>
      <p><img alt='安装eslint-plugin-import' src={require('@/assets/images/doc/package-react-plugin-import.png')} /></p>
      <h3>第2步：更新.eslintrc.js文件</h3>
      <p>采用方式1：直接引用官方推荐的导入/导出规则，也可在方式1的基础上在rules里做个性化的配置</p>
      <p><img alt='eslint-plugin-import的更新项' src={require('@/assets/images/doc/plugin-import.png')} /></p>

    </div>
  )
}

export default Eslint

