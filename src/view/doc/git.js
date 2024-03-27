/*
 * @Author: 王宏伟
 * @Email：wanghongwei@hualala.com
 * @Date: 2024-03-25 15:39:41
 * @Description: git说明
 * @FilePath: /react-18.2/src/view/doc/git.js
 */
import React from 'react'

function Git () {
  return (
    <div className='pg-doc'>
      <h1>git说明</h1>
      <h2>github与sourcetree配置</h2>
      <p>sourcetree推送到github时报错：Support for password authentication was removed on August 13, 2021. Please use a personal access tokens</p>
      <table>
        <tr>
          <td>GitHub tokens</td>
          <td>
            <p>1、登入你的GitHub账号</p>
            <p>2、依次点击【右上角个人头像】→【Settings】→【Developer settings】→左边菜单【Personal access tokens】→下拉选项【Tokens (classic)】，可以选择生成一个永久有效的token</p>
            <p>3、注意创建成功记得保存下你的token，后面需要使用</p>
            <p><img alt='GitHub创建Personal access tokens' width='1000' src='images/github-token.png' /></p>
          </td>
        </tr>
        <tr>
          <td>sourcetree配置</td>
          <td>
            <p>1、配置【URL】路径为：git的HTTPS链接前加上token和@，如https://<em>yourtoken@</em>github.com/……，之前为git的HTTPS链接 </p>
            <p>2、使用场景如下 </p>
            <p>2.1、新建（直接克隆远程）：顶部菜单【文件】→【新建】→弹窗窗口里在【新进】下拉菜单下选择→【从URL克隆】，在弹窗的窗口中填写【源URL】</p>
            <p>2.2、已有项目（未关联远程）：在soursetree窗口的右上角点击【设置】→弹窗窗口中选择【远程仓库】→【添加】→ 弹窗窗口中填写【URL/路径】</p>
            <p><img alt='sourcetree配置' width='600' src='images/github-url.png' /></p>
          </td>
        </tr>
      </table>
      <h2>git提交校验eslint</h2>
      <h3>第1步：安装husky</h3>
      <p>npm install husky -D</p>

    </div>
  )
}

export default Git

