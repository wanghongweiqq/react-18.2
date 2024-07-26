/*
 * @Author: 王宏伟
 * @Email：wanghongwei@hualala.com
 * @Date: 2024-03-25 15:39:41
 * @Description: css说明
 * @FilePath: /react-18.2/src/view/Doc/Css.js
 */
import React from 'react'
import './Css.scss'
import styles from './Css.module.scss'

function Css () {
  return (
    <div className='pg-doc'>
      <h1>css说明</h1>
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

      <h3>1、使用常规的css文件，对应上面的mode-icss</h3>
      <p>创建一个CSS文件，css文件名称不是以.module+.css/sass/scss结尾，并在React组件中引入这个CSS文件。</p>
      <div className='code'>
        <pre>import &apos;./Css.scss&apos;</pre>
        <pre>className=&apos;red bold&apos;</pre>
      </div>
      <p>特点：方便简单，但容易冲突，对命名要求较高，可以使用相对唯一的层级嵌套规避同名冲突</p>

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
        <pre>className=&apos;red bold&apos; //也可是一个字符串格式的变量</pre>
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
    </div>
  )
}

export default Css

