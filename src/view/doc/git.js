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

      <h2>1、github与sourcetree配置</h2>
      <p>sourcetree推送到github时报错：Support for password authentication was removed on August 13, 2021. Please use a personal access tokens</p>
      <table>
        <tr>
          <td>GitHub tokens</td>
          <td>
            <p>1、登入你的GitHub账号</p>
            <p>2、依次点击【右上角个人头像】→【Settings】→【Developer settings】→左边菜单【Personal access tokens】→下拉选项【Tokens (classic)】，可以选择生成一个永久有效的token</p>
            <p>3、注意创建成功记得保存下你的token，后面需要使用</p>
            <p><img alt='GitHub创建Personal access tokens' width='1000' src={require('../../assets/images/doc/github-token.png')} /></p>
          </td>
        </tr>
        <tr>
          <td>sourcetree配置</td>
          <td>
            <p>1、配置【URL】路径为：git的HTTPS链接前加上token和@，如https://<em>yourtoken@</em>github.com/……，之前为git的HTTPS链接 </p>
            <p>2、使用场景如下 </p>
            <p>2.1、新建（直接克隆远程）：顶部菜单【文件】→【新建】→弹窗窗口里在【新进】下拉菜单下选择→【从URL克隆】，在弹窗的窗口中填写【源URL】</p>
            <p>2.2、已有项目（未关联远程）：在soursetree窗口的右上角点击【设置】→弹窗窗口中选择【远程仓库】→【添加】→ 弹窗窗口中填写【URL/路径】</p>
            <p><img alt='sourcetree配置' width='600' src={require('../../assets/images/doc/github-url.png')} /></p>
          </td>
        </tr>
      </table>

      <h2>2、git提交前“pre-commit”校验eslint</h2>

      <h3>第1步：安装husky</h3>
      <p><em>npm i husky -D</em></p>
      <p>版本号：9.0.11</p>
      <p>编辑package.json在script里添加<em>&quot;prepare&quot;</em>的值为<em>&quot;husky install&quot;</em></p>
      <p><img alt='script prepare' src={require('../../assets/images/doc/husky-install.png')} /></p>
      <p>执行<em>npm run prepare</em>，创建 .husky 目录（.husky是隐藏文件夹，查看和关闭隐藏文件夹的快捷键：ctrl+shift+.），该命令修改了.git/config文件里的hooksPath字段=.husky/_（设置 .husky 目录为 git hooks 目录）</p>
      <p><img alt='husky修改git config的hooksPath字段=.husky/_' src={require('../../assets/images/doc/husky-result.png')} /></p>
      <p>.husky目录下只有一个_的文件夹，内含的.gitignore文件用*将所有文件忽略了，不在git的跟踪范围内，在.husky目录下创建一个pre-commit文件，里面放入代码 npm run lint</p>
      <p><img alt='pre-commit的修改' src={require('../../assets/images/doc/pre-commit.png')} /></p>
      <p>编辑package.json在script里添加<em>&quot;lint&quot;</em>的值为<em>&quot;eslint .&quot;</em></p>
      <p><img alt='script-lint的添加' src={require('../../assets/images/doc/script-lint.png')} /></p>
      <p>至此提交时，就会对文件进行eslint校验，但是对全部文件校验，而我们希望的是对已暂存的文件进行提交前校验，这就需要再引入<em>lint-staged</em></p>

      <h3>第2步：安装int-staged</h3>
      <p>lint-staged作用：对 Git 暂存区代码文件进行 bash 命令操作等等。</p>
      <p><em>npm i lint-staged -D</em></p>
      <p>版本号：15.2.2</p>
      <p><img alt='husky和lint-staged的安装' src={require('../../assets/images/doc/husky-lint-staged.png')} /></p>
      <p>package.json添加如下</p>
      <p><img alt='lint-staged的配置' src={require('../../assets/images/doc/lint-staged.png')} /></p>
      <h2>3、git提交时校验“commit-msg”</h2>
      <h3>第1步：安装依赖：@commitlint/cli 和 @commitlint/config-conventional</h3>
      <p><em>sudo npm i @commitlint/cli @commitlint/config-conventional -D</em></p>
      <p>版本号如下图，好奇怪不用sudo安装会报权限不足的错误</p>
      <p><img alt='@commitlint/cli和@commitlint/config-conventional的安装' src={require('../../assets/images/doc/commitlint.png')} /></p>
      <p>在.husky文件夹里新建commit-msg文件，编辑内容如为：npx --no-install commitlint --edit &quot;$1&quot;</p>
      <p><img alt='commit-msg文件内容' src={require('../../assets/images/doc/commit-msg.png')} /></p>
      <p>在项目根目录下新建文件commitlint.config.js，编辑内容如下</p>
      <p><img alt='commitlint.config文件内容' src={require('../../assets/images/doc/commitlint-config.png')} /></p>

    </div>
  )
}

export default Git

