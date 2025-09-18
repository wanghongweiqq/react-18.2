/*
 * @Author: 王宏伟
 * @Email：wanghongwei@hualala.com
 * @Date: 2025-07-20 14:14:32
 * @Description: debounce防抖和throttle节流的核心方法
 * @FilePath: /react-18.2/src/utils/debounce-throttle.js
 */
import { useState, useEffect, useRef } from 'react'

function useDebounceThrottle (params = {}) {
  // type：类型，1、throttle：节流，默认值，2、debounce：防抖
  const { type = 'throttle' } = params

  const timerDebounceThrottle = useRef(null) // 计时器标识
  const [ IsPendingDebounceThrottle, setIsPendingDebounceThrottle ] = useState(false) // 是否正处于等待/挂起状态，可以在此状态下做一些：loading、disabled或其他提示信息

  const clearDebounceThrottle = () => {
    if(timerDebounceThrottle.current) {
      clearTimeout(timerDebounceThrottle.current)
      setIsPendingDebounceThrottle(false)
      timerDebounceThrottle.current = null
    }
  }

  const setDebounceThrottle = (fn, delay = 5000) => {
    if(type === 'throttle') { // 节流
      if(!IsPendingDebounceThrottle) { // 不处于(挂起/等待)状态
        setIsPendingDebounceThrottle(true)
        fn()
        timerDebounceThrottle.current = setTimeout(() => {
          setIsPendingDebounceThrottle(false)
        }, delay)
      }
    }else{ // 防抖
      timerDebounceThrottle.current && clearTimeout(timerDebounceThrottle.current)
      setIsPendingDebounceThrottle(true)
      timerDebounceThrottle.current = setTimeout(() => {
        setIsPendingDebounceThrottle(false)
        fn()
        timerDebounceThrottle.current = null
      }, delay)
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