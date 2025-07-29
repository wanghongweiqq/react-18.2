/*
 * @Author: 王宏伟
 * @Email：wanghongwei@hualala.com
 * @Date: 2024-03-25 15:39:41
 * @Description: 项目初始化说明
 * @FilePath: /react-18.2/src/view/Doc/Txt/TipsTop.js
 */

import React, { useState, useEffect, useMemo } from 'react'
import PropTypes from 'prop-types'

function Tips ({ list }) {
  let rafTag = null
  const [ latestItem, setLatestItem ] = useState({})
  const [ remainTime, setRemainTime ] = useState()

  // 毫秒转化为日期对象：天、小时、分钟、秒、毫秒
  const formatMsToObject = (ms) => {
    // 确保输入是数字
    if (typeof ms !== 'number' || isNaN(ms)) {
      return
    }
    const isNegative = ms < 0
    ms = Math.abs(ms)

    const seconds = Math.floor(ms / 1000)
    const days = Math.floor(seconds / 86400)
    const hours = Math.floor((seconds % 86400) / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const remainingSeconds = seconds % 60

    return {
      days: isNegative ? -days : days,
      hours: isNegative ? -hours : hours,
      minutes: isNegative ? -minutes : minutes,
      seconds: isNegative ? -remainingSeconds : remainingSeconds,
      milliseconds: isNegative ? -(ms % 1000) : (ms % 1000),
    }
  }
  // 日期对象转为可读性的字符串
  const formatTime = (ms, showMilliseconds = false) => {
    const time = formatMsToObject(ms)
    let result = ''

    if (time.days !== 0) {
      result += `${ time.days }天 `
    }
    if (time.hours !== 0 || time.days !== 0) {
      result += `${ time.hours }小时 `
    }
    if (time.minutes !== 0 || time.hours !== 0 || time.days !== 0) {
      result += `${ time.minutes }分钟 `
    }

    if (showMilliseconds) {
      result += `${ time.seconds }.${ time.milliseconds.toString().padStart(3, '0') }秒`
    } else {
      result += `${ time.seconds }秒`
    }

    return result.trim()
  }

  const getRemainTime = () => {
    rafTag && cancelAnimationFrame(rafTag)
    function getRemainingTime () {
      const timeCurrent = Date.now()
      const remainTime = new Date(latestItem.date).getTime() - timeCurrent
      setRemainTime(remainTime)
      rafTag = requestAnimationFrame(getRemainingTime)
      // console.log('remainTime', remainTime)
      if(remainTime <= 0) {
        console.log('计时结束')
        // setList(list)
        cancelAnimationFrame(rafTag)
        for(let i = 0; i < list.length; i++) {
          if(list[i].date === latestItem.date) {
            console.log(`第${ i + 1 }个到时间了！`)
            // list.splice(i, 1)
            // setList([ ...list ])
            break
          }
        }
      }
    }
    getRemainingTime()
  }
  const formatRemainTime = useMemo(() => {
    if(remainTime) {
      return formatTime(remainTime)
    }
  }, [ remainTime ])

  useEffect(() => {
    if(latestItem && latestItem.date) {
      getRemainTime()
    }
  }, [ latestItem ])

  // 查找最近的条目
  const getLatestItem = () => {
    list.sort((a, b) => a.date - b.date)
    let latestObj = {}
    for(let i = 0; i < list.length; i++) {
      if(i === 0) {
        latestObj = list[i]
      }else{
        const itemTime = new Date(list[i].date).getTime()
        const latestItem = new Date(latestObj.date).getTime()
        if(itemTime < latestItem) {
          latestObj = list[i]
        }
      }
    }
    // console.log('最近条目:', latestObj)
    if(list.length > 0) {
      setLatestItem(latestObj)
    }else{
      setLatestItem({})
    }
  }

  useEffect(() => {
    console.log('TipsTop-list')
    if(list.length > 0) {
      getLatestItem()
    }
  }, [ list ])

  return (
    <p><em className='text-primary'>提示：</em>
      {latestItem && latestItem.date ?
        <span>即将过期内容：“{latestItem.txt}”，剩余时间：{formatRemainTime}</span>
        : <span>暂无要过期内容</span>
      }
    </p>
  )
}
Tips.propTypes = { list: PropTypes.array }

export default Tips
