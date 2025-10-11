/*
 * @Author: 王宏伟
 * @Email：wanghongwei@hualala.com
 * @Date: 2024-03-25 15:39:41
 * @Description: 子组件
 * @FilePath: /react-18.2/src/view/Doc/UseReducer/Child.js
 */

import React, { useContext } from 'react'
import Context1 from './Context1'
import Context2 from './Context2'

function Child () {
  console.log('子组件 render')
  const state = useContext(Context1)
  const dispatch = useContext(Context2)
  const change1 = () => {
    dispatch({ type: 'increment' })
  }
  const change2 = () => {
    dispatch({ type: 'reset' })
  }
  const change3 = () => {
    dispatch({ type: 'errorType' })
  }

  return (
    <div>
      <h2>子组件Child</h2>
      <p>count:{state?.count}</p>
      <p>
        <button onClick={change1}>增加1</button>
        <button onClick={change2}>重置</button>
        <button onClick={change3}>错误的type</button>
      </p>
    </div>
  )
}

export default Child
