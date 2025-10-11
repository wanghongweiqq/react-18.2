/*
 * @Author: 王宏伟
 * @Email：wanghongwei@hualala.com
 * @Date: 2024-03-25 15:39:41
 * @Description: 子组件B的内容
 * @FilePath: /react-18.2/src/view/Doc/UseContext/B3.js
 */

import React, { useContext } from 'react'
import Context3 from './context3'

function B3 () {
  const context = useContext(Context3)
  return (
    <div>
      <p>子组件B3的内容，使用的简洁的useContext</p>
      <p>{context.name} : {context.age}</p>
    </div>
  )
}

export default B3
