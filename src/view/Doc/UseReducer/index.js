/*
 * @Author: 王宏伟
 * @Email：wanghongwei@hualala.com
 * @Date: 2025-10-11 17:40:01
 * @Description: UseReducer
 * @FilePath: /react-18.2/src/view/Doc/UseReducer/index.js
 */

import React, { useReducer } from 'react'
import Context1 from './Context1'
import Context2 from './Context2'
import Child from './Child'

import {
  initialState,
  reducer,
} from './Reducer'

function UseReducer () {
  console.log('父组件 render')
  const [ state, dispatch ] = useReducer(reducer, initialState)

  const change1 = () => {
    dispatch({ type: 'increment' })
  }
  const change2 = () => {
    dispatch({ type: 'set', payload: 100 })
  }

  return (
    <Context1.Provider value={state}>
      <Context2.Provider value={dispatch}>
        <div className='pg-doc'>
          <h1>UseReducer的使用</h1>
          <h2>父组件</h2>
          <p>count:{state?.count}</p>
          <p>
            <button onClick={change1}>增加1</button>
            <button onClick={change2}>重置为100</button>
          </p>
          <Child />
        </div>
      </Context2.Provider >
    </Context1.Provider>
  )
}

export default UseReducer
