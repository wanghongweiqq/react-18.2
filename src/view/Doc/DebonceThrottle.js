/*
 * @Author: 王宏伟
 * @Email：wanghongwei@hualala.com
 * @Date: 2024-03-25 15:39:41
 * @Description: 防抖和节流
 * @FilePath: /react-18.2/src/view/Doc/DebonceThrottle.js
 */
import React, { useState, useEffect } from 'react'
import useDebounceThrottle from '@/utils/debounceThrottle2.js'
console.log('DebonceThrottle-外')

function DebonceThrottle () {
  const [ X, setX ] = useState(0)

  // 节流
  const [ setThrottle, clearThrottle, isPendingThrottle ] = useDebounceThrottle()
  const [ setThrottle2, clearThrottle2, isPendingThrottle2 ] = useDebounceThrottle()
  // 防抖
  const [ setDebounce, clearDebounce, isPendingDebounce ] = useDebounceThrottle({ type: 'debounce' })
  const [ setDebounce2, clearDebounce2, isPendingDebounce2 ] = useDebounceThrottle({ type: 'debounce' })

  console.log('View1-render1', 'isPendingThrottle:', isPendingThrottle)

  const throttleFunc = (...args) => {
    setThrottle(() => {
      setX(Math.random())
      console.log('节流执行1：', ...args)
    }, 10000)
  }
  const throttleFunc2 = (...args) => {
    setThrottle2(() => {
      setX(Math.random())
      console.log('节流执行2：', ...args)
    })
  }

  const debonceFunc = (...args) => {
    setDebounce(() => {
      setX(Math.random())
      console.log('防抖执行1：', ...args)
    }, 10000)
  }
  const debonceFunc2 = (...args) => {
    setDebounce2(() => {
      setX(Math.random())
      console.log('防抖执行2：', ...args)
    })
  }

  const debounce = (fn, delay = 3000) => {
    let timer // 当触发的地方使用函数表达式，也就是变量声明（而非函数声明），初始话时就被执行，值为undefined，利用了闭包特性，保证每一个计时器（timer）都是独立的，当触发需要防抖的方法时，会直接调用下面return的方法，而不会重新声明let timer。
    console.log('timer', timer)
    const debounced = (...args) => {
      timer && clearTimeout(timer)
      timer = setTimeout(() => {
        fn(...args)
      }, delay)
    }
    debounced.clear = () => {
      timer && clearTimeout(timer)
    }
    return debounced
  }
  const throttle = (fn, delay = 5000) => {
    console.log('throttle')
    let timer
    let isPending = false
    const throttled = (...args) => {
      if (!isPending) {
        isPending = true
        fn(...args)
        timer = setTimeout(() => {
          isPending = false
        }, delay)
      }
    }
    throttled.clear = () => {
      timer && clearTimeout(timer)
      timer = null
      isPending = false
    }
    return throttled
  }

  // 按钮点击执行时，debonceFunc(...args)执行的时候会将其对应的参数传递进来，然后通过核心方法里的箭头函数里的...args回传给debounce里的第一个参数，该参数是个方法，...args作为该方法的一个参数
  // 如果防抖或节流方法内有导致重新渲染的逻辑（比如此处的setX），那这样的封装形式起不到相应的效果，闭包里的timer、isPending会重新初始化
  // const debonceFunc = throttle((...args) => {
  //   setX(Math.random())
  //   console.log('防抖执行：', ...args)
  // })
  // 函数声明的形式由于没有初始话执行，导致核心方法（采用了闭包的形式）里的timer不是私有的，最终没有防抖功能
  // function debonceFunc (...args) {
  //   console.log(...args)
  //   debounce((...args) => {
  //     console.log('防抖执行：', ...args)
  //   })(...args)
  // }

  return (
    <div className='pg-doc'>
      <h1>防抖和节流</h1>

      <h2>节流示例</h2>
      <div>X的值为(随机数):{X}</div>

      <h3>示例1</h3>
      <div>
        <p>{isPendingThrottle ? '挂起状态、运行中' : '普通状态、可点击'}</p>
        <p>
          <button onClick={throttleFunc}>节流</button>&nbsp;&nbsp;
          <button onClick={clearThrottle}>清除节流</button>
        </p>
      </div>

      <h3>示例2</h3>
      <div>
        <p>{isPendingThrottle2 ? '挂起状态、运行中' : '普通状态、可点击'}</p>
        <p>
          <button onClick={throttleFunc2}>节流2</button>&nbsp;&nbsp;
          <button onClick={clearThrottle2}>清除节流2</button>
        </p>
      </div>

      <h2>防抖示例</h2>

      <h3>示例1</h3>
      <div>
        <p>{isPendingDebounce ? '挂起状态、运行中' : '普通状态、可点击'}</p>
        <p>
          <button onClick={debonceFunc}>防抖</button>&nbsp;&nbsp;
          <button onClick={clearDebounce}>清除防抖</button>
        </p>
      </div>

      <h3>示例2</h3>
      <div>
        <p>{isPendingDebounce2 ? '挂起状态、运行中' : '普通状态、可点击'}</p>
        <p>
          <button onClick={debonceFunc2}>防抖2</button>&nbsp;&nbsp;
          <button onClick={clearDebounce2}>清除防抖2</button>
        </p>
      </div>

    </div>
  )
}

export default DebonceThrottle

