/*
 * @Author: 王宏伟
 * @Email：wanghongwei@hualala.com
 * @Date: 2024-03-25 15:39:41
 * @Description: 环境变量配置说明
 * @FilePath: /react-18.2/src/view/Doc/Env.js
 */
import React from 'react'

function Env () {
  console.log('process.env')
  console.log(process.env)
  return (
    <div className='pg-doc'>
      <h1>环境变量Env配置说明</h1>

      <h2>推荐使用：dotenv-cli</h2>
      <p>dotenv-cli 中的cli通常指的是命令行界面（‌Command-Line Interface）‌的安装模式，与之对应的为无需依赖命令行的图形用户界面(GUI)。</p>
      <p>在某些情况下，‌如Vue CLI的安装，‌CLI还被用来指代一个特定的命令行工具，‌用于快速（‌自动化）‌构建项目的一个脚手架。</p>
      <h3>1、安装dotenv-cli</h3>
      <p>npm install dotenv-cli --save-dev</p>
      <p>其中dependencies中安装的两个关于dotenv的包是之前eject后出现的，非此次安装，不安装dotenv-cli，执行start（ dotenv -e .env.dev node scripts/start.js）命令时会报错：dotenv无法识别</p>
      <p><img alt='安装dotenv-cli' src={require('@/assets/images/doc/dotenv-cli.png')} /></p>

      <h3>2、新建 .env.xxx的环境文件</h3>
      <p>在项目根目录创建文件，必须为<em>.env.xxx</em>格式，一般命名为为：开发:.env.dev；测试:.env.test；灰度:.env.gray；生产:.env.prod，后面在package.json里会使用该文件名进行配置</p>
      <p><img alt='.env.dev的配置' src={require('@/assets/images/doc/env-dev.png')} /></p>
      <p>需要注意以下几点：</p>

      <p>1. 环境变量每次改动，要重新npm start才能生效</p>
      <p>2. 以key=value的形式且<em>末尾后不可以加分号</em>，加分号后解析e如下截图</p>
      <p><img alt='config下的env文件加分号后的错误输出' src={require('@/assets/images/doc/env-dev-error.png')} /></p>
      <p>3. 该文件的配置key只能以<em>REACT_APP_xxx</em>命名（vue还可以识别NODE_ENV，但react不行）。</p>
      <p>其他名称写了不报错，但不起作用，原因是在config/env.js文件中，getClientEnvironment方法写了如下内容，通过该方法我们得知，只有以REACT_APP_开头设置的环境变量和下面的初始值才能被输出到项目中使用</p>
      <p></p>
      <p><img alt='config下的env文件' src={require('@/assets/images/doc/env-config.png')} /></p>

      <p>4. 项目环境变量：HOST、PORT，可以在package.json中的相应scripts中获取默认值</p>
      <pre>&quot;start&quot;: &quot;HOST=me.tiaofangzi.com PORT=3000 node scripts/start.js&quot;</pre>
      <p>这样执行npm start时，将赋值给process.env.HOST/PORT，不要在scripts/start.js中直接赋值：process.env.PORT = 3000，这样像上面设置了端口号也不会被获取，就失去了获取外部package.json中数据的灵活性</p>
      <p><em>最后建议：</em>修改scripts/start.js中的默认值，这样既不失灵活性也能有正常的默认值，如下图</p>
      <p><img alt='start.js的不建议配置' src={require('@/assets/images/doc/start-no.png')} /></p>
      <p><img alt='start.js的建议配置' src={require('@/assets/images/doc/start-yes.png')} /></p>

      <h3>3、在package.json里加上配置</h3>
      <p><img alt='环境变量在package.json里的配置' src={require('@/assets/images/doc/env-package.png')} /></p>
      <table>
        <thead>
          <tr><th>命令</th><th>说明</th></tr>
        </thead>
        <tbody>
          <tr><td>dotenv</td><td>运行dotenv库的命令</td></tr>
          <tr><td>-e</td><td>是dotenv的选项之一，表示使用一个特定的环境变量文件</td></tr>
          <tr><td>.env.dev</td><td>是指定的环境变量文件名，这个命令会加载.env.dev文件中定义的环境变量</td></tr>
          <tr><td>node scripts/start.js</td><td>运行 start.js，eject后最初生成的start命令</td></tr>
        </tbody>
      </table>
      <p>让我们看看vue项目中的环境变量在package.json里的配置，发现它指定的环境变量文件名只需要.env.后面的部分，省略了公共部分.env.，显得更简洁</p>
      <p><img alt='vue项目中的环境变量在package.json里的配置' src={require('@/assets/images/doc/vue-env-package.png')} /></p>
      <h3>4、使用环境变量</h3>
      <p>主要分两种情况：</p>
      <p>1. 在绝大部分目录下使用：process.env.xxx，如：/src/、/scripts/、/config/等目录下，其中/scripts/、/config/目录是运行相应命令时执行（如npm start），console.log(process.env)在终端的输出会一闪而过，被正常编译的信息覆盖，不方便查看结果。这时可以故意书写一个错误，如scripts/start.js第50行const HOST = process.env.HOST || <em>&apos;me.ad.com&apos;</em>打断其执行，从而方便在终端窗口中查看结果</p>
      <p><img alt='在/src/目录下使用env的示例' src={require('@/assets/images/doc/env-used-1.png')} /></p>
      <p>2. 在/public/目录下使用：%xxx%，如/publicindex.htmlz中使用</p>
      <p><img alt='在/public/index.htmlz中使用env的示例' src={require('@/assets/images/doc/env-used-2.png')} /></p>

      <h2>React自定义环境变量的其他方式</h2>
      <h3>1、node 方式</h3>
      <table>
        <tbody>
          <tr>
            <td>优点</td>
            <td>不需要安装第三方依赖包</td>
          </tr>
          <tr>
            <td>缺点</td>
            <td>有些臃肿，每个指令指向不同的js配置文件</td>
          </tr>
          <tr>
            <td>说明</td>
            <td>
              <p>运行配置：建议复制 start.js （本文演示运行配置）</p>
              <p>打包配置：建议复制 build.js</p>
            </td>
          </tr>
        </tbody>
      </table>
      <p>1. 将scripts中的文件start.js复制一份，重命名demo.js</p>
      <p>2. package.json / scripts 内新增命令：&quot;demo&quot;: &quot;node scripts/demo.js&quot;</p>
      <p><img alt='node 方式第1、2步骤' src={require('@/assets/images/doc/env-node-step-1.png')} /></p>
      <p>3. 编辑 指令文件变量:scripts/demo.js</p>
      <p><img alt='node 方式第3步骤' src={require('@/assets/images/doc/env-node-step-3.png')} /></p>
      <p>4. 配置环境变量 config / env.js 72行附近，见图，不是新增变量的，此步骤直接跳过</p>
      <p>由于案例中变量 HTTP_ENV 是新增的，则配置下，否则不输出。</p>
      <p><img alt='node 方式第3步骤' src={require('@/assets/images/doc/env-node-step-4.png')} /></p>
      <p>5. 使用环境变量：和dotenv-cli中的使用方式一样</p>

      <h3>2、cross-env 方式</h3>
      <p>cross-env 是一个 Node.js 包，用于在不同操作系统上设置环境变量，特别是在运行 JavaScript 脚本时。不同操作系统使用不同的命令来设置环境变量，这可能导致开发人员需要编写不同的脚本来适应不同的平台。cross-env 的目的是解决这个问题，使设置环境变量变得更加便捷和可移植。</p>
      <table>
        <tbody>
          <tr>
            <td>优点</td>
            <td>cross-env方式最常用，也很简便，不需要每个指令指向不同的js配置文件，只需在config / env.js统一输出</td>
          </tr>
          <tr>
            <td>缺点</td>
            <td>需要安装第三方依赖包cross-env，并且当一个指令有多个环境变量时，都写在 package.json / scripts 命令内显得有些杂乱，不方便维护</td>
          </tr>
        </tbody>
      </table>
      <p>1. 安装cross-env：npm install --save-dev cross-env</p>
      <p>2. package.json / scripts 内新增命令：&quot;demo&quot;: &quot;cross-env HTTP_ENV=demo node scripts/start.js&quot;</p>
      <p><img alt='cross-env 方式第2步骤' src={require('@/assets/images/doc/env-cross-step-2.png')} /></p>
      <p>3. 配置环境变量 config / env.js 72行附近，见图，不是新增变量的，此步骤直接跳过</p>
      <p>由于案例中变量 HTTP_ENV 是新增的，则配置下，否则不输出。</p>
      <p><img alt='cross-env 方式第3步骤' src={require('@/assets/images/doc/env-node-step-4.png')} /></p>
      <p>4. 使用环境变量：和dotenv-cli中的使用方式一样</p>

      <h3>3、其他不做详细介绍的方式：webpack serve方式、webpack-dev-server 方式、umi 方式</h3>

    </div>
  )
}

export default Env

