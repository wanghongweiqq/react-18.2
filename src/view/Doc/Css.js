/*
 * @Author: 王宏伟
 * @Email：wanghongwei@hualala.com
 * @Date: 2024-03-25 15:39:41
 * @Description: css说明
 * @FilePath: /react-18.2/src/view/Doc/Css.js
 */
import React from 'react'
import './Css.scss'
import './Css.html.scss'
import styles from './Css.module.scss'

function Css () {
  return (
    <div className='pg-doc pg-css'>
      <h1 id='top'>css说明</h1>
      <h2>选择css预处理器：sass</h2>
      <p>css预处理器定义了一种新的语言，其基本思想是：用一种专门的编程语言，为css增加一些编程的特性，如变量（sass：$变量名，less：@变量名）、混合（Mixin）、嵌套、函数、和运算、继承等特性。</p>
      <p>css预处理器语言无法直接运行，必须先编译（预处理）为css再运行，将css作为目标生成文件，然后开发者就只要使用这种语言进行css的编码工作。</p>
      <p>常见的css预处理器有：Sass、Less和stylus</p>
      <table>
        <tbody>
          <tr>
            <td width='40'><em>sass</em></td>
            <td>
              <p>node-sass 版本号：7.0.3。Sass文件新版的以.scss结尾，老版的以.sass结尾。</p>
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
        </tbody>
      </table>

      <h2>react引入css</h2>
      <p>webpack.config.js中已经对css（默认针对的是.css和sass）的引入做了处理，主要是判断：<em>css文件名称是不是以.module+.css/sass/scss结尾</em>，做了不同的模式mode：</p>
      <p>1、不是.module.css结尾，mode是：icss-全局作用域</p>
      <p>2、是.module.css结尾，mode是：local-局部作用域</p>
      <p><img alt='react对css的默认配置' src={require('@/assets/images/doc/css-module.png')} /></p>

      <h3>1、使用常规的css文件，对应上面的mode-icss</h3>
      <p>创建一个CSS文件，css文件名称不是以.module+.css/sass/scss结尾，并在React组件中引入这个CSS文件。</p>
      <div className='code'>
        <pre>import &apos;./Css.scss&apos;</pre>
        <pre>className=&apos;red bold&apos;</pre>
      </div>
      <p>特点：方便简单，但容易冲突，对命名要求较高，可以使用父级类名相对唯一的层级嵌套规避同名冲突： ly-主结构、pg-页面、cp-公共组件、bcp-业务组件、</p>

      <h3>2、使用css模块，对应上面的mode-local</h3>
      <p>创建一个CSS文件，css文件名称是以.module+.css/sass/scss结尾，并在React组件中引入这个CSS文件。</p>
      <div className='code'>
        <pre>import styles from &apos;./Css.module.scss&apos;</pre>
        <pre>className=&#123;`$&#123; styles.red &#125;  $&#123; styles.bold &#125;`&#125;</pre>
      </div>
      <p>特点：局部作用域，样式不容易冲突，但使用稍显麻烦，特别是多个类名一起使用</p>
      <p>原理：给样式类名重新组合了一个唯一的名称：css文件名前部分 + 样式类名 +5位的哈希值，如：Css_red__5VeQy，定下来之后这个名称就不会变，其他文件引入这个样式表也是同样的类名。</p>
      <p>和vue中style标签下的scoped属性稍有差别，scoped设置后会自动在相应html节点添加自定义属性: data-v-03f66e5f，css会生成带有该属性的样式声明：.button[data-v-03f66e5f]</p>

      <h3>3、使用内联样式</h3>
      <div className='code'>
        <pre>const inlineStyle = &#123; color: &apos;#333&apos;, backgroundColor: &apos;#ccc&apos;, border:  &apos;1px solid #999 &apos; &#125;</pre>
        <pre>style=&#123;inlineStyle&#125;</pre>
      </div>
      <p>特点：js的写法比较灵活，特别是动态输出多样式的时候，就是这种写法比较笨，不是纯css的写法：key中短横线连接的时候要转为大写，value要带引号等，非动态样式时不建议使用</p>

      <h2>设置多个className</h2>
      <h3>1、直接书写多个类名</h3>
      <p>只有采用常规的css文件引入形式，才可以这样使用：直接书写多个css类名，类名间用空格隔开，和传统的css多类名书写格式一样</p>
      <div className='code'>
        <pre>className=&apos;red bold&apos; //也可是一个字符串格式的变量，类似于下面的方法5</pre>
      </div>
      <p className='red bold'>示例：直接书写多个类名</p>

      <h3>2、字符串拼接：styles.red + &apos; &apos; + styles.bold</h3>
      <p>适合静态的多类名，不适合动态的</p>
      <div className='code'>
        <pre>className=&#123; styles.red + &apos; &apos; + styles.bold &#125;</pre>
      </div>

      <h3>3、数组拼接：[ ].join(&apos; &apos;)</h3>
      <p>适合静态的多类名，不适合动态的</p>
      <div className='code'>
        <pre>className=&#123;[ styles.red, styles.bold ].join(&apos; &apos;)&#125;</pre>
      </div>

      <h3>4、模板字符串：` `</h3>
      <p>推荐，当含有变量时，用 $&#123; xxx &#125; 输出，可以使用三元表达式等判断。比较灵活，动态静态皆可。</p>
      <div className='code'>
        <pre>className=&#123;`red $&#123; isActive ? &apos;current&apos; : &apos;normal&apos; &#125;`&#125;</pre>
        <pre>className=&#123;`$&#123; styles.red &#125; $&#123; styles.bold &#125;`&#125;</pre>
        <pre>className=&#123;`$&#123; styles.red &#125; $&#123; isActive ? styles.current : styles.normal &#125;`&#125;</pre>
      </div>
      <p className={`${ styles.red } ${ styles.bold }`}>示例：模板字符串</p>

      <h3>5、外部定义变量：className=&#123; classNamesA &#125;</h3>
      <p>由于定义的变量，逻辑可以写在元素节点的外边，所以非常灵活，可以使用各种js判断。但感觉有点杀鸡用牛刀了，除非很复杂的判断，否则不要使用该形式</p>
      <div className='code'>
        <pre>let classNamesA = &apos;red&apos;</pre>
        <pre>if(isActive) &#123; classNamesA += &apos; bold&apos; &#125;</pre>
        <pre>className=&#123; classNamesA &#125;</pre>
      </div>

      <h2>设置全局SCSS变量</h2>

      <h3>第1步：安装依赖 sass-resources-loader</h3>
      <div className='code'>
        <pre>npm i sass-resources-loader -D</pre>
      </div>
      <h3>第2步：修改webpack相关配置：/config/webpack.config.js</h3>
      <p>如果没有这个文件，需要执行：npm run eject，来弹窗相关配置文件</p>
      <p>对方法“ <em>getStyleLoaders(cssOptions, preProcessor)</em> ”进行修改，由于主要是对css变量variable、混入mixin进行全局配置，而这些只有css预处理器才支持，原生css不支持，所以利用之前的判断if(preProcessor)，在里面添加专门针对sass的全局配置即可</p>
      <p><img alt='webpack相关配置修改' src={require('@/assets/images/doc/webpack-sass-import.png')} /></p>

      <h3>第3步：更新stylelint相关配置</h3>
      <p>不更新的话虽然不影响浏览器页面显示，但代码相应位置会报红，而且会被git提交校验拦住，导致无法提交</p>
      <p><img alt='stylelint相关配置修改' src={require('@/assets/images/doc/stylelint-sass-import.png')} /></p>

      <h2 id='middle'>css选择器分类</h2>
      <table>
        <thead>
          <tr>
            <th width='130'>类别</th>
            <th width='140'>名称</th>
            <th>示例</th>
          </tr>
        </thead>
        <tbody className='pseudo-class'>
          <tr>
            <td rowSpan={4}>基础选择器</td>
            <td>通配符选择器</td>
            <td>
              <p>* &#123; …… &#125;</p>
              <p>开发中应用极少，只有在特殊的情况下才会使用，在页面中可能会用于去除页面中默认的margin和padding。</p>
              <p>因为css通配符 “*”会将网站内所有元素的默认值重设，这在大型网站会加重客户端的负担，浏览器运行速度变慢。但如果开发的是小型站点或企业网站，页面元素不是很多，使用CSS 通配符造成的性能影响可以忽略。</p>
              <p>更推荐使用具体的标签名称来重置样式。</p>
            </td>
          </tr>
          <tr>
            <td>元素选择器</td>
            <td>
              <p>元素名 &#123; …… &#125;</p>
              <p>标元素选择器选择的是一类标签元素（无论嵌套关系有多深），而不是单独的一个。</p>
            </td>
          </tr>
          <tr>
            <td>类选择器</td>
            <td>
              <p>.类名 &#123; …… &#125;</p>
              <p>所有的标签上都有class属性，class属性的属性值称为类名。名可以由数字，字母，下划线，中划线组成，但是不能以数字开头。</p>
              <p>一个标签中可以同时有多个类名，类名之间用空格隔开。类名可以重复，一个类选择器可以同时选中多个标签。</p>
            </td>
          </tr>
          <tr>
            <td>id选择器</td>
            <td>
              <p>#id属性值 &#123; …… &#125;</p>
              <p>所有的标签上都有id属性。id属性值类似于身份证号码，在一个页面中是唯一的，不可重复的。</p>
              <p>一个标签上只能有一个id属性值。一个id选择器只能选中一个标签。</p>
            </td>
          </tr>

          <tr>
            <td rowSpan={6}>复合/组合选择器</td>
            <td>交集选择器</td>
            <td>
              <p>选择器1选择器2 &#123; …… &#125;</p>
              <p>如 h1.title：选择元素为h1且类名为title的标签。</p>
              <p>选中页面中同时满足多个选择器的标签。</p>
              <p>多个选择器之间没有任何东西隔开，紧挨着的。交集选择器中如果有标签选择器，标签选择器必须放在前面。</p>
            </td>
          </tr>
          <tr>
            <td>并集/群组选择器</td>
            <td>
              <p>选择器1,选择器2 &#123; …… &#125;</p>
              <p>如 h1, h2：选择所有元素名为h1和h2的标签。</p>
              <p>群组选择器通过逗号（,）分隔不同的选择器来实现。</p>
              <p>同时选择多个选择器，并对它们应用相同的样式规则。这可以极大地减少代码重复，并使得样式表更加简洁和易于维护。</p>
            </td>
          </tr>

          <tr>
            <td>子代选择器</td>
            <td>
              <p>父亲  &gt; 儿子 &#123; …… &#125;</p>
              <p>如 p &gt; em：选择p标签下的所有第一代em标签。</p>
              <p>选择某元素后面的第一代子元素。</p>
            </td>
          </tr>
          <tr>
            <td>后代选择器</td>
            <td>
              <p>祖先 后代 &#123; …… &#125;</p>
              <p>如 p em：选择p标签下的所有em标签，不管其是第几代。</p>
              <p>选择某元素后面的所有子元素，没有层级限制。</p>
            </td>
          </tr>
          <tr>
            <td>相邻兄弟选择器</td>
            <td>
              <p>兄 + 弟 &#123; …… &#125;</p>
              <p>如 h1 + p：选择h1标签后的第一个标签，且该标签为p元素。</p>
              <p>选取某个元素之后的紧接的第一个元素，且该元素满足后面的选择器条件，二者有相同父元素，同一个父亲下只能匹配到一个元素。</p>
            </td>
          </tr>
          <tr>
            <td>通用兄弟选择器</td>
            <td>
              <p >兄 ~ 弟弟们 &#123; …… &#125;</p>
              <p>如 h1 ~ p：选择h1标签后的所有p标签。</p>
              <p>选取某个元素之后的所有相同元素。这些元素必须处于同一个父元素内，被选取的元素不必直接紧随兄元素，也不必互相紧随。</p>
            </td>
          </tr>

          <tr>
            <td rowSpan={5}>属性选择器</td>
            <td>[属性]</td>
            <td>
              <p>如 [title]：选择含有属性title的元素，title属性的值可以为空字符串，但不可以不设置，即属性后要有等号和相应的值，哪怕该值为&apos;&apos;。</p>
              <p>选中含有指定属性的元素。如title、data-xxx等</p>
            </td>
          </tr>
          <tr>
            <td>[属性=&apos;属性值&apos;]</td>
            <td>
              <p>选中含有指定属性和指定属性值的元素。属性值只能由数字，字母，下划线，中划线组成，并且不能以数字开头，区分字母大小写（以下属性值同此处）。</p>
              <p>特殊情况，如果属性的值设置为空字符串，如 title=&apos;&apos;，只能用[title]、[title=&apos;&apos;]匹配到，下面的三种（开头、结尾、含有）选择器匹配不到。</p>
            </td>
          </tr>
          <tr>
            <td>[属性^=&apos;属性值&apos;]</td>
            <td>选中含有指定属性和指定属性值开头的元素。</td>
          </tr>
          <tr>
            <td>[属性$=&apos;属性值&apos;]</td>
            <td>选中含有指定属性和指定属性值结尾的元素。</td>
          </tr>
          <tr>
            <td>[属性*=&apos;属性值&apos;]</td>
            <td>选中指定属性和含有指定属性值的元素。</td>
          </tr>

          <tr>
            <td rowSpan={5}>伪元素选择器</td>
            <td colSpan={2}>以::开头，用于创建一些不在DOM树中的元素，并为其添加样式。</td>
          </tr>
          <tr>
            <td>
              <p>::before</p>
              <p>::after</p>
            </td>
            <td>
              <p>::before/::after 伪元素可以用来创建一个内部元素，它的内容会覆盖在父元素的内容之前/之后。</p>
              <p>这里有以下几点需要特别注意：</p>
              <p>1、content属性是必须的（值可以为空字符串），如果不写content，伪元素会失效。content属性也只能和伪元素::before、::after搭配使用，其他选择器上使用无效</p>
              <p>2、content的值支持多次直接拼接（中间不用+号），慎重使用+号拼接，因为不同类型（如字符串+attr(href)）的拼接会显示异常，同类型可以使用+号拼接。可以使用attr()方法获取自身的属性，可以将多个属性拼接到一起</p>
              <p>3、hover状态时，要先写hover，再写伪类，否则hover不会生效</p>

              <p>demo：姓名左边::before为你好，右边::after接近一个等边三角形。</p>
              <p className='before-after-normal'>王宏伟</p>

              <p>demo：使用伪元素::before为普通标签模拟input及其placeholder</p>
              <p className='before-after-placeholder'suppressContentEditableWarning contentEditable='true'>p标签设置属性contentEditable=&apos;true&apos;模拟input的可编辑性，清空内容后会使设置的样式生效：empty::before &#123; color: #ccc; content: &quot;请输入内容&quot;; &#125;，从而模拟placeholder。</p>

              <p>以下是content属性的一些高阶示例</p>
              <p>demo：使用attr(xxx)进行元素标签属性的拼接</p>
              <p className='before-after-content-attr'><a title='菜鸟教程官网' href='https://www.runoob.com'>菜鸟教程，后面文字为伪元素::after根据a标签的属性添加：</a></p>
              <p>demo：使用quotes open-quote close-quote 进行拼接</p>
              <p className='before-after-content-quotes'>感觉这个quotes拼接没啥用，直接在两个对应的伪元素中写不就完了。添加双引号要用反斜杠\转义</p>
              <p>demo：使用counter-increment:xxx、content: counter(xxx)进行项目编号的拼接</p>
              <ul className='before-after-content-counter-increment padding-top-10'>
                <li>左边数字和符号为使用伪元素::before的content属性进行添加</li>
                <li>条目标签中定义counter-increment: name number，其中name为计数的名称，number为每次递增量，缺省值为1，当为5时，从5开始，每次加5，其伪元素&::before中使用content: counter(name)&apos;. &apos; 来显示计数文本</li>
              </ul>
              <p>demo：使用counter-reset重置某个计数</p>
              <ul className='before-after-content-counter-reset padding-top-10'>
                <li className='item-h1'>大标题</li>
                <li className='item-h2'>中标题</li>
                <li className='item-h3'>小标题</li>
                <li className='item-h3'>小标题</li>
                <li className='item-h2'>中标题</li>
                <li className='item-h3'>小标题</li>
                <li className='item-h3'>小标题</li>
                <li className='item-h1'>大标题</li>
                <li className='item-h2'>中标题</li>
                <li className='item-h3'>小标题</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              <p>::first-line</p>
              <p>::first-letter</p>
            </td>
            <td>
              <p>::first-line/::first-letter 只能用于块级元素。用于设置附属元素的第一个行内容/字母的样式。</p>
              <p>demo：使用伪元素选择器::first-line 为首行声明样式 color: $color-success;</p>
              <p className='first-line'>第一行内容，当文字内容很多或者宽度调整时，有可能文字会处于不同的行，我们还可以使用&lt;br &#47;&gt;强行换行。<br />这里就是使用&lt;br &#47;&gt;强行换行的内容</p>
              <p>demo：使用伪元素选择器::first-letter 为首字声明样式 color: $color-success; initial-letter: 2; </p>
              <p className='first-letter'>这次使用的伪元素选择器first-letter只对第一个letter（汉字或字母）做处理。initial-letter属性可以实现首字下沉效果，其属性值为正整数。<br />这里就是使用&lt;br &#47;&gt;强行换行的内容</p>
            </td>
          </tr>
          <tr>
            <td>::selection</td>
            <td>
              <p>::selection 匹配鼠标长按拖动选中的内容。</p>
              <p>值得注意的是 ::selection 仅支持 color，background 和 text-shadow 属性。</p>
              <p>demo：使用伪元素选择器::selection 为鼠标选中的部分声明样式 background-color: $color-success; </p>
              <p className='selection'>这里是普通的文字内容，鼠标选中会有不同的样式。</p>
            </td>
          </tr>
          <tr>
            <td>::placeholder</td>
            <td>
              <p>::placeholder 用于设置input元素的placeholder文字内容的样式。</p>
              <p>demo：使用伪元素选择器::placeholder 为输入框input声明样式 color: $color-success; </p>
              <p className='placeholder'><input placeholder='文本输入框'></input></p>
              <p className='placeholder'><textarea rows={3} cols={40} placeholder='多行文本域默认文字内容'></textarea></p>
            </td>
          </tr>

          <tr>
            <td>伪类选择器</td>
            <td colSpan={2}>以:开头，用于已有元素处于某种状态时（滑动、点击等）为其添加对应的样式，这个状态是根据用户行为而动态变化的。</td>
          </tr>
          <tr>
            <td rowSpan={5}>动态伪类</td>
            <td>:link</td>
            <td>
              <p>a链接没有被访问前的样式效果。</p>
              <p>a标签必须设置href属性及其属性值，值可以为空字符串，这样:link样式才能生效。该伪类很少用，更多的是直接给a标签设置样式</p>
              <p><a href='#!'>链接：href=&apos;#!&apos;</a></p>
            </td>
          </tr>
          <tr>
            <td>:visited</td>
            <td>
              <p>a链接被访问后的样式效果</p>
              <p>浏览器是通过检查用户的浏览历史记录来判断链接是否已被访问的。一旦浏览器确认用户已访问过某个链接，它就会应用:visited伪类规则。</p>
              <p>href的值为空字符串或其他特殊值如空格、分号等也会被浏览器历史收录，只要能跳转就是一个浏览器历史记录，不管跳转后的页面存在不存在，只要href的值和浏览器历史中的某个匹配上就应用:visited样式。href为相对路径也可和浏览器历史正确匹配。href=&apos;javascript:;&apos;表示什么都不执行，点击以后没有任何动作，不会被浏览器历史收录，进而不会出现:visited样式</p>
              <p>请注意，出于隐私考虑，:visited伪类只能应用于链接的颜色属性，不能应用于其他属性，如背景色、边框等。</p>
              <p><a href='https://www.baidu.com'>链接：href=&apos;https://www.baidu.com&apos;</a></p>
            </td>
          </tr>
          <tr>
            <td>:hover</td>
            <td>
              <p>鼠标悬停在元素上面时的样式效果，可以是任意标签元素，不止a标签。a标签默认有手型。</p>
              <p>
                <a>a标签的链接</a>&#12288;
                <span>普通的span标签</span>
              </p>
            </td>
          </tr>
          <tr>
            <td>:active</td>
            <td>
              <p>点击元素时的样式效果，即按下鼠标左键时发生的样式，可以是任意标签元素，不止a标签。a标签默认有手型。</p>
              <p>
                <a>a标签的链接</a>&#12288;
                <span>普通的span标签</span>
              </p>
            </td>
          </tr>
          <tr>
            <td>:focus</td>
            <td>
              <p>用于元素成为焦点时的样式效果，常用与表单元素</p>
              <p>
                <input className='focus' type='text' placeholder='请输入您的姓名'></input>
              </p>
            </td>
          </tr>

          <tr>
            <td rowSpan={11}>结构伪类</td>
            <td>:first-child</td>
            <td>
              <p>选择某个父元素下第一个子元素。文字内容不属于子元素，只有被元素标签包裹的才称之为元素</p>
              <p className='first-child'><ins /><ins /><ins /><ins /><ins /></p>
            </td>
          </tr>
          <tr>
            <td>:last-child</td>
            <td>
              <p>选择某个父元素下的最后一个子元素</p>
              <p className='last-child'><ins /><ins /><ins /><ins /><ins /></p>
            </td>
          </tr>
          <tr>
            <td>:nth-child(n)</td>
            <td>
              <p>选择某个父元素下的一个或多个特定的子元素</p>
              <p>当n为具体的某个数字时，为选择第n个该元素；该数字需大于0，因为n从1开始，没有第0个元素一说。当n为变量时，n表示一个从0开始的自然数，他会逐渐+1</p>
              <p>:nth-child(1)=:first-child</p>
              <p className='nth-child-1'><ins /><ins /><ins /><ins /><ins /><ins /></p>
              <p>:nth-child(n+3)：n加一个常数x，表示从第x个子元素开始到最后的集合，n从0开始递加。</p>
              <p className='nth-child-nadd3'><ins /><ins /><ins /><ins /><ins /><ins /></p>
              <p>:nth-child(-n+3)：-n加一个常数x，表示前x个子元素的集合。当n大于等于x时，-n+x为小于1的数，将匹配不到元素。</p>
              <p className='nth-child-top-3'><ins /><ins /><ins /><ins /><ins /><ins /></p>
              <p>:nth-child(2n/even)：选取偶数位的子元素。n为0时，无匹配到的元素</p>
              <p className='nth-child-even'><ins /><ins /><ins /><ins /><ins /><ins /></p>
              <p>:nth-child(2n+1/odd)：选取奇数位的子元素。</p>
              <p className='nth-child-odd'><ins /><ins /><ins /><ins /><ins /><ins /></p>
            </td>
          </tr>
          <tr>
            <td>:nth-last-child(n)</td>
            <td>
              <p>选择某个父元素下的一个或多个特定的子元素，从后往前数</p>
              <p>当n为具体的某个数字时，为选择倒数第n个该元素；该数字需大于0，因为n从1开始，没有倒数第0个元素一说。当n为变量时，n表示一个从0开始的自然数，他会逐渐+1</p>
              <p>:nth-last-child(1)=:last-child</p>
              <p className='nth-last-child-1'><ins /><ins /><ins /><ins /><ins /><ins /></p>
              <p>:nth-last-child(n+3)：n加一个常数x，表示从倒数第x个子元素开始到最前的集合，n从0开始递加。</p>
              <p className='nth-last-child-nadd3'><ins /><ins /><ins /><ins /><ins /><ins /></p>
              <p>:nth-last-child(-n+3)：-n加一个常数x，表示倒数前x个子元素的集合。当n大于等于x时，-n+x为小于1的数，将匹配不到元素。</p>
              <p className='nth-last-child-top-3'><ins /><ins /><ins /><ins /><ins /><ins /></p>
              <p>:nth-last-child(2n/even)：选取倒数偶数位的子元素。n为0时，无匹配到的元素</p>
              <p className='nth-last-child-even'><ins /><ins /><ins /><ins /><ins /><ins /></p>
              <p>:nth-last-child(2n+1/odd)：选取倒数奇数位的子元素。</p>
              <p className='nth-last-child-odd'><ins /><ins /><ins /><ins /><ins /><ins /></p>
            </td>
          </tr>
          <tr>
            <td>:only-child</td>
            <td>
              <p>选择的元素是它父元素的唯一 一个子元素</p>
              <p className='only-child'><ins /><ins /><ins /><ins /><ins /><ins /></p>
              <p className='only-child'><ins /></p>
            </td>
          </tr>

          <tr>
            <td>:first-of-type</td>
            <td>
              <p>选择某个父级元素下第一个同类型子元素，如果有多个类型就会选取多个。同类型指的是元素标签名相同，而该标签设置的属性也为同类型。</p>
              <p className='first-of-type'><b>普通的b元素1</b>&nbsp;&nbsp;<ins /><ins /><ins /><ins /><ins /><b>普通的b元素2</b></p>
              <p>:first-child 和 :first-of-type区别</p>
              <p>假设p标签下有子元素ins和其他元素如b、i等</p>
              <p>在没有使用交集选择器时，p :first-child：指p标签下的第一个子元素，谁在最前面是谁，不管元素是谁，只会有一个； p :first-of-type：指p标签下的各个同类型子元素的第一个，元素类型有几个，结果就会有几个。</p>
              <p>在结合使用交集选择器时，p ins:first-child：指p标签下的第一个子元素，而且该元素必须是ins，有可能最后匹配不到；p ins:first-of-type：指p标签下的子元素ins中的第一个，只要含有ins就能匹配到，不管其位置，最多匹配一个，也有可能匹配不到</p>
              <p>大多数时候我们会结合交集选择器使用，而此时 xxx:first-of-type 比 xxx:first-child 更强壮，也更人性化一些，不会说父元素下（特别是前面）插入了某些dom而导致样式出问题。</p>
            </td>
          </tr>
          <tr>
            <td>:last-of-type</td>
            <td>
              <p>选择某个父级元素下最后一个同类型子元素</p>
              <p className='last-of-type'><b>普通的b元素1</b>&nbsp;&nbsp;<ins /><ins /><ins /><ins /><ins /><b>普通的b元素2</b></p>
            </td>
          </tr>
          <tr>
            <td>:nth-of-type(n)</td>
            <td>
              <p>选择某个父元素下的一个或多个特定的子元素，具体见：:nth-child(n)</p>
              <p>:nth-of-type(1)=:first-of-type</p>
              <p className='nth-of-type-1'><b>普通的b元素1</b>&nbsp;&nbsp;<ins /><ins /><ins /><ins /><ins /><b>普通的b元素2</b></p>
              <p>:nth-of-type(-n+3)：-n加一个常数x，表示取同类型子元素前x个的集合。当n大于等于x时，-n+x为小于1的数，将匹配不到元素。</p>
              <p className='nth-of-type-top-3'><b>普通的b元素1</b>&nbsp;&nbsp;<ins /><ins /><ins /><ins /><ins /><b>普通的b元素2</b></p>
            </td>
          </tr>
          <tr>
            <td>:nth-last-of-type(n)</td>
            <td>
              <p>选择某个父元素下的一个或多个特定的子元素，从后往前数</p>
              <p>:nth-last-of-type(1)=:first-of-type</p>
              <p className='nth-last-of-type-1'><b>普通的b元素1</b>&nbsp;&nbsp;<ins /><ins /><ins /><ins /><ins /><b>普通的b元素2</b></p>
              <p>:nth-last-of-type(-n+3)：-n加一个常数x，表示取同类型子元素倒数前x个的集合。当n大于等于x时，-n+x为小于1的数，将匹配不到元素。</p>
              <p className='nth-last-of-type-top-3'><b>普通的b元素1</b>&nbsp;&nbsp;<ins /><ins /><ins /><ins /><ins /><b>普通的b元素2</b></p>
            </td>
          </tr>
          <tr>
            <td>:only-of-type</td>
            <td>
              <p>选择的元素是它父元素的唯一 一个同类型子元素</p>
              <p className='only-of-type'><b>普通的b元素1</b>&nbsp;&nbsp;<ins /><ins /><ins /><ins /><ins /><b>普通的b元素2</b></p>
              <p className='only-of-type'><b>普通的b元素1</b>&nbsp;&nbsp;<ins /></p>
            </td>
          </tr>
          <tr>
            <td>:empty</td>
            <td>
              <p>选择的元素里面没有任何内容（空标签），注意这个和上面那些涉及到的父子元素没关系，只关注元素本身有无内容，空格也算有内容</p>
              <p className='empty'><b>普通的b元素1</b>&nbsp;&nbsp;<ins /><ins /><ins> </ ins><ins /><ins /><b>普通的b元素2</b></p>
            </td>
          </tr>

          <tr>
            <td rowSpan={4}>逻辑伪类</td>
            <td>:not()</td>
            <td>
              <p>:not 伪类接受一个选择器作为参数，排查或者过滤掉该特定元素，由于它的作用是防止特定的元素被选中，它也被称为反选伪类（negation pseudo-class）</p>
              <p>反选伪类()中的参数选择器只能使用一个，不能逗号隔开使用多个（这样就会选中被排除掉的元素，进而被全部选中），()中的选择器不需要引号包裹。</p>
              <p>特别注意当css中声明了多个同层级（:not前的选择器构成一样）的反选伪类样式时，是否会导致互相叠加，从而使选择器范围扩大，甚至被全部选中。</p>
              <p>下面的示例就是前面同层级.not ins，导致互相叠加了，第一行 .not ins:not(:first-child)；第二行 .not ins:not(.no)；第二个ins是类名no，导致全部被选中</p>
              <p className='not'><ins /><ins /><ins /><ins /><ins /></p>
              <p className='not'><ins /><ins className='no' /><ins /><ins /><ins /></p>
              <p>应当使:not前的选择器构成不一样，第一行 .not-1 ins:not(:first-child)，第二行 .not-2 ins:not(.no)，这样可以有效避免他们之间的互相伤害</p>
              <p className='not-1'><ins /><ins /><ins /><ins /><ins /></p>
              <p className='not-2'><ins /><ins className='no' /><ins /><ins /><ins /></p>
            </td>
          </tr>
          <tr>
            <td >:has()</td>
            <td className='has'>
              <p>:has 伪类接受一个选择器组作为参数，该参数相对于该元素的 :scope 至少匹配一个元素。它的出现填补了 CSS 选择器不能选择父元素或是先前兄弟元素的空白</p>
              <p><em>:has()的选择逻辑：</em></p>
              <p>1、首先必须选择中一些可进行筛选的父级标签</p>
              <p>2、之后 :has()伪类可以搜索这些父级标签下的全部子元素（可以嵌套）或是兄弟元素，执行 :has()内部的选择器，筛选出符合条件的父级标签</p>
              <p><em>:has()选择器可以接受一个常规的并集选择器（选择器1,选择器2），&gt;p:has(.a,.c)</em></p>
              <p><ins className='a' /><ins /><ins /><ins /><ins /></p>
              <p><ins className='b' /><ins /><ins /><ins /><ins /></p>
              <p><ins className='c' /><ins /><ins /><ins /><ins /></p>
              <p><em>:has()选择器可以可以选择兄弟元素，&gt;h4:has(+h4)</em></p>
              <h4>h4文本1</h4>
              <h4>h4文本2</h4>
              <p><em>:has()选择器可以跟 :is()、:where()、:not()选择器一起使用，&gt;p:has(span:not(.x))</em></p>
              <p><span className='x'>span文本className=x</span></p>
              <p><span className='x'>span文本className=x</span>，<span>span文本没有className</span></p>
              <p><span>span文本没有className</span>，<span>span文本没有className</span></p>
            </td>
          </tr>
          <tr>
            <td>:is()</td>
            <td>
              <p>:is 伪类函数以选择器列表作为参数，并选择该列表中任意一个选择器可以选择的元素。这对于以更紧凑的形式编写大型选择器非常有用。</p>
              <p>:is() 的优先级是由它的选择器列表中优先级最高的选择器决定的。我们不能把它们割裂开来看。</p>
              <p>.is :is(p,#is-3) :is(i,span)样式中的字体颜色为红色，而.is :is(.is-1,.is-2) :is(i,span)样式中的字体颜色为绿色，最后三个段落:is(i,span)全是红色</p>
              <div className='is padding-top-10'>
                <p className='is-1'>p元素className=is-1标签<i>i的文本</i>，<b>b的文本</b>，<span>span的文本</span></p>
                <p className='is-2'>p元素className=is-2标签<i>i的文本</i>，<b>b的文本</b>，<span>span的文本</span></p>
                <p id='is-3'>p元素id=is-3标签<i>i的文本</i>，<b>b的文本</b>，<span>span的文本</span></p>
              </div>
            </td>
          </tr>
          <tr>
            <td>:where()</td>
            <td>
              <p>:where 伪类函数以选择器列表作为参数，并选择该列表中任意一个选择器可以选择的元素。这对于以更紧凑的形式编写大型选择器非常有用。与:is()的区别在于：:where()的优先级总是 0。</p>
              <p>:where() 的优先级是由它的选择器列表中优先级最高的选择器决定的。我们不能把它们割裂开来看。</p>
              <p>.where :where(p,#where-3) :where(i,span)样式中的字体颜色为红色，而.where :where(.where-1,.where-2) :where(i,span)样式中的字体颜色为绿色，最后三个段落:where(i,span)全是红色，而.where :where(.where-1,.where-2) :is(i,span)样式中的字体颜色为橙色，:is的优先级高于:where，所以最后，前两个段落是橙色，最后一个段落是红色。</p>
              <div className='where padding-top-10'>
                <p className='where-1'>p元素className=where-1标签<i>i的文本</i>，<b>b的文本</b>，<span>span的文本</span></p>
                <p className='where-2'>p元素className=where-2标签<i>i的文本</i>，<b>b的文本</b>，<span>span的文本</span></p>
                <p id='where-3'>p元素id=where-3标签<i>i的文本</i>，<b>b的文本</b>，<span>span的文本</span></p>
              </div>
            </td>
          </tr>

          <tr>
            <td rowSpan={5}>状态伪类</td>
            <td>:enabled</td>
            <td>
              <p>选择可用的表单元素。其样式会和合法的:valid样式按正常权重互相叠加。</p>
              <p>input:enabled &#123; color: $color-3 &#125; ; input:valid &#123; background-color: $color-success; &#125;</p>
              <p className='status'>
                <input defaultValue='11' />
              </p>
            </td>
          </tr>
          <tr>
            <td>:disabled</td>
            <td>
              <p>选择被禁用的表单元素。其样式独立，不会和可用的:enabled、合法的:valid样式互相叠加。</p>
              <p>input:disabled &#123; color: $color-9 &#125;</p>
              <p className='status'>
                <input disabled defaultValue='22' />
              </p>
            </td>
          </tr>
          <tr>
            <td>:checked</td>
            <td>
              <p>选择被选中的表单元素，如复选框或单选按钮。</p>
              <p>accent-color: 意为重点色、强调色，可以设置复选框或单选按钮的背景色，background-color属性去设置无效。</p>
              <p>input:enabled &#123; accent-color: $color-success; &#125; ; label:has(input:checked) &#123; color: $color-success; &#125; ;</p>
              <p className='status'>
                <label><input name='Fruit' type='radio' defaultChecked value='a'/>苹果 </label>
                <label><input name='Fruit' type='radio'value='b' />桃子 </label>
                <label><input name='Fruit' type='checkbox' value='c' />全选 </label>
              </p>
            </td>
          </tr>
          <tr>
            <td>:valid</td>
            <td>
              <p>选择有效的表单元素。</p>
              <p className='status'>
                <label>邮箱：<input type='email' defaultValue='wanghongwei@qq.com' /></label>
              </p>
            </td>
          </tr>
          <tr>
            <td>:invalid</td>
            <td>
              <p>选择无效的表单元素。</p>
              <p className='status'>
                <label>邮箱：<input type='email' defaultValue='aaa' /></label>
              </p>
            </td>
          </tr>
          <tr>
            <td>目标伪类</td>
            <td>:target</td>
            <td>
              <p>它用于选择当前活动的目标元素（‌即URL指向的元素）‌。‌当你点击一个指向页面中某个元素的链接时，‌那个元素就会成为目标元素，‌:target伪类就可以用来为这个元素应用样式。‌</p>
              <p>
                <a href='#top'>top</a>&#12288;
                <a href='#middle'>middle</a>
              </p>
            </td>
          </tr>

        </tbody>
      </table>

      <h2>SCSS中混合和继承，混合和函数的区别</h2>
      <h3>继承 @extend</h3>
      <p>任何形式定义的样式都可以被继承，编译后的css会以并集选择器的形式存在，继承只是添加选择器达到共用的目的，所以继承的话是没有代码冗余的。</p>
      <p>不足之处：<em>继承不支持设置参数</em></p>
      <p>编译后的结果为：要继承样式的变量名/选择器名, .a, .b &#123; 继承的样式 &#125;</p>
      <p>如果要继承的样式使用<em>%开头</em>定义，则自身不会出现在css中: .a, .b &#123; 继承的样式 &#125;，这样看上去更干净整洁。</p>
      <p>demo：</p>
      <p>定义：%font-important-basic &#123; color: $color-danger; &#125;</p>
      <p className='font-important-1'>此段落样式定义为：.font-important-1 &#123; @extend %font-important-basic; text-decoration: line-through; &#125;</p>
      <p className='font-important-2'>此段落样式定义为：.font-important-2 &#123; @extend %font-important-basic; text-decoration: underline; &#125;</p>

      <h3>混入/混合 @mixin @include</h3>
      <p>使用@mixin命令，定义一个代码块，使用@include命令，调用这个mixin。</p>
      <p>使用@mixin命令定义时，如：@mixin ellipsis ($line:1)，支持设置参数和参数的默认值，参数以$开头，可以设置多个参数，最好将常用的值设置为默认值，格式如：$line:1 。</p>
      <p>使用@include命令调用时，参数可以不设置，这时可以省略()，或者小括号内为空，引用时的格式和声明时保持一致即可。</p>
      <p>不足之处：<em>混合它不是公用样式类，而是直接复制一份出来，会造成代码一定程度的冗余。</em></p>
      <p>demo：</p>
      <p className='ellipsis'>这个段落一行装不下的时候会出省略号，注意如果该元素标签设置了padding-bottom，底部会漏出响应高度的下一行内容。使用混入来实现这个样式。首先定义：@mixin ellipsis ($line:1)，然后使用：.ellipsis &#123; @include ellipsis(); &#125;，最后为段落设置对应的选择器，该处为 className=&apos;ellipsis&apos;</p>

      <h3>函数 @function </h3>
      <p>使用@function定义函数，函数的功能是传入参数，经过函数内部的计算判断，然后需要搭配@return输出一个值的。使用时直接书写方法名称即可，不需要特殊的关键词。</p>
      <p>使用@function命令定义时，如：@function px-to-em($px, $base-font-size: 14px)，支持设置参数和参数的默认值，参数以$开头，可以设置多个参数，最好将常用的值设置为默认值，格式如：$base-font-size: 14px。</p>
      <p>调用函数时，直接使用方法名称px-to-em()即可，参数如果定义时都设置了默认值，可以不设置，这时不可以省略()，注意混入@include时是可以省略()的。</p>
      <p>demo：</p>
      <p className='px-to-em-600'>@function px-to-em($px, $base-font-size: 14px)，这里将宽度值通过函数由px转为em，其中用unit和unitless对单位做了判断，支持if、else、return等js语法，但前面要加上@符号</p>
      <p><img alt='sass方法 px-to-em' src={require('@/assets/images/doc/px-to-em.png')} /></p>

      <table>
        <thead>
          <tr>
            <th width='150'>类型</th>
            <th width='250'>名称</th>
            <th>说明</th>
            <th>示例</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td rowSpan={9}>String(字符串) 函数</td>
            <td>quote(string)</td>
            <td>给字符串添加引号，使用函数输出content内容的时候经常使用</td>
            <td className='monospace'>quote(hello) //&quot;hello&quot;</td>
          </tr>
          <tr>
            <td>unquote(string)</td>
            <td>移除字符串的引号</td>
            <td className='monospace'>unquote(&quot;hello&quot;) //hello</td>
          </tr>
          <tr>
            <td>str-index(string, substring)</td>
            <td>
              <p>返回 substring 子字符串第一次在 string 中出现的位置。</p>
              <p>如果没有匹配到子字符串，则返回 null。区分大小写，索引index从1开始</p>
            </td>
            <td className='monospace'>str-index(&quot;abcd&quot;, &quot;ab&quot;) // 1 </td>
          </tr>
          <tr>
            <td>str-insert(string, insert, index)</td>
            <td>在字符串 string 中 index 位置插入 insert。</td>
            <td className='monospace'>str-insert(&quot;abcd&quot;, &quot;ef&quot;, 3) // &quot;abefcd&quot;</td>
          </tr>
          <tr>
            <td>str-length(string)</td>
            <td>返回字符串的长度。</td>
            <td className='monospace'>str-length(&quot;hello&quot;) // 5</td>
          </tr>
          <tr>
            <td>str-slice(string, start, end)</td>
            <td>从 string 中截取子字符串，通过 start-at 和 end-at 设置始末位置，未指定结束索引值则默认截取到字符串末尾。</td>
            <td>
              <pre>sass: str-slice(&quot;abcd&quot;, 2, 3)   // &quot;bc&quot; </pre>
              <pre>js: &quot;abcd&quot;.slice(2, 3) // &quot;c&quot; </pre>
            </td>
          </tr>
          <tr>
            <td>to-lower-case(string)</td>
            <td>将字符串转成小写</td>
            <td className='monospace'>to-lower-case(&quot;HELLO&quot;) // &quot;hello&quot;</td>
          </tr>
          <tr>
            <td>to-upper-case(string)</td>
            <td>将字符串转成大写</td>
            <td className='monospace'>to-upper-case(&quot;hello&quot;) // &quot;HELLO&quot;</td>
          </tr>
          <tr>
            <td>unique-id()</td>
            <td>返回一个无引号的随机字符串作为 id。不过也只能保证在单次的 Sass 编译中确保这个 id 的唯一性。</td>
            <td className='monospace'>unique-id() // 3a153b3ds</td>
          </tr>
          <tr>
            <td rowSpan={10}>Number(数字) 函数</td>
            <td>abs(number)</td>
            <td>返回一个数值的绝对值。</td>
            <td className='monospace'>abs(-12.34) // 12.34</td>
          </tr>
          <tr>
            <td>comparable(num1, num2)</td>
            <td>返回一个布尔值，判断 num1 与 num2 是否可以进行比较 ，注意是否可以比较，不是比较的结果。</td>
            <td>
              <pre>comparable(20mm, 1cm) // true </pre>
              <pre>comparable(35px, 2em) // false</pre>
            </td>
          </tr>
          <tr>
            <td>ceil(number)</td>
            <td>向上取整</td>
            <td className='monospace'>ceil(12.34) //13</td>
          </tr>
          <tr>
            <td>floor(number)</td>
            <td>向下取整</td>
            <td className='monospace'>floor(12.34) //12</td>
          </tr>
          <tr>
            <td>max(number...)</td>
            <td>返回最大值</td>
            <td className='monospace'>max(5, 7, 9, 0, -3, -7) // 9</td>
          </tr>
          <tr>
            <td>min(number...)</td>
            <td>返回最小值</td>
            <td className='monospace'>min(5, 7, 9, 0, -3, -7) // -7</td>
          </tr>
          <tr>
            <td>percentage(number)</td>
            <td>将数字转化为百分比的表达形式</td>
            <td className='monospace'>percentage(1.2) // 120</td>
          </tr>
          <tr>
            <td>random()</td>
            <td>返回 0-1 区间内的小数</td>
            <td className='monospace'>random() // 0.2783</td>
          </tr>
          <tr>
            <td>random(number)</td>
            <td>返回 1 至 number 之间的整数，包括 1 和 limit。</td>
            <td className='monospace'>random(10) // 4</td>
          </tr>
          <tr>
            <td>round(number)</td>
            <td>返回最接近该数的一个整数，四舍五入。</td>
            <td className='monospace'>round(15.80) // 16</td>
          </tr>
          <tr>
            <td rowSpan={9}>List(列表) 函数</td>
            <td>append(list, value, [separator])</td>
            <td>将单个值 value 添加到列表尾部。separator 是分隔符，默认会自动侦测，或者指定为逗号comma或空格space。</td>
            <td>
              <pre>append((a b c), d) // a b c d </pre>
              <pre>append((a b c), (d), comma) // a, b, c, d</pre>
            </td>
          </tr>
          <tr>
            <td>index(list, value)</td>
            <td>返回元素 value 在列表中的索引位置。不存在返回null</td>
            <td className='monospace'>index(a b c, b) // 2</td>
          </tr>
          <tr>
            <td>is-bracketed(list)</td>
            <td>判断列表中是否有中括号</td>
            <td className='monospace'>is-bracketed([a b c]) // true </td>
          </tr>
          <tr>
            <td>list-separator(list)</td>
            <td>返回一列表的分隔符类型。可以是逗号comma或空格space。</td>
            <td className='monospace'>list-separator(a, b, c) // &quot;comma&quot; 其他值：&quot;space&quot; </td>
          </tr>
          <tr>
            <td>join(list1, list2, [separator, bracketed])</td>
            <td>
              <p>合并两列表，将列表 list2 添加到列表 list1 的末尾。若第三参数separator与第四参数bracketed需同时配置，他们的顺序不能写反</p>
              <p>separator 是分隔符，默认会自动侦测，或者指定为逗号comma或空格space。</p>
              <p>bracketed 默认会自动侦测是否有中括号，可以设置为 true 或 false。</p>
            </td>
            <td className='monospace'>join(a b c, d e f, $bracketed: true) // [a b c d e f] </td>
          </tr>
          <tr>
            <td>length(list)</td>
            <td>返回列表的长度</td>
            <td className='monospace'>length(a b c) // 3</td>
          </tr>
          <tr>
            <td>set-nth(list, n, value)</td>
            <td>设置列表第 n 项的值为 value。n超出list长度会报错</td>
            <td className='monospace'>set-nth(a b c, 2, x) // a x c</td>
          </tr>
          <tr>
            <td>nth(list, n)</td>
            <td>获取第 n 项的值</td>
            <td className='monospace'>nth(a b c, 3) // c</td>
          </tr>
          <tr>
            <td>zip(lists)</td>
            <td>将多个列表按照以相同索引值为一组，重新组成一个新的多维度列表</td>
            <td>
              <pre>zip(1px 2px 3px, solid dashed dotted, red green blue)</pre>
              <pre>&#47;&#47; 1px solid red, 2px dashed green, 3px dotted blue</pre>
            </td>
          </tr>
          <tr>
            <td rowSpan={7}>Map(映射) 函数</td>
            <td colSpan={3}>Map(映射)对象是以一对或多对的 key/value 来表示。Sass Map 是不可变的，因此在处理 Map 对象时，返回的是一个新的 Map 对象，而不是在原有的 Map 对象上进行修改。</td>
          </tr>
          <tr>
            <td>map-get(map, key)</td>
            <td>返回 Map 中 key 所对应的 value(值)。如没有对应的 key，则返回 null 值。</td>
            <td>
              <pre>$font-sizes: (&quot;small&quot;: 12px, &quot;normal&quot;: 18px, &quot;large&quot;: 24px)</pre>
              <pre>map-get($font-sizes, &quot;small&quot;) // 12px</pre>
            </td>
          </tr>
          <tr>
            <td>map-has-key(map, key)</td>
            <td>判断 map 是否有对应的 key，存在返回 true，否则返回 false。</td>
            <td className='monospace'>map-has-key($font-sizes, &quot;big&quot;) // false </td>
          </tr>
          <tr>
            <td>map-keys(map)</td>
            <td>返回 map 中所有的 key 组成的队列。</td>
            <td className='monospace'>map-keys($font-sizes) // &quot;small&quot;, &quot;normal&quot;, &quot;large&quot;</td>
          </tr>

          <tr>
            <td>map-values(map)</td>
            <td>返回 map 中所有的 value 并生成一个队列。</td>
            <td className='monospace'>map-values($font-sizes) // 12px, 18px, 24px</td>
          </tr>

          <tr>
            <td>map-merge(map1, map2)</td>
            <td>合并两个 map 形成一个新的 map 类型，即将 map2 添加到 map1的尾部</td>
            <td>
              <pre>$font-sizes2: (&quot;x-large&quot;: 30px)</pre>
              <pre>map-merge($font-sizes, $font-sizes2) </pre>
              <pre>&#47;&#47; &quot;small&quot;: 12px, &quot;normal&quot;: 18px, &quot;large&quot;: 24px, &quot;x-large&quot;: 30px</pre>
            </td>
          </tr>
          <tr>
            <td>map-remove(map, keys...)</td>
            <td>移除 map 中的 keys，多个 key 使用逗号隔开。</td>
            <td className='monospace'>map-remove($font-sizes, &quot;small&quot;, &quot;large&quot;) // (&quot;normal&quot;: 18px) </td>
          </tr>

          <tr>
            <td rowSpan={9}>Introspection 函数</td>
            <td colSpan={3}>Sass Introspection 函数比较少用于构建样式表，一般用于代码的调试上。</td>
          </tr>
          <tr>
            <td>call(function, arguments...)</td>
            <td>函数的动态调用，即调用函数function（包含自定义函数、内置函数、纯css函数等），参数arguments，并返回结果。</td>
            <td className='monospace'>color: call(rgb, 0, 0, 0); // color:#000000;</td>
          </tr>
          <tr>
            <td>type-of(value)</td>
            <td>返回值类型。返回值可以是 number, string, color, list, map, bool, null, function, arglist。</td>
            <td>
              <pre>type-of(15px) // number</pre>
              <pre>type-of(#ff0000) // color</pre>
              <pre>type-of(left) // string</pre>
            </td>
          </tr>
          <tr>
            <td>unit(value)</td>
            <td>value必须是数字开头，否则报错，返回传入数字的单位，该单位可以是任意的字母、汉字、数字（不能在开头位置）的组合，没有单位时返回空字符串</td>
            <td>
              <pre>unit(15px) // &quot;px&quot;</pre>
              <pre>unit(2abc1王) // &quot;abc1王&quot;</pre>
            </td>
          </tr>
          <tr>
            <td>unitless(value)</td>
            <td>判断传入的数字是否不带有单位，返回一个布尔值，如果不带单位则返回true，带有单位则返回false。</td>
            <td>
              <pre>unitless(15px) // false</pre>
              <pre>unitless(2) // true</pre>
            </td>
          </tr>

          <tr>
            <td>function-exists(functionName)</td>
            <td>用于检测指定的函数是否存在</td>
            <td className='monospace'>function-exists(px-to-em) // true</td>
          </tr>

          <tr>
            <td>global-variable-exists(variableName)</td>
            <td>用于检测某个全局变量是否定义，变量名不含有$符号</td>
            <td className='monospace'>global-variable-exists((color-0) // true</td>
          </tr>

          <tr>
            <td>mixin-exists(mixinName)</td>
            <td>用于检测指定混入是否存在，混入名不含有$符号</td>
            <td className='monospace'>mixin-exists(ellipsis) // true</td>
          </tr>

          <tr>
            <td>variable-exists(variableName)</td>
            <td>判断变量是否在当前的作用域下，变量名不含有$符号，和js的作用域基本一个概念，在作用域里定义的变量在作用域是访问不到的</td>
            <td className='monospace'>variable-exists(color-0) // true</td>
          </tr>

        </tbody>
      </table>
      <p className='to-lower-case'>,to-lower-case</p>

      <p>1、使用@each为一个颜色的list生成不同的类名：
        <span className='item-red'>className=item-red</span>&#12288;
        <span className='item-green'>className=item-green</span>&#12288;
        <span className='item-blue'>className=item-blue</span>
      </p>
      <div className='code'>
        <pre>$colors:red,green,blue; &#12288;</pre>
        <pre>@each $i in $colors &#123; .item-#&#123; $i &#125; &#123; color: $i; &#125;</pre>
      </div>
      <p>2、使用@each为一个颜色的map生成不同的类名：
        <span className='text-default'>className=text-default</span>&#12288;
        <span className='text-disabled'>className=text-disabled</span>&#12288;
        <span className='text-primary'>className=text-primary</span>&#12288;
        <span className='text-success'>className=text-success</span>&#12288;
        <span className='text-warning'>className=text-warning</span>&#12288;
        <span className='text-danger'>className=text-danger</span>
      </p>
      <p><img alt='使用@each为一个颜色的map生成不同的类名' src={require('@/assets/images/doc/classname-map.png')} /></p>

    </div>
  )
}

export default Css

