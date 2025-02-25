/*
 * @Author: 王宏伟
 * @Email：wanghongwei@hualala.com
 * @Date: 2024-07-30 15:09:59
 * @Description: Webpack知识点
 * @FilePath: /react-18.2/src/view/Doc/Webpack.js
 */
import React from 'react'

function Webpack () {
  return (
    <div className='pg-doc'>
      <h1>Webpack 概览</h1>
      <p>Webpack是一个用于现代JS应用程序的静态模块打包工具。当Webpack处理应用程序时，它会在内部从一个或多个入口点构建一个依赖图(dependency graph)，然后将你项目中所需的每一个模块组合成一个或多个 bundles，它们均为静态资源，用于展示你的内容。</p>

      <h3>Webpack的核心概念：</h3>
      <table>
        <thead>
          <tr><th width='60'>属性</th><th>说明</th></tr>
        </thead>
        <tbody>
          <tr>
            <td>entry</td>
            <td>入口，指示Webpack应该使用哪个模块，来作为构建其内部依赖图(dependency graph) 的开始</td>
          </tr>
          <tr>
            <td>output</td>
            <td>输出，告诉Webpack在哪里输出它所创建的 bundle，以及如何命名这些文件</td>
          </tr>
          <tr>
            <td>loader</td>
            <td>加载器，模块转换器，webpack默认只能理解Javascript和JSON文件，这是webpack开箱可用的自带能力，而无法识别css、图片等静态资源。loader能将这些类型的文件转换为让webpack识别的有效模块，以供应用程序使用。loader还会将模块之间的依赖关系添加到依赖图中</td>
          </tr>
          <tr>
            <td>plugin</td>
            <td>插件，在webpack运行的生命周期中会广播出许多事件，plugin可以监听这些事件，在合适的时机通过webpack提供的api改变输出结果。插件作用于整个编译过程，‌可以监听几乎所有的编译事件，‌并在特定的时机执行相应的操作。‌目的在于解决loader无法实现的其他事。常见的有：打包优化，资源管理，注入环境变量，‌压缩代码、‌生成HTML文件等。‌</td>
          </tr>
          <tr>
            <td>module</td>
            <td>模块，在Webpack里一切皆模块，一个模块对应着一个文件。Webpack会从配置的Entry开始递归找出所有依赖的模块</td>
          </tr>
          <tr>
            <td>chunk</td>
            <td>代码块，一个chunk由多个模块组合而成，用于代码合并与分割</td>
          </tr>
          <tr>
            <td>mode</td>
            <td>模式，可选值为none、development、production，一般只用到后两种。不同mode下webpack会使用相应模式的内置优化，如：development会保留注释，chunk启用精简的名称，而production就会删除注释，chunk启用带hash的名称</td>
          </tr>
        </tbody>
      </table>

      <h3>Webpack的工作流程：</h3>
      <table>
        <thead>
          <tr><th width='120'>阶段</th><th width='160'>内容</th><th>说明</th></tr>
        </thead>
        <tbody>
          <tr>
            <td rowSpan={3}>一、初始化阶段</td>
            <td>1、读取配置</td>
            <td>Webpack通过读取其配置文件（通常名为webpack.config.js）来确定项目的构建规则和输出。这个文件包含了入口（entry）、出口（output）、模块（module）、插件（plugins）等配置信息。</td>
          </tr>
          <tr>
            <td>2、初始化参数</td>
            <td>从配置文件和命令行shell脚本中读取并合并参数，得出最终的配置参数。</td>
          </tr>
          <tr>
            <td>3、创建Compiler实例</td>
            <td>使用这些参数初始化Compiler对象，并加载所有配置的插件，并执行run方法开始编译过程。</td>
          </tr>
          <tr>
            <td rowSpan={3}>二、编译阶段</td>
            <td>1、确定入口</td>
            <td>根据配置中的entry找出所有的入口文件。这些入口文件是Webpack构建依赖图的起点。</td>
          </tr>
          <tr>
            <td>2、编译模块</td>
            <td>
              <p>1. 从入口文件出发，Webpack会递归地找出所有依赖的模块。</p>
              <p>2. 调用所有配置的Loader对模块进行翻译。Loader可以将模块从一种格式转换为另一种格式，例如将ES6代码转换为ES5代码，或将CSS文件转换为JavaScript模块。</p>
              <p>3. 在这个过程中，Webpack会构建出一个模块依赖图，这个图表示了所有模块之间的依赖关系。</p>
            </td>
          </tr>
          <tr>
            <td>3、完成模块编译</td>
            <td>经过Loader翻译后，Webpack得到了每个模块被翻译后的最终内容以及它们之间的依赖关系。</td>
          </tr>
          <tr>
            <td rowSpan={2}>三、输出阶段</td>
            <td>1、输出资源</td>
            <td>根据入口和模块之间的依赖关系，Webpack将模块组合成一个个包含多个模块的Chunk（代码块）。然后，Webpack将这些Chunk转换成一个或多个文件，并加入到输出列表中。</td>
          </tr>
          <tr>
            <td>2、写入文件系统</td>
            <td>在确定好输出内容后，Webpack根据output配置确定输出的路径和文件名，并将文件内容写入到文件系统中。</td>
          </tr>
          <tr>
            <td>四、插件执行</td>
            <td colSpan={2}>在Webpack的构建过程中，插件可以在特定的时机执行特定的任务。Webpack通过Tapable来组织这条复杂的构建流程，插件只需要监听它所关心的事件，就能在事件发生时执行相应的逻辑。例如，插件可以用于代码压缩、图片压缩、定义环境变量等。</td>
          </tr>
        </tbody>
      </table>

      <h2>loader</h2>
      <p>loader，作为Webpack的核心组件之一，负责对各种类型的静态资源进行转换处理，使之成为可被浏览器识别的模块.</p>
      <p>在webpack.config.js中，我们通过module.rules来定义loader的使用规则，rules为一个对象格式的数组，其每个对象包含如下属性</p>
      <table>
        <thead>
          <tr><th width='60'>属性</th><th>说明</th></tr>
        </thead>
        <tbody>
          <tr>
            <td>test</td>
            <td>必选属性，识别出哪些文件会被转换，一般使用正则表达式，可以是单个正则字面量，也可以是一个含多个正则字面量的数组，如：[ /\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/ ]</td>
          </tr>
          <tr>
            <td>use</td>
            <td>必选属性，定义出在进行转换时，应该使用哪些loader，数组格式，每个成员一般为一个对象，该对象包含loader、options等属性。</td>
          </tr>
          <tr>
            <td>include</td>
            <td>可选属性，手动添加必须处理的文件（文件夹），支持正则、文件路径等</td>
          </tr>
          <tr>
            <td>exclude</td>
            <td>可选属性，屏蔽不需要处理的文件（文件夹）‌，支持正则、文件路径等</td>
          </tr>
          <tr>
            <td>query</td>
            <td>可选属性，为loaders提供额外的设置选项</td>
          </tr>
        </tbody>
      </table>
      <p>use数组中的<em>loader的执行顺序是从后往前执行</em>，每个loader处理完后再将结果传递给下一个loader，所以<em>书写顺序不能写错</em></p>
      <div className='code'>
        <pre>test: /\.(scss|sass)$/,</pre>
        <pre>use: [&apos;style-loader&apos;, &apos;css-loader&apos;, &apos;postcss-loader&apos;, &apos;sass-loader&apos;, &apos;sass-resources-loader&apos;]</pre>
        <pre>执行顺序为：</pre>
        <pre>1、sass-resources-loader：在scss文件中全局插入sass中设置的变量混入等</pre>
        <pre>2、sass-loader：用于将Sass/Scss语法转换为CSS语法</pre>
        <pre>3、postcss-loader：对css进行转换和处理，如添加浏览器前缀、压缩代码等</pre>
        <pre>4、css-loader：分析出各个css文件之间的关系，处理css的各种加载语法（@import和url()函数等），把各个css文件合并成一段css</pre>
        <pre>5、style-loader：将CSS代码注入到HTML文件中的style标签中，使其能够生效</pre>
      </div>
      <h3>以下是Webpack中常用的一些loader及其用途：‌</h3>
      <table>
        <thead>
          <tr><th width='100'>名称</th><th>说明</th></tr>
        </thead>
        <tbody>
          <tr>
            <td>babel-loader</td>
            <td>将 ES6+ 的代码转换为 ES5 的代码，使其能够在旧版浏览器中运行。</td>
          </tr>
          <tr>
            <td>file-loader</td>
            <td>用于加载文件资源，如图片、字体等，并将其输出到指定的目录中。</td>
          </tr>
          <tr>
            <td>url-loader</td>
            <td>与 file-loader 类似，但可以将小于指定大小的文件转换为 base64 编码，减少HTTP请求的数量。</td>
          </tr>
          <tr>
            <td>eslint-loader</td>
            <td>用于在打包过程中对 JavaScript 代码进行代码质量检查，如语法错误、代码风格等。‌</td>
          </tr>
          <tr>
            <td>ts-loader</td>
            <td>用于将 TypeScript 代码转换为 JavaScript 代码，并交给 babel-loader 处理。</td>
          </tr>
          <tr>
            <td>css相关loader</td>
            <td>见上面代码区域的说明</td>
          </tr>
        </tbody>
      </table>

      <h2>plugin</h2>
      <p>插件是webpack的支柱功能。插件目的在于解决loader无法实现的其他事。常见的有：打包优化，资源管理，注入环境变量，‌压缩代码、‌生成HTML文件等。‌</p>
      <p>webpack 在编译代码过程中，会触发一系列 Tapable 钩子事件，插件所做的，就是找到相应的钩子，往上面挂上自己的任务，也就是注册事件，这样，当webpack构建的时候，插件注册的事件就会随着钩子的触发而执行了。</p>
      <p>要使用某个插件，需要通过npm安装，然后在plugins属性下添加该插件的一个实例。多数插件可以通过选项自定义，也可以在配置文件中因为不同目的而多次使用同一个插件</p>
      <div className='code'>
        <pre>plugins: [</pre>
        <pre>  new HtmlWebpackPlugin(&#123; template: &apos;../public/index.html&apos; &#125;)</pre>
        <pre>  new webpack.BannerPlugin(&apos;王宏伟版权所有，翻版必究&apos;)</pre>
        <pre>],</pre>
      </div>

      <h3>plugin的创建</h3>
      <p>1、创建一个 JavaScript 文件并导出一个函数。</p>
      <p>2、在这个函数中，你需要调用 Webpack 提供的 compiler 对象。</p>
      <p>3、通过注册不同的事件钩子，你可以介入到 Webpack 的编译流程中。</p>
      <p>4、在注册的事件钩子中，你可以通过 Webpack 提供的 compilation 对象来操作编译过程。</p>
      <p>以下是一个简单的 Webpack 插件示例，当运行 Webpack 构建时，控制台会输出 “编译开始！”。这个插件只是示例，实际的插件可能会更复杂，但基本原理相同。</p>
      <div className='code'>
        <pre>&#47;&#47; simple-webpack-plugin.js</pre>
        <pre>class SimpleWebpackPlugin &#123;</pre>
        <pre>  apply(compiler) &#123;</pre>
        <pre>    compiler.hooks.run.tap(&apos;SimpleWebpackPlugin&apos;, compilation =&gt; &#123;</pre>
        <pre>      console.log(&apos;编译开始！&apos;);</pre>
        <pre>    &#125;);</pre>
        <pre>  &#125;</pre>
        <pre>&#125;</pre>
        <pre>module.exports = SimpleWebpackPlugin;</pre>
        <pre> </pre>
        <pre>&#47;&#47; webpack.config.js</pre>
        <pre>const SimpleWebpackPlugin = require(&apos;./simple-webpack-plugin&apos;);</pre>
        <pre>module.exports = &#123;</pre>
        <pre>  plugins: [</pre>
        <pre>    new SimpleWebpackPlugin()</pre>
        <pre>  ]</pre>
        <pre>&#125;</pre>
      </div>

      <h3>常见plugin介绍</h3>
      <table>
        <thead>
          <tr><th width='220'>名称</th><th>说明</th></tr>
        </thead>
        <tbody>
          <tr>
            <td>html-webpack-plugin</td>
            <td>在build中新建一个index.html文件，自动引入打包输出的所有资源（js/css）.可以配置 template为新html文件创建模板</td>
          </tr>
          <tr>
            <td>ignore-plugin</td>
            <td>用来忽略一些文件</td>
          </tr>
          <tr>
            <td>mini-css-extract-plugin</td>
            <td>将css单独打包成一个文件的css</td>
          </tr>
          <tr>
            <td>clean-webpack-plugin</td>
            <td>用于清除目录文件,在生产环境中编译文件的时候,用它来讲dist的目录清除干净,然后再生成新的</td>
          </tr>
          <tr>
            <td>serviceworker-webpack-plugin</td>
            <td>离线缓存功能</td>
          </tr>
          <tr>
            <td>webpack-parallel-uglify-plugin</td>
            <td>多线程压缩js代码,加快构建速度</td>
          </tr>
        </tbody>
      </table>

      <h2>webpack 编译-compile和构建-build的区别</h2>
      <p>编译和构建是软件开发过程中的两个不同阶段，‌它们各自承担着特定的任务。‌</p>
      <p>编译是指将源代码转换为目标代码的过程，‌即将源代码从一种编程语言转换为另一种编程语言，‌通常是为了适应更低级别的系统或硬件。‌在这个过程中，‌源代码的语言被转变为更为底层的语言，‌以便计算机能够理解和执行。‌编译过程中，‌编译器会检查源代码的语法和语义错误，‌确保代码的正确性。‌编译后的结果通常是目标代码或机器代码，‌这些代码可以直接被计算机执行。‌</p>
      <p>构建则是一个更广泛的过程，‌它包括了编译在内的多个步骤。‌构建过程涉及对源代码的全面处理，‌包括编译、‌链接、‌测试等，‌最终生成一个可以在特定环境下运行的可执行文件或库。‌构建过程中，‌可能会涉及到多个源文件的编译，‌以及将这些编译后的目标文件链接成一个可执行文件。‌此外，‌构建过程还包括了对生成的代码进行调试和优化，‌以确保最终产品的质量和性能。‌</p>
      <p>在Web开发领域，‌特别是在使用工具如Webpack时，‌构建过程还包括了模块打包、‌代码优化、‌资源管理和配置等步骤。‌Webpack通过读取项目中的各个模块，‌按照一定的规则将它们组装起来，‌生成可以在浏览器中运行的代码。‌这个过程不仅包括了编译源代码，‌还包括了代码的压缩、‌合并、‌以及依赖管理等多个环节，‌最终生成可以在网页上运行的JavaScript文件或其他资源。‌</p>
      <p>总的来说，‌编译是源代码到目标代码的转换过程，‌而构建则是一个更广泛的过程，‌包括了编译在内的多个步骤，‌旨在生成一个可以在特定环境下运行的可执行文件或应用程序</p>

      <h2>webpack 构建节点</h2>
      <p>webpack的构建中总会经历如下几个事件节点‌</p>
      <table>
        <thead>
          <tr><th width='100'>名称</th><th>说明</th></tr>
        </thead>
        <tbody>
          <tr>
            <td>before-run</td>
            <td>清除缓存</td>
          </tr>
          <tr>
            <td>run</td>
            <td>注册缓存数据钩子</td>
          </tr>
          <tr>
            <td>compile</td>
            <td>开始编译</td>
          </tr>
          <tr>
            <td>make</td>
            <td>从入口分析依赖以及间接依赖模块，创建模块对象。是整个构建中最核心的部分</td>
          </tr>
          <tr>
            <td>build-module</td>
            <td>模块构建</td>
          </tr>
          <tr>
            <td>seal</td>
            <td>构建结果封装， 不可再更改</td>
          </tr>
          <tr>
            <td>after-compile</td>
            <td>完成构建，缓存数据</td>
          </tr>
          <tr>
            <td>emit</td>
            <td>输出到dist目录</td>
          </tr>
        </tbody>
      </table>

      <h2>path的join和resolve</h2>
      <h3>1.连接路径：path.join([path1][, path2][, ...])</h3>
      <p>path.join( )方法可以连接任意多个字符串格式的路径（其他格式会报错）。要连接的多个路径可做为参数传入，不会校验结果的真实存在性。</p>
      <p>该方法在连接路径的同时也会对路径进行规范化，统一处理为正确的格式后按拼接进行组合。所以除了第一个参数的开头和最后一个参数的结尾，其余地方的开头和结尾有没有/不影响最后的结果。</p>
      <p>该方法不会添加项目自身的路径，除非你在前面通过__dirname指定了该路径。__dirname是指你操作文件夹的绝对路径，不含文件名，如本项目操作文件为/config/webpack.config.js，其__dirname为：/Users/wanghongwei/study/react/react-18.2/config</p>

      <h3>2.路径解析：path.resolve([from ...], to)</h3>
      <p>path.resolve( )方法可以将多个字符串格式的路径解析为一个<em>规范化的绝对路径</em>，当前面的参数都是非String格式且第一合法参数是/开头时，不会报错，会自动忽略这些非法参数，但如果合法参数后有非法参数会报错，如：[ ], &apos;/aaa&apos; 不报错；[ ], &apos;aaa&apos; 报错； &apos;aaa&apos;, [ ] 报错</p>
      <p>其处理方式类似于对这些路径逐一进行cd操作，与cd操作不同的是，这引起路径可以是文件，并且可不必实际存在（resolve()方法不会利用底层的文件系统判断路径是否存在，而只是进行路径字符串操作）‌</p>
      <p>‌特别注意当参数中有绝对路径时（也就是/开头），将会使前面解析的路径结果清空，输出当前参数所代表的路径</p>
      <p>该方法可以理解为会自动以项目路径为起点（本示例为：/Users/wanghongwei/study/react/react-18.2/），然后进行路径操作，当参数为__dirname时就相当于碰到了一个绝对路径，路径瞬间变为运行的这个文件的路径</p>
      <p>‌解析后的路径如果以/结尾，也会被自动忽略掉</p>
      <p>运行文件：/Users/wanghongwei/study/react/react-18.2/config/webpack.config.js</p>
      <p>path引入：const path = require( &apos;path &apos;)，其中结果中 ... = wanghongwei/study/react</p>

      <table>
        <thead>
          <tr><th>运行</th><th>结果</th></tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={2}>path.join()</td>
          </tr>
          <tr>
            <td>path.join()</td>
            <td>.</td>
          </tr>
          <tr>
            <td>path.join(&apos;/a/&apos;,&apos;/b/&apos;,&apos;/c/&apos;)</td>
            <td>/a/b/c/</td>
          </tr>
          <tr>
            <td>path.join(&apos;a/&apos;,&apos;/b/&apos;,&apos;/c&apos;)</td>
            <td>a/b/c</td>
          </tr>
          <tr>
            <td>path.join(__dirname)</td>
            <td>/Users/.../react-18.2/config</td>
          </tr>
          <tr>
            <td>path.join(__dirname, &apos;../src/xxx&apos;)</td>
            <td>/Users/.../react-18.2/src/xxx</td>
          </tr>
          <tr>
            <td>path.join(__dirname, &apos;/src/xxx&apos;)</td>
            <td>/Users/.../react-18.2/config/src/xxx</td>
          </tr>
          <tr>
            <td>path.join(&apos;../src/xxx&apos;)</td>
            <td>../src/xxx</td>
          </tr>
          <tr>
            <td>path.join(&apos;/&apos;, &apos;//&apos;, &apos;/src/xxx&apos;)</td>
            <td>/src/xxx（参数中开头结尾多余的/会进行正确的格式化）</td>
          </tr>
          <tr>
            <td colSpan={2}>path.resolve()</td>
          </tr>
          <tr>
            <td>path.resolve()</td>
            <td>/Users/.../react-18.2</td>
          </tr>
          <tr>
            <td>path.resolve(&apos;/a/&apos;,&apos;/b/&apos;,&apos;/c/&apos;)</td>
            <td>/c</td>
          </tr>
          <tr>
            <td>path.resolve(&apos;a/&apos;,&apos;/b/&apos;,&apos;/c&apos;)</td>
            <td>/c</td>
          </tr>
          <tr>
            <td>path.resolve(__dirname)</td>
            <td>/Users/.../react-18.2/config</td>
          </tr>
          <tr>
            <td>path.resolve(__dirname, &apos;../src/xxx&apos;)</td>
            <td>/Users/.../react-18.2/src/xxx</td>
          </tr>
          <tr>
            <td>path.resolve(__dirname, &apos;/src/xxx&apos;)</td>
            <td>/src/xxx</td>
          </tr>
          <tr>
            <td>path.resolve(&apos;../src/xxx&apos;)</td>
            <td>/Users/.../src/xxx</td>
          </tr>
          <tr>
            <td>path.resolve(&apos;/&apos;, &apos;//&apos;, &apos;../src/xxx&apos;)</td>
            <td>/src/xxx（退无可退时，以第一个有效路径/src/作为绝对路径的开始）</td>
          </tr>
        </tbody>
      </table>

      <h2>require.resolve</h2>
      <p>require.resolve( )主要用于Node.js模块系统中，‌用于解析模块的路径。‌它会从项目所在目录及所有上级目录的node_modules里查找查找相应的模块。‌当然它也可以解析普通的文件路径。</p>
      <p>相对于path.join( )和path.resolve( )，require.resolve( )支持：</p>
      <p>1、自动匹配后缀（不是所有文件格式都支持，只支持js等），不支持：图片、scss等</p>
      <p>2、要准确的匹配到一个文件（不能是文件夹），如果不存在将会报错：Cannot find module &apos;xxx&apos;。path的两个方法只是拼接一个字符串格式的路径，而不管其存在不存在。</p>
      <p>3、模块解析时，各模块package.json中的main字段有重要作用，它指明入口文件的路径，不设置时为各模块根目录下的index.js文件</p>
      <div className='code'>
        <pre>&#47;&#47; 绝对路径 -&gt; /Users/enhanced-resolve/lib/node.js</pre>
        <pre>&#47;&#47; /Users/enhanced-resolve/package.json中：main: ./lib/node.js，</pre>
        <pre>require.resolve(&apos;/Users/enhanced-resolve/&apos;) </pre>
        <pre> </pre>
        <pre>&#47;&#47; 相对路径 -&gt; /Users/enhanced-resolve/index.js</pre>
        <pre>require.resolve(&apos;./index&apos;)</pre>
        <pre> </pre>
        <pre>&#47;&#47; 模块路径 -&gt; /Users/enhanced-resolve/node_modules/diff/diff.js</pre>
        <pre>&#47;&#47; 返回多个搜索目录[&apos;/Users/enhanced-resolve/node_modules&apos;, &apos;/Users/node_modules&apos;, &apos;/node_modules&apos;];</pre>
        <pre>&#47;&#47; /Users/enhanced-resolve/node_modules/diff/package.json中：main: ./diff，</pre>
        <pre>require.resolve(&apos;diff&apos;)</pre>
      </div>

    </div>
  )
}

export default Webpack

