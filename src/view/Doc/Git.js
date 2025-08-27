/*
 * @Author: 王宏伟
 * @Email：wanghongwei@hualala.com
 * @Date: 2024-03-25 15:39:41
 * @Description: git说明
 * @FilePath: /react-18.2/src/view/Doc/Git.js
 */
import React from 'react'

function Git () {
  const sshCopyShell = 'tr -d \'\n\' < ~/.ssh/id_ed25519.pub | pbcopy'
  return (
    <div className='pg-doc'>
      <h1>git说明</h1>

      <h2>1、github与sourcetree配置</h2>
      <p>sourcetree推送到github时报错：<span className='text-danger'>Support for password authentication was removed on August 13, 2021. Please use a personal access tokens</span></p>
      <h3>方式1：PAT （个人访问令牌）Personal access tokens，无需本地配置，但安全性比较低，</h3>
      <p>在对应的代码服务器生成，生成后一定要记住那一串字符串，因为代码网站不会给你记录该值，忘记只能重新生成，重新生成的话之前的都会失效</p>
      <table>
        <tbody>
          <tr>
            <td width='120'>GitHub tokens</td>
            <td>
              <p>1、登入你的GitHub账号</p>
              <p>2、依次点击【右上角个人头像】→【Settings】→【Developer settings】→左边菜单【Personal access tokens】→下拉选项【Tokens (classic)】，可以选择生成一个永久有效的token</p>
              <p>3、注意创建成功记得保存下你的token，后面需要使用</p>
              <p><img alt='GitHub创建Personal access tokens' src={require('@/assets/images/doc/github-token.png')} /></p>
            </td>
          </tr>
          <tr>
            <td>sourcetree配置</td>
            <td>
              <p>1、配置【URL】路径为：git的HTTPS链接前加上token和@，如https://<em>yourtoken@</em>github.com/……，之前为git的HTTPS链接 </p>
              <p>2、使用场景如下 </p>
              <p>2.1、新建（直接克隆远程）：顶部菜单【文件】→【新建】→弹窗窗口里在【新进】下拉菜单下选择→【从URL克隆】，在弹窗的窗口中填写【源URL】</p>
              <p>2.2、已有项目（未关联远程）：在soursetree窗口的右上角点击【设置】→弹窗窗口中选择【远程仓库】→【添加】→ 弹窗窗口中填写【URL/路径】</p>
              <p><img alt='sourcetree配置' src={require('@/assets/images/doc/github-url.png')} /></p>
            </td>
          </tr>
        </tbody>
      </table>

      <h3>方式2：SSH keys（Secure Shell Keys）是一种基于非对称加密技术的身份验证凭证，需要本地生成对应的密钥</h3>
      <p>用于在不安全的网络中建立安全的远程连接。它由一对密钥组成：公钥（Public Key）和私钥（Private Key），通过加密机制确保通信的安全性和身份的真实性。基本组成与原理：</p>
      <p>公钥：可公开分享，用于加密数据或验证签名。通常存储在远程服务器（如 GitHub、云服务器）,如 ~/.ssh/id_rsa.pub</p>
      <p>私钥：必须严格保密，用于解密数据或生成签名。保存在本地根目录，如 ~/.ssh/id_rsa，这个保密不要透露给别人</p>
      <p>工作原理：当用户通过 SSH 连接服务器时，服务器用公钥加密随机字符串发送给客户端，客户端用私钥解密并返回，验证通过后建立加密通道。</p>
      <table>
        <tbody>
          <tr>
            <td width='120'>SSH keys生成</td>
            <td>
              <h4>参数解释</h4>
              <p>-t：类型：ED25519 算法（最好）、RSA 算法、ECDSA 算法；</p>
              <p>-f：文件位置；</p>
              <p>-C：注释内容，一般邮箱；</p>
              <p>-b：长度</p>
              <h4>执行脚本</h4>
              <p>以下方式任选其一：</p>
              <p>一、自动化操作（不需要输入任何，一步到位）</p>
              <p>ssh-keygen -t ed25519 -f ~/.ssh/id_ed25519 -N</p>
              <p>ssh-keygen -t rsa -b 4096 -C &quot;your_email@example.com&quot;</p>
              <p>二、如果不想添加注释的话，输入下面的命令，一路回车即可。</p>
              <p>ssh-keygen -t ed25519</p>
              <p>三、如果需要注释的话，输入下面的命令，注释内容不要带空格</p>
              <p>ssh-keygen -t ed25519 -C &quot;&lt;注释内容&gt;&quot;</p>
              <p><img alt='SSH keys' width={500} src={require('@/assets/images/doc/ssh-keys.png')} /></p>
            </td>
          </tr>
          <tr>
            <td>代码服务器配置</td>
            <td>
              <h4>1、复制xxx.pub代码</h4>
              <p>以下方式任选其一</p>
              <p>一、复制.pub代码，可以组合键 cmd+shift+. 打开隐藏文件，然后在.ssh文件夹找到对应的.pub文件，打开后拷贝代码。</p>
              <p>二、也可使用命令行：{JSON.stringify(sshCopyShell)}</p>
              <h4>2、代码服务器上设置SSH Key</h4>
              <p>以github为例：右侧头像 -&gt; Settings -&gt; 左侧 SSH and GPG keys -&gt; 填写相关信息，将复制的xxx.pub代码粘贴进Key/公约栏里，Title: 自由发挥，Key type:Authentication Key</p>
              <p>要使用SSH的格式去配置仓库地址：如 git@github.com:wanghongweiqq/react-18.2.git，HTTPS的话能够克隆，但无法推送</p>
            </td>
          </tr>
        </tbody>
      </table>

      <h2>2、git提交前“pre-commit”校验eslint</h2>

      <h3>第1步：安装husky</h3>
      <p><em>npm i husky -D</em></p>
      <p>版本号：9.0.11</p>
      <p>编辑package.json在script里添加<em>&quot;prepare&quot;</em>，值为<em>&quot;husky install&quot;</em></p>
      <p><img alt='script prepare' src={require('@/assets/images/doc/husky-install.png')} /></p>
      <p>执行<em>npm run prepare</em>，创建 .husky 目录（.husky是隐藏文件夹，查看和关闭隐藏文件夹的快捷键：ctrl+shift+.），该命令修改了.git/config文件里的hooksPath字段=.husky/_（设置 .husky 目录为 git hooks 的目录）</p>
      <p><img alt='husky修改git config的hooksPath字段=.husky/_' src={require('@/assets/images/doc/husky-result.png')} /></p>
      <p>.husky目录下只有一个_的文件夹，内含的.gitignore文件用*将所有文件忽略了，不在git的跟踪范围内，在.husky目录下创建一个pre-commit文件，里面放入代码 npm run lint</p>
      <p><img alt='pre-commit的修改' src={require('@/assets/images/doc/pre-commit.png')} /></p>
      <p>编辑package.json在script里添加<em>&quot;lint&quot;</em>的值为<em>&quot;eslint .&quot;</em></p>
      <p><img alt='script-lint的添加' src={require('@/assets/images/doc/script-lint.png')} /></p>
      <p>至此提交时，就会对文件进行eslint校验，但是对全部文件校验，而我们希望的是对已暂存的文件进行提交前校验，这就需要再引入<em>lint-staged</em></p>

      <h3>第2步：安装int-staged</h3>
      <p>lint-staged作用：对 Git 暂存区代码文件进行 bash 命令操作等等。</p>
      <p><em>npm i lint-staged -D</em></p>
      <p>版本号：15.2.2</p>
      <p><img alt='husky和lint-staged的安装' src={require('@/assets/images/doc/husky-lint-staged.png')} /></p>
      <p>package.json添加如下</p>
      <p><img alt='lint-staged的配置' src={require('@/assets/images/doc/lint-staged.png')} /></p>

      <h2>3、git提交前“pre-commit”校验stylelint</h2>
      <p>前提是已配置好stylelint，配置过程见<a target='_blank' href='/doc/stylelint'>stylelint安装教程</a></p>
      <p><img alt='commitlint.config文件内容' src={require('@/assets/images/doc/pre-commit-lint.png')} /></p>
      <h3>PS：关于蓝色区域的特别说明</h3>
      <p>蓝色的辅助命令可以不用设置，主要是为了检查和修复，检查用xxxlint，修复用xxxlint-fix，慎用自动修复，因自动修复有可能改动量比较大，产生后果难以预测</p>
      <p>eslint src命令里的src指根目录下的src文件夹，指定src可使lint校验的更具体、高效</p>
      <p>eslint . 指的是执行整个项目目录里的文件，貌似node_modules等不在执行范围内，是否与.gitignore有关待确认。</p>
      <p>eslint 后必须指定文件路径，如果为空，不做任何处理</p>
      <p>npm run eslint = npx eslint src（npx 后面是具体要执行的命令，其值可与scripts里对应的命令的值相同）</p>
      <p>npm run eslint-fix = npx eslint src --fix = npm run eslint <em>--</em> --fix（ <em>--</em> 有连接符的意思，转化为具体的命令时会自动消失 ）</p>
      <p>npx是一个由Node.js官方提供的用于快速执行npm包中的可执行文件的工具。它可以帮助我们在不全局安装某些包的情况下，直接运行该包提供的命令行工具。npx会在执行时，检查本地项目中是否安装了对应的依赖，如果没有安装则会自动下载安装，并执行命令。如果本地已经存在该依赖，则直接执行命令。</p>
      <p>使用npx时，可以在命令行中输入要执行的包名加上其参数，例如：npx create-react-app my-app</p>

      <h2>4、git提交时校验“commit-msg”</h2>
      <h3>第1步：安装依赖：@commitlint/cli 和 @commitlint/config-conventional</h3>
      <p><em>sudo npm i @commitlint/cli @commitlint/config-conventional -D</em></p>
      <p>版本号如下图，好奇怪不用sudo安装会报权限不足的错误</p>
      <p><img alt='@commitlint/cli和@commitlint/config-conventional的安装' src={require('@/assets/images/doc/commitlint.png')} /></p>
      <p>在.husky文件夹里新建commit-msg文件，编辑内容如为：npx --no-install commitlint --edit &quot;$1&quot;</p>
      <p><img alt='commit-msg文件内容' src={require('@/assets/images/doc/commit-msg.png')} /></p>
      <p>在项目根目录下新建文件commitlint.config.js，编辑内容如下</p>
      <p><img alt='commitlint.config文件内容' src={require('@/assets/images/doc/commitlint-config.png')} /></p>

    </div>
  )
}

export default Git

