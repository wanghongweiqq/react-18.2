/*
 * @Author: 王宏伟
 * @Email：wanghongwei@hualala.com
 * @Date: 2024-03-25 15:39:41
 * @Description: 子组件B的内容
 * @FilePath: /react-18.2/src/view/Doc/UseContext/B1.js
 */

import React, { useContext } from 'react'
import Context1 from './context1'

function B1 () {
  const context = useContext(Context1)
  console.log('context', context)
  return (
    <div>
      <p>子组件B1的内容，使用的简洁的useContext</p>
      {context &&
       <p>{context.name} : {context.age}</p>
      }

    </div>
  )
}

export default B1
