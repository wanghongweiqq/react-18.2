/*
 * @Author: 王宏伟
 * @Email：wanghongwei@hualala.com
 * @Date: 2024-03-25 15:39:41
 * @Description: stylelint配置说明
 * @FilePath: /react-18.2/src/view/doc/stylelint.js
 */
import React from 'react'

function Stylelint () {
  return (
    <div className='pg-doc'>
      <h1>stylelint配置说明</h1>
      <h2>安装stylelint</h2>
      <h3>第1步：安装依赖stylelint、stylelint-config-recess-order、stylelint-config-standard</h3>
      <p>npm i -D stylelint@14 stylelint-config-recess-order@3 stylelint-config-standard@26</p>
      <p><img alt='stylelint相关的依赖包' src={require('../../assets/images/doc/stylelint.png')} /></p>
      <p>因为stylelint大版本15及其以后删除了好多（76条）样式规则，所以我们使用14版本，配套的两个依赖也要使用对应的版本</p>
      <p>15版本及其后续的最新16版本，建议使用prettier去做样式美化，自己走更高大上的路线了，弃用之前的规则，原因如下：</p>
      <p>1、专注于编写和维护有助于你 避免错误 和 强制执行（非文体）惯例 的规则，这两者都是 Stylelint 所独有的</p>
      <p>2、使我们的代码库现代化，例如 迁移到 ESM，以便我们可以更新依赖并确保 Stylelint 的安全</p>
      <h3>第2步：创建配置文件.stylelintrc.js</h3>
      <p><img alt='stylelintrc的配置' src={require('../../assets/images/doc/stylelintrc.png')} /></p>
    </div>
  )
}

export default Stylelint

