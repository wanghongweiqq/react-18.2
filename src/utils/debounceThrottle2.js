/*
 * @Author: 王宏伟
 * @Email：wanghongwei@hualala.com
 * @Date: 2025-07-20 14:14:32
 * @Description: debounce防抖和throttle节流的核心方法
 * @FilePath: /react-18.2/src/utils/debounce-throttle2.js
 */
import { useState, useEffect, useRef } from 'react'

function useDebounceThrottle (params = {}) {
  // type：类型，1、throttle：节流，默认值，2、debounce：防抖
  const { type = 'throttle' } = params

  // const timerDebounceThrottle = useRef(null) // 计时器标识
  const [ timerDebounceThrottle, setTimerDebounceThrottle ] = useState(false)
  const [ IsPendingDebounceThrottle, setIsPendingDebounceThrottle ] = useState(false) // 是否正处于等待/挂起状态，可以在此状态下做一些：loading、disabled或其他提示信息
  console.log('IsPendingDebounceThrottle:', IsPendingDebounceThrottle)
  const clearDebounceThrottle = () => {
    if(timerDebounceThrottle) {
      clearTimeout(timerDebounceThrottle)
      setIsPendingDebounceThrottle(false)
      setTimerDebounceThrottle(null)
    }
  }

  const setDebounceThrottle = (fn, delay = 5000) => {
    // console.log('setDebounceThrottle', 'IsPendingDebounceThrottle:', IsPendingDebounceThrottle)
    if(type === 'throttle') { // 节流
      if(!IsPendingDebounceThrottle) { // 不处于(挂起/等待)状态
        setIsPendingDebounceThrottle(true)
        fn()
        const a = setTimeout(() => {
          setIsPendingDebounceThrottle(false)
        }, delay)
        setTimerDebounceThrottle(a)
      }
    }else{ // 防抖
      timerDebounceThrottle && clearTimeout(timerDebounceThrottle)
      setIsPendingDebounceThrottle(true)
      const a = setTimeout(() => {
        console.log(111111)
        setIsPendingDebounceThrottle(false)
        fn()
        setTimerDebounceThrottle(null)
      }, delay)
      setTimerDebounceThrottle(a)// useState定义的timer每次调用页面点击都会重新复制，然后导致父页面刷新，而useRef的不会，所以要使用useRef，减少父组件的重复渲染
    }
  }

  useEffect(() => {
    return clearDebounceThrottle()
  }, [])

  return [
    setDebounceThrottle,
    clearDebounceThrottle,
    IsPendingDebounceThrottle,
  ]
}

export default useDebounceThrottle