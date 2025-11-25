/*
 * @Author: 王宏伟
 * @Email：wanghongwei@hualala.com
 * @Date: 2025-09-25 15:39:41
 * @Description: createContext和useContext
 * @FilePath: /react-18.2/src/view/Doc/UseContext/index.js
 */

import React, { useState, useRef, useMemo } from 'react'
import Context1 from './context1'
import Context2 from './context2'
import Context3 from './context3'
import A from './A'

function UseContext () {
  const [ value1, setValue1 ] = useState({ name: 'value1', age: 18 }) // 这里即使赋值为null/undefined也不会采用createContext(defaultValue)的默认值，
  let value2 = { name: 'value2', age: 18 } // 普通变量声明的值会在每次render时恢复初始值，所以不要使用这种形式来定义数据
  let value3 = useRef({ name: 'value3', age: 18 })

  // createContext 的value使用useState定义：OK
  const change1 = () => {
    setValue1({ name: 'change1', age: Math.random() })
  }

  // createContext 的value使用普通引用类型数据定义：错误，不建议使用
  const change2 = () => {
    value2 = { name: 'change2', age: Math.random() }
    console.log('变量改变change2', value2) // 触发change2虽然改变了value2的值，但因为不是响应式数据不会导致重新渲染，不会触发下面的console.log('render-value2', value2)，点击change2后再点击change1，value2仍是初始值，这时因为change1的触发会导致页面重新render，从而将value2的值变为初始值。useState、useRef声明的数据不会因为render而重新初始化
  }
  console.log('render-value2', value2)

  // createContext 的value使用useRef定义：不是响应式，依赖其他数据的改变导致重新渲染时才能正常显示，不建议使用
  const change3 = () => {
    value3.current = { name: 'change3', age: Math.random() }
    console.log('value3.current', value3.current)
  }

  return (
    <Context1.Provider value={value1}>
      <Context2.Provider value={value2}>
        <Context3.Provider value={value3.current}>
          <div className='pg-doc pg-css'>
            <A />
            <p>子组件B1 : useState生效</p>
            <button onClick={change1}>useState-改变Context1{JSON.stringify(value1)}</button>
            <p>子组件B2 : 变量自始至终不生效</p>
            <button onClick={change2}>普通变量-改变Context2{JSON.stringify(value2)}</button>
            <p>子组件B3 : useRef不会主动刷新，要等别的待刷新行为出发后才会生效</p>
            <button onClick={change3}>useRef-改变Context3{JSON.stringify(value3.current)}</button>
          </div>
        </Context3.Provider>
      </Context2.Provider>
    </Context1.Provider>
  )
}

export default UseContext
