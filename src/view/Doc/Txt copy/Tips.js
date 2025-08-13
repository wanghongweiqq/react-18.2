/*
 * @Author: 王宏伟
 * @Email：wanghongwei@hualala.com
 * @Date: 2024-03-25 15:39:41
 * @Description: 项目初始化说明
 * @FilePath: /react-18.2/src/view/Doc/Txt/tips.js
 */

import React, { useState, useEffect, useMemo } from 'react'
import PropTypes from 'prop-types'

function Tips ({ latestItem, remainTime }) {

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

  const remainTimeToSecond = useMemo(() => {
    if(remainTime) {
      return formatTime(remainTime)
    }
  }, [ remainTime ])

  return (
    <p><em className='text-primary'>提示：</em>
      {latestItem && latestItem.date ?
        <span>即将过期内容：“{latestItem.txt}”，剩余时间：{remainTimeToSecond}</span>
        : <span>暂无要过期内容</span>
      }
    </p>
  )
}
Tips.propTypes = {
  latestItem: PropTypes.object,
  remainTime: PropTypes.number,
}

export default Tips
