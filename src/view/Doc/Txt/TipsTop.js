/*
 * @Author: 王宏伟
 * @Email：wanghongwei@hualala.com
 * @Date: 2024-03-25 15:39:41
 * @Description: 记事本顶部倒计时提示
 * @FilePath: /react-18.2/src/view/Doc/Txt/TipsTop.js
 */

import React, { useState, useEffect, useMemo } from 'react'
import PropTypes from 'prop-types'
import { formatMsToString } from '@/utils'

let rafTag = null // 一定要定义\声明在主函数的外边，内部的话会给不断地render给重新定义为null

function TipsTop ({ list, deleteCallback, updateFlag }) {
  // console.log('TipsTop-init', rafTag)
  const [ latest, setLatest ] = useState({
    latestItemList: [],
    latestIndexList: [],
    latestTime: null, // 微秒数字，提醒时间转为微妙
  })
  const [ remainTime, setRemainTime ] = useState()

  const getRemainTime = () => {
    if(!latest.latestTime) {
      return
    }
    console.log('计时开始', latest)
    rafTag && cancelAnimationFrame(rafTag)
    function getRemainingTime () {
      const timeCurrent = Date.now()
      const remainMilliseconds = latest.latestTime - timeCurrent
      setRemainTime(remainMilliseconds)
      rafTag = requestAnimationFrame(getRemainingTime)
      if(remainMilliseconds <= 0) {
        console.log('计时结束', latest, latest.latestIndexList)
        cancelAnimationFrame(rafTag)

        deleteCallback(latest.latestIndexList)
        console.log(`第${ latest.latestIndexList.map(item => item + 1).join() }个到时间了！`)
      }
    }
    getRemainingTime()
  }

  const formatRemainTime = useMemo(() => {
    if(remainTime) {
      return formatMsToString(remainTime)
    }
  }, [ remainTime ])

  useEffect(() => {
    if(latest.latestTime) {
      getRemainTime()
    }
  }, [ latest ])

  // 查找最近的条目
  const getLatestItem = () => {
    if(list.length > 0) {
      let latestItemList = []// 最近时间的条目列表，有可能同一时间有多个，所以用数组
      let latestIndexList = []// 最近时间的条目的索引的集合
      let latestTime // 最近的时间
      for(let i = 0; i < list.length; i++) {
        if(i === 0) {
          latestItemList.push(list[0])
          latestIndexList.push(0)
          latestTime = new Date(list[0].date).getTime()
        }else{
          const itemTime = new Date(list[i].date).getTime()
          if(itemTime < latestTime) {
            latestItemList = [ list[i] ]
            latestIndexList = [ i ]
            latestTime = itemTime
          }else if(itemTime === latestTime) {
            latestItemList.push(list[i])
            latestIndexList.push(i)
          }
        }
      }
      console.log('最近条目:', latestItemList, latestIndexList)
      setLatest({
        latestItemList,
        latestIndexList,
        latestTime,
      })
    }else{
      setLatest({
        latestItemList: [],
        latestIndexList: [],
        latestTime: null,
      })
    }
  }

  useEffect(() => {
    console.log('TipsTop-updateFlag')
    if(updateFlag > 0) {
      getLatestItem()
    }
  }, [ updateFlag ])

  const cacelRAF = () => {
    console.log('取消动画', rafTag)
    rafTag && cancelAnimationFrame(rafTag)
  }
  return (
    <div>
      {/* <button onClick={cacelRAF}>取消动画</button> */}
      <p><em className='text-primary'>提示：</em>
        { latest?.latestTime ?
          <span>即将过期内容：第{ latest.latestIndexList.map(item => item + 1).join('，') }条，剩余时间：{formatRemainTime}</span>
          : <span>暂无要过期内容</span>
        }</p>
      <ul>
        {
          latest?.latestItemList.map(item => <li key={item.flag}>{item.txt}</li>)
        }
      </ul>
    </div>
  )
}
TipsTop.propTypes = {
  list: PropTypes.array,
  deleteCallback: PropTypes.func,
  updateFlag: PropTypes.number,
}
TipsTop.defaultProps = {
  list: [],
  deleteCallback: () => {},
  updateFlag: null,
}

export default TipsTop
