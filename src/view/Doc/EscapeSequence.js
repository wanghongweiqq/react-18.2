/*
 * @Author: 王宏伟
 * @Email：wanghongwei@hualala.com
 * @Date: 2024-07-19 16:28:07
 * @Description: 转义字符串
 * @FilePath: /react-18.2/src/view/Doc/EscapeSequence.js
 */
import React from 'react'

function EscapeSequence () {
  console.log(11111)
  console.log('   '.charCodeAt(0))
  console.log(String.fromCharCode(39))
  return (
    <div className='pg-doc'>
      <h1>转义字符串 Escape Sequence</h1>

      <p>HTML中&lt;，&gt;，&等有特殊含义（&lt;，&gt;，用于链接签，&用于转义），不能直接使用。这些符号是不显示在我们最终看到的网页里的，那如果我们希望在网页中显示这些符号，该怎么办呢？</p>
      <p>这就要说到HTML转义字符串（Escape Sequence 逃脱的序列）了，也称字符实体(Character Entity)。</p>
      <p>在HTML中，定义转义字符串的原因有两个：</p>
      <p>1、像”&lt;“和”&gt;“这类符号已经用来表示HTML标签，因此就不能直接当作文本中的符号来使用。为了在HTML文档中使用这些符号，就需要定义它的转义字符串。当解释程序遇到这类字符串时就把它解释为真实的字符。在输入转义字符串时，要严格遵守字母大小写的规则。</p>
      <p>2、有些字符在ASCII字符集中没有定义，因此需要使用转义字符串来表示。</p>

      <h2>转义字符串的组成</h2>
      <p>转义字符串（Escape Sequence），即字符实体（Character Entity）分成三部分：第一部分是一个&符号，英文叫ampersand；第二部分是实体（Entity）名字或者是#加上实体（Entity）编号；第三部分是一个分号。</p>
      <p>比如，要显示小于号”&lt;“，就可以写 &lt；或者 &#60； 。</p>
      <p>用实体（Entity）名字的好处是比较好理解，一看lt，大概就猜出是less than的意思，但是其劣势在于并不是所有的浏览器都支持最新的Entity名字。而实体(Entity)编号，各种浏览器都能处理，方法：<em>str.charCodeAt(index)</em>可以用来获取实体编号，其中参数index为字符串中的下标，默认0，反过来，<em>String.fromCharCode(编号)</em>函数用于从Unicode字符值中返回对应的字符串，如编号39对应的单引号</p>
      <p>备注：同一个符号，可以用“实体名称”和“实体编号”两种方式引用，“实体名称”的优势在于便于记忆，但不能保证所有的浏览器都能顺利识别它，并且它是区分大小写的，而“实体编号”则没有这种担忧，但它实在不方便记忆。</p>

      <h2>常用HTML特殊转义字符列表</h2>
      <table className='escape-sequence-table'>
        <thead>
          <tr>
            <th width='60'>字符</th>
            <th width='90'>实体名称</th>
            <th width='100'>实体编号</th>
            <th colSpan={3}>说明</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>&nbsp;</td>
            <td>&nbsp ;</td>
            <td>&#160 ;</td>
            <td>不换行空格，全称No-Break Space，大小受字体影响较大，大约是1/3个汉子的长度</td>
            <td rowSpan={5} style={{ fontFamily: 'Microsoft YaHei' }}>
              中文字体：Microsoft YaHei<br />
              路由&&&&信息<br />
              路由abcd信息<br />
              路由信息信息<br />
              路由&ensp;信息信息&ensp;&emsp;\\1个ensp<br />
              路由&ensp;&ensp;信息&emsp;&emsp;&emsp;\\2个ensp<br />
              路由&emsp;信息&emsp;&emsp;&emsp;\\1个emsp<br />
              路由&nbsp;&nbsp;&nbsp;信息&emsp;&emsp;&emsp;\\3个nbsp<br />
              路由&#12288;信息&emsp;&emsp;&emsp;\\1个全角<br />
              路由信息
            </td>
            <td rowSpan={5} style={{ fontFamily: 'Arial' }}>
              英文字体：Arial<br />
              路由&&&&信息<br />
              路由abcd信息<br />
              路由信息信息<br />
              路由&ensp;信息信息&ensp;&emsp;\\1个ensp<br />
              路由&ensp;&ensp;信息&emsp;&emsp;&emsp;\\2个ensp<br />
              路由&emsp;信息&emsp;&emsp;&emsp;\\1个emsp<br />
              路由&nbsp;&nbsp;&nbsp;信息&emsp;&emsp;&emsp;\\3个nbsp<br />
              路由&#12288;信息&emsp;&emsp;&emsp;\\1个全角<br />
              路由信息
            </td>
          </tr>
          <tr>
            <td> </td>
            <td></td>
            <td>&#32 ;</td>
            <td>普通空格，键盘上的一个space，连续多个时只按一个识别</td>
          </tr>
          <tr>
            <td>&ensp;</td>
            <td>&ensp ;</td>
            <td>&#8194 ;</td>
            <td>半方大的空格，全称是En Space，大小受字体影响较小，半个汉子的长度，en是字体排印学的计量单位，为em宽度的一半。大约是1.5个普通空格</td>
          </tr>
          <tr>
            <td>&emsp;</td>
            <td>&emsp ;</td>
            <td>&#8195 ;</td>
            <td>全方大的空格，全称是Em Space，大小受字体影响较小，1个汉子的长度，em是字体排印学的计量单位，相当于当前指定的点数。大约是3个普通空格，<br />如果是中文中插入N个汉字长度的空格，使用其比较好，中文段落缩进还是用：text-indent: 2em;</td>
          </tr>
          <tr>
            <td>&#12288;</td>
            <td></td>
            <td>&#12288 ;</td>
            <td>全角空格，1个汉子的长度</td>
          </tr>
          <tr>
            <td>&apos;</td>
            <td>&apos ;</td>
            <td>&#39 ;</td>
            <td colSpan={3}>单引号，&apos;\&apos;&apos;.charCodeAt(0)=39</td>
          </tr>
          <tr>
            <td>&quot;</td>
            <td>&quot ;</td>
            <td>&#34 ;</td>
            <td colSpan={3}>双引号，&apos;&quot;&apos;.charCodeAt(0)=34 </td>
          </tr>
          <tr>
            <td>‘</td>
            <td>&lsquo ;</td>
            <td>&#8216 ;</td>
            <td colSpan={3}>中文单引号左，可以直接使用，不用转义</td>
          </tr>
          <tr>
            <td>’</td>
            <td>&rsquo ;</td>
            <td>&#8217 ;</td>
            <td colSpan={3}>中文单引号右，可以直接使用，不用转义</td>
          </tr>
          <tr>
            <td>&lt;</td>
            <td>&lt ;</td>
            <td>&#60 ;</td>
            <td colSpan={3}>小于号，lt 是less than的首字母缩写</td>
          </tr>
          <tr>
            <td>&gt;</td>
            <td>&gt ;</td>
            <td>&#62 ;</td>
            <td colSpan={3}>大于号，gt 是greater than的首字母缩写</td>
          </tr>
          <tr>
            <td>&#40;</td>
            <td></td>
            <td>&#40 ;</td>
            <td colSpan={3}>小括号左</td>
          </tr>
          <tr>
            <td>&#41;</td>
            <td></td>
            <td>&#41 ;</td>
            <td colSpan={3}>小括号右</td>
          </tr>
          <tr>
            <td>&#91;</td>
            <td></td>
            <td>&#91 ;</td>
            <td colSpan={3}>中括号左</td>
          </tr>
          <tr>
            <td>&#93;</td>
            <td></td>
            <td>&#93 ;</td>
            <td colSpan={3}>中括号右</td>
          </tr>
          <tr>
            <td>&#123;</td>
            <td></td>
            <td>&#123 ;</td>
            <td colSpan={3}>大括号左</td>
          </tr>
          <tr>
            <td>&#125;</td>
            <td></td>
            <td>&#125 ;</td>
            <td colSpan={3}>大括号右</td>
          </tr>
          <tr>
            <td>&</td>
            <td>&amp ;</td>
            <td>&#38 ;</td>
            <td colSpan={3}>读作/ænd/，在编程语言中表示“与运算”，当使用其开头时可用于转义</td>
          </tr>
          <tr>
            <td>#</td>
            <td></td>
            <td>&#35 ;</td>
            <td colSpan={3}>井号</td>
          </tr>
          <tr>
            <td>/</td>
            <td></td>
            <td>&#47 ;</td>
            <td colSpan={3}>斜杠</td>
          </tr>
          <tr>
            <td>\</td>
            <td></td>
            <td>&#92 ;</td>
            <td colSpan={3}>反斜杠，&apos;\\&apos;.charCodeAt(0)=92</td>
          </tr>
          <tr>
            <td>¥</td>
            <td>&yen ;</td>
            <td>&#165 ;</td>
            <td colSpan={3}>人民币符号</td>
          </tr>
          <tr>
            <td>$</td>
            <td>&US ;</td>
            <td>&#36 ;</td>
            <td colSpan={3}>美元符号</td>
          </tr>
          <tr>
            <td>€</td>
            <td>&euro ;</td>
            <td>&#8364 ;</td>
            <td colSpan={3}>欧元符号</td>
          </tr>
          <tr>
            <td>©</td>
            <td>&copy ;</td>
            <td>&#169 ;</td>
            <td colSpan={3}>版权</td>
          </tr>
          <tr>
            <td>®</td>
            <td>&reg ;</td>
            <td>&#174 ;</td>
            <td colSpan={3}>已注册商标</td>
          </tr>
          <tr>
            <td>+</td>
            <td></td>
            <td>&#43 ;</td>
            <td colSpan={3}>加号，2&#43;3=5</td>
          </tr>
          <tr>
            <td>-</td>
            <td></td>
            <td>&#45 ;</td>
            <td colSpan={3}>减号，3&#45;1=2</td>
          </tr>
          <tr>
            <td>×</td>
            <td>&times ;</td>
            <td>&#215 ;</td>
            <td colSpan={3}>乘号，2&times;3</td>
          </tr>
          <tr>
            <td>÷</td>
            <td>&divide ;</td>
            <td>&#247 ;</td>
            <td colSpan={3}>除号</td>
          </tr>
          <tr>
            <td>&sup2;</td>
            <td>&sup2 ;</td>
            <td>&#178 ;</td>
            <td colSpan={3}>2次方，3&sup2;=9</td>
          </tr>
          <tr>
            <td>&sup3;</td>
            <td>&sup3 ;</td>
            <td>&#179 ;</td>
            <td colSpan={3}>3次方，3&sup3;=27</td>
          </tr>
          <tr>
            <td>&frac12;</td>
            <td>&frac12 ;</td>
            <td>&#189 ;</td>
            <td colSpan={3}>二分之一，8&times;&frac12;=4</td>
          </tr>
          <tr>
            <td>&frac14;</td>
            <td>&frac14 ;</td>
            <td>&#188 ;</td>
            <td colSpan={3}>四分之一，8&times;&frac14;=2</td>
          </tr>
          <tr>
            <td>»</td>
            <td>&raquo ;</td>
            <td>&#187 ;</td>
            <td colSpan={3}></td>
          </tr>
        </tbody>
      </table>
、    </div>
  )
}

export default EscapeSequence

