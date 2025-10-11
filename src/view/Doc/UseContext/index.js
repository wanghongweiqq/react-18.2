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
  const [ value1, setValue1 ] = useState({ name: 'wanghongwei', age: 18 }) // 这里即使赋值为null/undefined也不会采用createContext(defaultValue)的默认值，
  let value2 = { name: 'value2', age: 18 } // 普通变量声明的值会在每次render时恢复初始值，所以不要使用这种形式来定义数据
  let value3 = useRef({ name: 'value3', age: 18 })

  // const [ result, setResult ] = useState({ value: 1 })
  const result = useMemo(() => {
    return { value: Math.random() }
  }, [])// 没有第二个参数时，每次本组件渲染，都会导致result重新复制，导致子组件重新渲染
  // const result = { value: 1 } // result是引用类型， 哪怕A使用memo，也会让A组件一直重复渲染，因为他是浅比较，就是Object.is，当父组件重新渲染时，会重新在内存中开辟一个地址赋值给 result，此时地址发生改变，子组件会重新渲染，所以要使用useMemo。基本数据类型时不会重复渲染
  // const result = 1

  const change1 = () => {
    setValue1({ name: 'change1', age: Math.random() })
    // A不使用memo时，该组件的重新渲染都会导致其重新渲染
    // result.value = Math.random()
    // setResult(result) // 引用地址不变，A不会重复渲染
    // setResult({ value: Math.random() })// 引用地址改变，A重复渲染
  }
  const change2 = () => {
    value2 = { name: 'change2', age: 1 }
    console.log('变量改变change2', value2) // 触发change2虽然改变了value2的值，但因为不是响应式数据不会导致重新渲染，不会出发下面的console.log('render-value2', value2)，点击change2后再点击change1，value2仍是初始值，change1的触发会导致页面重新render，从而将value2的值变为初始值，useState、useRef声明的数据不会因为render而重新初始化
  }
  console.log('render-value2', value2)
  const change3 = () => {
    value3.current = { name: 'change3', age: 1 }
    console.log('value3.current', value3.current)
  }

  return (
    <Context1.Provider value={value1}>
      <Context2.Provider value={value2}>
        <Context3.Provider value={value3.current}>
          <div className='pg-doc pg-css'>
            <A result={result} />
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
