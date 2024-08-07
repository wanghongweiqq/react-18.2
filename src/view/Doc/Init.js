/*
 * @Author: 王宏伟
 * @Email：wanghongwei@hualala.com
 * @Date: 2024-03-25 15:39:41
 * @Description: 项目初始化说明
 * @FilePath: /react-18.2/src/view/Doc/Init.js
 */

import React from 'react'

function Init () {
  return (
    <div className='pg-doc'>
      <h1>react项目创建说明</h1>
      <h2>react版本说明</h2>
      <table>
        <tbody>
          <tr><td width='140'>时间</td><td>2024年03月04日</td></tr>
          <tr><td>react</td><td>18.2.0</td></tr>
          <tr><td>node</td><td>21.4.0</td></tr>
          <tr><td>npm</td><td>10.2.4（使用npx create-react-app xxx，npm 5.2+；使用npm init react-app xxx，npm 6+）</td></tr>
          <tr><td>create-react-app</td><td>5.0.1</td></tr>
        </tbody>
      </table>
      <h2>1、删除之前可能全局安装过的create-react-app</h2>
      <p>&gt; sudo npm uninstall -g create-react-app</p>
      <p>PS:不执行sudo，会报错如下：</p>
      <p><img alt='uninstall报错' src={require('@/assets/images/doc/react-uninstall.png')} /></p>
      <h2>2、npx创建项目</h2>
      <p>&gt; sudo npx create-react-app react-18.2</p>
      <p>PS:不执行sudo，会报错如下：</p>
      <p><img alt='create-react-app 安装过程' src={require('@/assets/images/doc/react-creat.png')} /></p>
      <p><img alt='不执行sudo，create-react-app 安装报错' src={require('@/assets/images/doc/permissions-no.png')} /></p>
      <h2>3、确认文件夹内文件是否有编辑权限</h2>
      <p>如若没有权限，选取“文件”&gt;“显示简介”，点击右下角的“开锁”图标，输入密码后再点击弹出式菜单图标，选取“应用到包含的项目”，如下图。</p>
      <p><img alt='文件夹权限操作' src={require('@/assets/images/doc/folder-permissions.png')} /></p>
      <h2>4、初始化后的package.json如下</h2>
      <p><img alt='初始化后的package' src={require('@/assets/images/doc/package-init.png')} /></p>
      <table>
        <tbody>
          <tr><td colSpan='2'><b>dependencies</b></td></tr>
          <tr><td width='140'>react</td><td>核心包</td></tr>
          <tr><td>react-dom</td><td>用于浏览器渲染使用到的包</td></tr>
          <tr><td>react-scripts</td><td>封装了对 webpack 的配置</td></tr>
          <tr><td>web-vitals</td><td>网站指标监测（关键字：reportWebVitals）</td></tr>
          <tr><td>@testing-library/xxx</td><td>前端测试工具（文件：setupTests.js、App.test.js，启动脚本：npm run test）</td></tr>
          <tr><td colSpan='2'><b>scripts</b></td></tr>
          <tr>
            <td>start</td>
            <td>
              <p>启动开发环境任务</p>
              <p><em>npm start和npm run start的区别</em></p>
              <p>npm start和npm run start在功能上是等效的，‌但它们的使用场景和便捷性有所不同。‌</p>
              <p>npm start是npm的内置命令(可以用npm help查看有哪些内置命令，如npm install等)之一，‌专门用于启动项目。‌当在项目的根目录下运行npm start命令时，‌npm会在package.json文件中查找scripts字段中定义的start命令并执行它。‌如果找到了该命令，‌就会执行该命令来启动项目；‌否则，‌会报错。‌因此，‌npm start是一个特殊的、‌内置的命令，‌用于启动项目。‌‌</p>
              <p>npm run start则是通过运行npm run script_name的形式来执行package.json文件中的自定义脚本。‌在这里，‌script_name是在package.json文件中定义的脚本名称。‌与npm start不同的是，‌npm run可以运行除了start以外的其他自定义脚本，‌而且必须显式地指定脚本名称。‌因此，‌npm run start和npm start在功能上是相同的，‌都是执行package.json文件中定义的start脚本，‌但前者提供了更多的灵活性，‌允许用户运行其他自定义脚本。‌‌</p>
              <p>简而言之，‌npm start提供了一个便捷的方式来启动项目，‌特别是当项目配置了默认的启动命令时；‌而npm run start则提供了更广泛的用途，‌可以用于运行项目中定义的任何脚本，‌但需要显式地指定脚本名称。‌</p>

            </td>
          </tr>
          <tr><td>build</td><td>启动构建任务（构建生产环境下使用到的资源）</td></tr>
          <tr><td>test</td><td>启动测试任务</td></tr>
          <tr>
            <td>eject</td>
            <td>
              <p>弹出 webpack 的配置到项目本地（将 webpack 的配置还原到项目目录下，这种弹出操作是不可撤销的），后面为了设置别名@=/src进行了该操作 </p>
              <p><img alt='npm run eject后的产物' src={require('@/assets/images/doc/run-eject.png')} /></p>
            </td>
          </tr>
        </tbody>
      </table>
      <h2>5、特别注意的点</h2>
      <table>
        <tbody>
          <tr>
            <td width='100'>StrictMode</td>
            <td>&lt;React.StrictMode&gt;可以放在render返回结构的最外层，是一个用来检查项目中潜在问题的工具。与 Fragment 一样，StrictMode 不会渲染任何可见的 UI。它为其后代元素触发额外的检查和警告。注意：严格模式检查仅在开发模式下运行；它们不会影响生产构建。但是在开发模式下会导致二次重复渲染，所以暂时不使用。</td></tr>
        </tbody>
      </table>
    </div>
  )
}

export default Init

