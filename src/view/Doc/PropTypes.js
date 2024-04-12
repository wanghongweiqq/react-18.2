/*
 * @Author: 王宏伟
 * @Email：wanghongwei@hualala.com
 * @Date: 2024-03-25 15:39:41
 * @Description: prop-types 类型检测
 * @FilePath: /react-18.2/src/view/Doc/PropTypes.js
 */
import React from 'react'

function PropTypes () {
  return (
    <div className='pg-doc'>
      <h1>prop-types类型检测</h1>
      <h2>引入库</h2>
      <pre>import PropTypes from &#39;prop-types&#39;</pre>
      <h2>类组件</h2>
      <p>即可采用下面组件内static的形式，也可使用hooks的形式写在function外边</p>
      <pre>class XXX extends React.Component&#123;</pre>
      <pre>static propTypes = &#123;</pre>
      <pre> a: PropTypes.bool,</pre>
      <pre> b: PropTypes.number,</pre>
      <pre>&#125;</pre>
      <pre>static defaultProps = &#123;</pre>
      <pre> a: true,</pre>
      <pre> b: 1,</pre>
      <pre>&#125;</pre>
      <pre>……</pre>
      <pre>&#125;</pre>
      <p>static说明,凡是被static修饰的属性和方法都是静态方法和静态属性,只能被类名调用,不能被实例化对象调用（普通方法只能被实例调用，不能被类调用）,static修饰的属于当前这个类，可以被子类用extends继承。
        <a target='_blank' href='https://blog.csdn.net/persis_in/article/details/123310777' rel='noreferrer'>查看示例1</a>&nbsp;&nbsp;&nbsp;&nbsp;
        <a target='_blank' href='https://blog.csdn.net/cnds123/article/details/131792511' rel='noreferrer'>查看示例2</a></p>

      <h2>hooks组件</h2>
      <pre>function XXX (&#123;a,b&#125;)&#123;……&#125;</pre>
      <pre>XXX.propTypes= &#123;</pre>
      <pre> a: PropTypes.array,</pre>
      <pre> b: PropTypes.func,</pre>
      <pre>&#125;</pre>
      <pre>XXX.defaultProps= &#123;</pre>
      <pre> a: [],</pre>
      <pre> b: () =&gt; &#123;&#125;,</pre>
      <pre>&#125;</pre>

      <h2>PropTypes 提供一系列属性验证器</h2>
      <table>
        <tbody>
          <tr><td colSpan='2'><em>JS 原生类型</em></td></tr>
          <tr><td>symbol</td><td>PropTypes.symbol</td></tr>
          <tr><td>布尔值</td><td>PropTypes.bool</td></tr>
          <tr><td>数字</td><td>PropTypes.number</td></tr>
          <tr><td>字符串</td><td>PropTypes.string</td></tr>
          <tr><td>数组</td><td>PropTypes.array</td></tr>
          <tr><td>方法</td><td>PropTypes.func</td></tr>
          <tr><td>对象</td><td>PropTypes.object</td></tr>
          <tr><td colSpan='2'><em>特殊类型</em></td></tr>
          <tr><td>任意类型的数据</td><td>PropTypes.any</td></tr>
          <tr><td>任何可被渲染的元素（包括数字、数组等）</td><td>PropTypes.node</td></tr>
          <tr><td>React 元素</td><td>PropTypes.element</td></tr>
          <tr><td>React 元素类型，如：MyComponent</td><td>PropTypes.elementType</td></tr>
          <tr><td>几个值中的任意一个值、枚举类型</td><td>PropTypes.oneOf ( [男, 女] ),</td></tr>
          <tr><td>几种类型中的任意一个类型</td><td>PropTypes.oneOfType ( [<br />
        &nbsp;&nbsp;PropTypes.string,<br />
        &nbsp;&nbsp;PropTypes.number,<br />
        ] )</td></tr>
          <tr><td>一个数组由某一类型的元素组成</td><td>PropTypes.arrayOf ( PropTypes.number ) </td></tr>
          <tr><td>一个对象由某一类型的元素组成</td><td>PropTypes.objectOf ( PropTypes.number ) </td></tr>
          <tr><td>一个对象由特定的类型值组成</td><td>PropTypes.shape ( &#123;<br />
        &nbsp;&nbsp;color: PropTypes.string,<br />
        &nbsp;&nbsp;fontSize: PropTypes.number<br />
        &#125; )</td></tr>
          <tr><td>类的实例</td><td>PropTypes.instanceOf(Message)</td></tr>
          <tr><td colSpan='2'><em>属性必须提供</em></td></tr>
          <tr><td>xxx类型的prop必须提供</td><td>PropTypes.xxx.isRequired</td></tr>
        </tbody>
      </table>
    </div>
  )
}

export default PropTypes

