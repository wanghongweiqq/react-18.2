/*
 * @Author: 王宏伟
 * @Email：wanghongwei@hualala.com
 * @Date: 2024-03-25 15:39:41
 * @Description: 子组件C的内容
 * @FilePath: /react-18.2/src/view/Doc/UseContext/B2.js
 */

import React from 'react'
import Context2 from './context2'

function B2 () {
  return <Context2.Consumer>
    {
      context =>
        <div>
          <p>子组件B2的内容，使用的复杂的Consumer</p>
          <p>{context.name} : {context.age}</p>
        </div>

    }
  </Context2.Consumer>

}

export default B2
