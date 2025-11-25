/*
 * @Author: 王宏伟
 * @Email：wanghongwei@hualala.com
 * @Date: 2025-09-25 15:39:41
 * @Description: 防止重复渲染
 * @FilePath: /react-18.2/src/view/Doc/RepeatRender/index.js
 */

import React, { useState, useRef, useMemo } from 'react'
import Child from './Child'

function RepeatRender () {
  const [ value1, setValue1 ] = useState({ name: 'value1', age: 18 })

  // 子组件引用父组件的数据，为了不导致重复渲染，定义数据时最好使用：useState，而且是一个变化数据时还能主动触发更新
  // 数据不变时：可以使用：useMemo，基本数据类型时甚至可以使用一个普通的变量

  // 传给子组件的属性是不是一个变值都可以使用useState
  // const [ result, setResult ] = useState({ value: 1 })

  // 如果传给子组件的属性是一个固定不变的值的话可以使用useMemo
  // const result = useMemo(() => {
  //   return { value: 1 }
  // }, [])// 没有第二个参数时，每次本组件渲染，都会导致result重新复制，导致子组件重新渲染
  let result = { value: 1 } // result是引用类型， 哪怕子组件Child使用memo，也会让Child组件一直重复渲染，因为他是浅比较，就是Object.is，当父组件重新渲染时，会重新在内存中开辟一个地址赋值给 result，此时地址发生改变，子组件会重新渲染。后面即使通过changeResult改变了result值，渲染父组件时又会重新执行这里的赋值，导致子组件渲染还是这里的值，之前的改变无效。如果把result定义在函数UseContext外边，重新渲染时会传递新值给子组件。
  // let result = 1 // 基本数据类型时不会重复渲染

  // 测试传给子组件的数据是一个可变值时可以触发该方法
  const changeResult = () => {
    // Child不使用memo时，该组件的重新渲染都会导致其重新渲染
    result = Math.random()
    // result.value = Math.random()
    // setResult(result) // 引用地址不变，Child不会重复渲染
    // setResult({ value: Math.random() })// 引用地址改变，Child重复渲染
  }

  // createContext 的value使用useState定义：OK
  const change1 = () => {
    setValue1({ name: 'change1', age: Math.random() })
  }

  return (
    <div className='pg-doc'>
      <h1>父组件给子组件传递数据，如何防止重复渲染</h1>
      <p>父组件的内容，result：{JSON.stringify(result)}</p>
      <button onClick={changeResult}>改变result</button>
      <Child result={result} />
      <button onClick={change1}>触发render</button>
      <p>{JSON.stringify(result)}</p>

      <h2>分类说明</h2>
      <p>子组件已经使用了memo包裹，这时只要传过来的属性（本例为result）不变，就不会重复渲染</p>
      <h3>如果是不变的数据，可以使用如下方式:</h3>
      <p>1、useState，同时支持变的数据</p>
      <p>2、useMemo，第二个参数要使用空数组，这样只会初始化时执行一次</p>
      <p>3、import导入进来的变量</p>
      <p>4、基本数据类型时可以使用变量直接定义，但引用数据类型时不可以，会导致每次父组件渲染时都重新渲染子组件。</p>
      <h3>如果是可变的数据，可以使用如下方式:</h3>
      <p>1、useState</p>
      <p>2、全局的状态存储，如Redux等，这时如果条件允许，其实这时可以直接子组件使用了，不用父组件传递过去</p>

      <h2>特别说明</h2>
      <p>result是父组件内定义的变量-引用类型，哪怕子组件Child使用memo，也会让Child组件一直重复渲染，因为他是浅比较，就是Object.is，当父组件重新渲染时，会重新在内存中开辟一个地址赋值给 result，此时地址发生改变，子组件会重新渲染。后面即使通过changeResult改变了result值，渲染父组件时又会重新执行这里的赋值，导致子组件渲染还是这里的值，之前的改变无效。如果把result定义在函数UseContext外边，重新渲染时会传递新值给子组件。</p>
      <p>子组件引用父组件的数据，为了不导致重复渲染，定义数据时最好使用：useState，而且是一个变化数据时还能主动触发更新</p>
      <p>数据不变时：可以使用：useMemo，基本数据类型时甚至可以使用一个普通的变量</p>
    </div>
  )
}

export default RepeatRender
