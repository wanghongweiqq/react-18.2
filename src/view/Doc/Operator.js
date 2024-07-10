/*
 * @Author: 王宏伟
 * @Email：wanghongwei@hualala.com
 * @Date: 2024-03-25 15:39:41
 * @Description: 常用运算符
 * @FilePath: /react-18.2/src/view/Doc/Operator.js
 */
import React from 'react'

function Operator () {
  console.log('!!')
  const a = '11'
  console.log(a.toString()) // 输出: "1011"
  console.log(typeof a.toString()) // 输出: "1011"

  return (
    <div className='pg-doc'>
      <h1>常用逻辑运算符</h1>
      <p>一些常用的操作符可以让你的前端代码更加简洁明了。JS 中常用的运算符/操作符，其目的在于简化代码。</p>

      <h2>?? 空判断运算符（空值合并运算符）</h2>
      <p>ES2020 ( ES11 ) 引入了一个新的 Null 判断运算符??。它的行为类似||，但是只有运算符左侧的值为null或undefined时，才会返回右侧的值。</p>
      <pre>null ?? 3        //3</pre>
      <pre>undefined ?? 3   //3</pre>
      <pre>7 ?? 3           //7</pre>

      <h2>?. 链判断运算符（可选链运算符）</h2>
      <p>在js，如果读取对象里的某个属性时，往往需要先判断对象是否存在，以防止报错。而?.表示若.前面有值（不为null和undefined）才调用，没有值返回undefined。</p>
      <p>?.之前的链式调用</p>
      <pre>let street = user && user.address && user.address.region;</pre>
      <p>?.的链式调用</p>
      <pre>let- street = user?.address?.region</pre>

      <h2>赋值运算符：??= += -= *=  /=  %=  &&= ||=</h2>
      <h2>??= 逻辑空值赋值运算符（空判断赋值运算符）</h2>
      <p>该运算符只有在当前值为空或未定义的情况下才会赋一个新的值。</p>
      <pre>let a = null</pre>
      <pre>const b = 5</pre>
      <pre>console.log(a ??= b)        // 5，等价于下面的运算</pre>
      <pre>console.log(a = (a ?? b))   // 5</pre>

      <h2>+= 加法赋值运算符</h2>
      <p>将右操作数的值添加到变量，并将结果分配给该变量。两个操作数的类型决定了加法赋值运算符的行为，可能为加法或拼接。</p>
      <p>如果+的其中一个操作数是字符串，则执行字符串拼接，否则执行数字加法</p>
      <pre>let c = false</pre>
      <pre>c += &#39;1&#39;   // c=&#39;false1&#39;</pre>
      <pre>let d = 1</pre>
      <pre>d += &#39;1&#39;   // d=&#39;11&#39;</pre>
      <p>如果是Boolean和Number做加法，那Boolean的true=1，false=0</p>
      <pre>let a = true</pre>
      <pre>a += 1     // a=2</pre>
      <pre>let b = false</pre>
      <pre>b += 1     // b=1</pre>

      <h2>-= 减法赋值运算符</h2>
      <p>将变量中减去右操作数的值，并将结果赋值给该变量数，结果只能为Number类型（一个有意义的数字或者NaN）</p>
      <pre>let e = 2</pre>
      <pre>e -= 3     // e=-1</pre>
      <pre>let f = 2</pre>
      <pre>f -= &#39;3&#39;   // f=-1 字符串的3将被转化为数字3</pre>
      <p>如果是Boolean和Number做加法，那Boolean的true=1，false=0</p>
      <pre>let g = 2</pre>
      <pre>g -= true  // g=1</pre>

      <h2>b ? x : y 三元运算符</h2>
      <p>b为真，则 a取值x，否则取值y</p>
      <pre>const a = b ? x : y</pre>

      <h2>数字的进制转化</h2>
      <h3>XX转十进制：parseInt( string, radix )</h3>
      <p>string，可以为字符串或数字，当为非十进制时必须为字符串，支持对其前面数字的部分转化</p>
      <p>radix-基数，可选，表示要解析的数字的基数，该值介于 2 ~ 36 之间。可以明确告知string的进制类型</p>
      <pre>parseInt(&#39;1011 &#39;, 2);      // 二转十，结果: 11</pre>
      <pre>parseInt(&#39;0x1011 &#39;, 16);   // 十六转十，结果: 4113</pre>
      <pre>parseInt(&#39;1011 &#39;, 16);     // 十六转十，结果: 4113</pre>
      <p><em>当参数 radix 的值为 0，或没有设置该参数时，parseInt() 会根据 string 来判断数字的基数。</em></p>
      <p>1、如果 string 以 0x 开头，parseInt() 会把 string 的其余部分解析为十六进制的整数。</p>
      <p>2、以0开头会转化为10进制，ES5之前会解析为八进制</p>
      <p>3、如果 string 以 1 ~ 9 的数字开头，parseInt() 将把它解析为十进制的整数。</p>
      <h3>十转XX进制：toString( radix )</h3>
      <p>radix-基数，可选，表示要解析的数字的基数，默认10，该值介于 2 ~ 36 之间。要转换的必须是数字类型</p>
      <p>数据转化，必须对Number类型进行toString，返回相应进制的字符串。如果是字符串格式的数字将返回该字符串，不会进行进制/基数转化。</p>
      <pre>const num = 11       // 不能直接使用11.toString(2)，会报错</pre>
      <pre>num.toString(2)      // 十转二，结果: &#39;1011&#39;</pre>
      <pre>num.toString(8)      // 十转二，结果: &#39;13&#39;</pre>

      <h2>& | ~ 位运算符</h2>
      <p>& 为按位与AND、| 为按位或OR，~ 为按位非NOT，都是对数字的二进制编码进行位操作</p>
      <p>&：在两个操作数对应的二进位都为 1 时，该位的结果值才为 1，其他情况是０</p>
      <p>|：在两个操作数对应的二进位都为 0 时，该位的结果值才为 0，其他情况是1</p>
      <p>~：将操作数的位反转。如同其他位运算符一样，它将操作数转化为 32 位的有符号整型。</p>
      <h3> & 按位与示例：都是1才返回1</h3>
      <pre>const a = 5</pre>
      <pre>a & 1      // 1</pre>
      <pre>转化过程如下：</pre>
      <pre>5=101      // 2进制</pre>
      <pre>1=001      // 2进制</pre>
      <pre>a & 1=001  // 2进制，转化为10进制为1</pre>
      <pre>另外逻辑非非运算符和其结合可以判断奇偶性：</pre>
      <pre>!!(a & 1)  // true</pre>
      <p><em>number & 1 可以用来判断奇偶性，结果为1或 !! ( n & 1 ) 结果为true时为奇数</em></p>
      <p><em>number % 2 可以用来判断奇偶性，结果为1或 !! ( n % 2 ) 结果为true时为奇数</em></p>
      <h3>| 按位或示例：都是0才返回0</h3>
      <pre>const a = 5    // 00000000000000000000000000000101</pre>
      <pre>const b = 3    // 00000000000000000000000000000011</pre>
      <pre>a | b          // 00000000000000000000000000000111 十进制为：7</pre>
      <h3>~ 按位非示例：取反</h3>
      <pre>const a = 5;   // 00000000000000000000000000000101</pre>
      <pre>~a             // 11111111111111111111111111111010  十进制为：-6</pre>

      <h2>~~ 双位运算符</h2>
      <p>清除浮点数部分用来取值，也可以理解为离X坐标轴0点最近的且最大的整数，与取整运算符|0有同样的功能，结果只能是Number类型的数字</p>
      <p>可以使用双位操作符来替代正数的 Math.floor( )，替代负数的Math.ceil( )。双否定位操作符的优势在于它执行相同的操作运行速度更快。</p>
      <p>对于数字开头的字符串，如果里面含有非数字的内容（0x/0X开头除外），结果为0。可以理解为先把整体字符串用Number方法转数字，再执行取整运算。这一点和parseInt方法不同，parseInt支持部分转，先把前面能转数字的转化为数字，后面的再直接扔掉</p>
      <p>~~ 运算符方法执行很快，当你执行数百万这样的操作非常适用，速度明显优于其他方法，但是代码的可读性比较差。还有一个需要要注意的地方，按位双非运算符方法仅适用于32位整数，即(2**31)-1 =  2147483647。所以对于任何高于2147483647的数字，按位运算符(~~)都会给出错误的结果，所以在这种情况下建议使用Math.floor()</p>
      <table>
        <thead>
          <tr><th>表达式</th><th>结果</th></tr>
        </thead>
        <tbody>
          <tr><td>Math.floor(5.9)</td><td>5</td></tr>
          <tr><td>~~5.9 / &#39;5.9&#39;</td><td>5</td></tr>
          <tr><td>Math.ceil(-5.9)</td><td>-5</td></tr>
          <tr><td>~~-5.9 </td><td>-5</td></tr>
          <tr><td>~~null / undefined / false / 0 / &#39;&#39;/ &#123;&#125; / []</td><td>0</td></tr>
          <tr><td>~~true</td><td>1</td></tr>
          <tr><td> ~~(&#39;0x10&#39;) //0x为16进制数字</td><td>16</td></tr>
          <tr><td>~~&#39;5a&#39;</td><td>0</td></tr>
          <tr><td>~~true</td><td>1</td></tr>
          <tr><td colSpan={2}> |0 取整运算符和 ~~ 双位运算符有相同的结果</td></tr>
        </tbody>
      </table>

      <h2>|0 取整运算符</h2>
      <p>清除浮点数部分用来取值，与双位运算符~~有同样的功能，，结果只能是Number类型的数字</p>
      <p>取整原因：所有的按位操作符的操作数都会被转成补码形式的有符号32位整数。也就是如果有小数则忽略。而0 转为二进制则为 000000......(32位) 。然后一一比较，还是原来上面的值。所以只是为了取整。</p>

      <h2>! 逻辑运算符 </h2>
      <p>!，可将变量转换成 boolean 类型，null、undefined、0 和空字符串 &#39; &#39;取反都为 true，其余都为 false。一般来说会有好几种用法，!，!!，!=，!==</p>
      <p>0、和空字符串 &#39; &#39;和false，在不判断类型的情况下是相当的，以下判断全部成立</p>
      <pre>0 == &#39;&#39; == false != null != undefined </pre>
      <pre>0 !== &#39;&#39; !== false !== null !== undefined</pre>

      <h3>!! 逻辑非非运算符</h3>
      <p>用于将结果转换为boolean类型，a和!!a在if判断时结果相同，但含义不同，a表示有正常值(非 0/false/&#39;&#39;/null/undefined)，而!!a表示为boolean的true</p>

      <h2>&&与 ||或 短路运算符</h2>
      <p>&&为取假运算，从左到右依次判断，如果遇到一个假值，就返回假值，以后不再执行，否则返回最后一个真值</p>
      <p>||为取真运算，从左到右依次判断，如果遇到一个真值，就返回真值，以后不再执行，否则返回最后一个假值</p>

      <h2>运算符优先级</h2>
      <p>JavaScript 运算符优先级，是描述在计算机运算计算表达式时执行运算的先后顺序。先执行具有较高优先级的运算，然后执行较低优先级的运算。例如，我们常说的先执行相乘和除，再执行加减运算。</p>
      <p><img alt='运算符优先级' src={require('@/assets/images/doc/priority.png')} /></p>

      <h2>计算机存储中的数字进制转化</h2>
      <h3>十进制转二进制</h3>

      <p><em>正整数转换</em></p>
      <p>转换规则：正整数除以2取余，然后用商不断的除以2取余，直到商等于0(对应取余为1)，再把每一步的余数倒序排列，即为转换的二进制</p>
      <p>数字10为例</p>
      <pre>10/2 = 5 余数为： 0</pre>
      <pre>5 /2 = 2 余数为： 1</pre>
      <pre>2 /2 = 1 余数为： 0</pre>
      <pre>1 /2 = 0 余数为： 1</pre>
      <pre>按照倒序排列应为：1010</pre>

      <p><em>负整数转换</em></p>
      <p>在计算机中，已知原码，则：</p>
      <p>正数的反码补码和原码一致；</p>
      <p>负数的反码为除了符号位外都取反，补码为反码加1；</p>
      <pre>原码：</pre>
      <pre>a =  5= 00000101</pre>
      <pre>b = -5= 11111011</pre>
      <pre>反码：</pre>
      <pre>a.fan = 00000101</pre>
      <pre>b.fan = 10000100</pre>
      <pre>补码：</pre>
      <pre>a.bu  = 00000101</pre>
      <pre>b.bu  = 10000101</pre>
      <p>转换规则：先将对应的正数转换为二进制，然后对二进制取反(1变0,0变1，这里不是获取反码，因为正数的反码是它本身，而负数的反码符号位不变)，最后对结果加1（因为前面获取的不是负数的反码，这里的加1自然不是其补码）</p>
      <p>数字-10为例</p>
      <p>1、-10的绝对值（正值）为10，10的二进制原码为1010，int类型的数占用4字节（32位），高位补0之后32位计算机中就是</p>
      <pre>00000000 00000000 00000000 00001010</pre>
      <p>2、获取反码：取反（1变0,0变1），结果为</p>
      <pre>11111111 11111111 11111111 11110101</pre>
      <p>3、获取补码：加1，结果为(如果相加结果为2则进一位，从右向左类推)</p>
      <pre>11111111 11111111 11111111 11110110</pre>

      <p><em>小数转换</em></p>
      <p>转换规则：整数部分和小数部分单独转换，然后把两部分转换的值组合即可，整数部分如上面，小数部分转化规则如下：</p>
      <p>对小数点后面的数乘以2，得到一个小数，然后取小数的整数(0或者1)，再把小数点后面的数乘以2，以此类推，直到小数部分为0或者达到位数(超过位数就可能出现精度丢失)，最后把取到的整数部分(0或1)正序排序</p>
      <p>以6.125为例</p>
      <p>1、整数部分6转换为二进制为：110</p>

      <p>2、小数0.125转化过程如下：</p>
      <pre>0.125 * 2 = 0.25 取整数：0</pre>
      <pre>0.25 * 2 = 0.5   取整数：0</pre>
      <pre>0.5 * 2 = 1.0    取整数：1</pre>
      <pre>正序排序结果为：001</pre>
      <p>3、组合成二进制则为：110.001</p>

      <h3>二进制转十进制</h3>

      <p><em>正整数转换</em></p>
      <p>转换规则：从右到左每一位乘以2的n次方（n从0递增），最后将结果相加</p>
      <p>二进制 1010 为例</p>
      <pre>1*2+1*2*2*2=10</pre>

      <p><em>负整数转换</em></p>
      <p>转换规则：原码减1，再取反，最后从右到左每一位乘以2的n次方（n从0递增），最后将结果相加</p>
      <p>二进制 1111 1011 为例</p>
      <pre>首位是1，所以为负数</pre>
      <pre>1、减1</pre>
      <pre>1111 1010</pre>
      <pre>2、取反</pre>
      <pre>0000 0101</pre>
      <pre>3、按正整数方法求10进制的值</pre>
      <pre>1*2*0+1*2*2=5</pre>
      <pre>最后将符号和求和结果结合，结果为：-5</pre>

      <p><em>小数转换</em></p>
      <p>转换规则：分别为整数和小数转化，最后相加</p>
      <p>整数：从右到左每一位乘以2的n次方（n从0递增），最后将结果相加</p>
      <p>小数：从左到右每一位乘以2的n次方（n从-1递减），最后将结果相加</p>
      <p>二进制 110.001 为例</p>
      <pre>1、整数：110</pre>
      <pre>1*2+1*2*2=6</pre>
      <pre>2、小数：0.001</pre>
      <pre>1*(1/2*2*2)=0.125</pre>
      <pre>3、整数和小数相加</pre>
      <pre>6+0.125=6.125</pre>
    </div>
  )
}

export default Operator

