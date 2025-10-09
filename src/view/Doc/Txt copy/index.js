/*
 * @Author: 王宏伟
 * @Email：wanghongwei@hualala.com
 * @Date: 2024-03-25 15:39:41
 * @Description: 项目初始化说明1
 * @FilePath: /react-18.2/src/view/Doc/Txt/index.js
 */

import React, { useState, useEffect, useMemo } from 'react'
import './index.scss'
import Tips from './TipsTop'
import Content from './content'

function Txt () {
  const [ txt, setTxt ] = useState('')
  const [ date, setDate ] = useState('')
  const [ list, setList ] = useState([])
  const [ minDate, setMinDate ] = useState('')
  console.log('index-render')

  // 日期进行统一的格式化输出
  const formatDateToString = (date, params = {}) => {
    let { reg = 'YYYY-MM-DD hh:mm:ss', empty = '' } = params
    const time = new Date(date)
    const regOriginal = reg
    if(time === null) {
      return '- -'
    }
    let f = {
      Y: time.getFullYear(),
      M: time.getMonth() + 1,
      D: time.getDate(),
      h: time.getHours(),
      m: time.getMinutes(),
      s: time.getSeconds(),
    }
    if(regOriginal === 'YYYYMMDD') {
      reg = 'YYYY MM DD'
    }
    let result = reg.replace(/([YMDhms])+/g, (v, i) => {
      if (i) {
        let val = '0' + f[i]
        return val.slice(-v.length)
      }
    })
    if(regOriginal === 'YYYYMMDD') {
      result = result.replace(/\s/g, '')
    }
    return result
  }

  useEffect(() => {
    const minDate = formatDateToString(Date.now()).replace(' ', 'T')
    setMinDate(minDate)
  }, [ ])

  // useEffect(() => {
  //   if(list.length > 0) {
  //     getLatestItem()
  //   }
  // }, [ list ])

  // 添加内容
  const addItem = () => {
    if(!txt) {
      return alert('请输入内容！')
    }
    if(!date) {
      return alert('请选择日期！')
    }
    let obj = {
      txt,
      date,
      flag: Date.now(),
    }
    // if(txt === '2') { // 测试即将到期的示例
    //   obj.date = Date.now() + 10000
    // }
    list.unshift(obj)
    setList([ ...list ])
    console.log('list', list)
    setTxt('')
    setDate('')
  }

  return (
    <div className='pg-txt'>
      <Content />
      <Tips list={list} />
      {/* <p><em className='text-primary'>提示：</em>
        {latestItem && latestItem.date ?
          <span>即将过期内容：“{latestItem.txt}”，剩余时间：{remainTimeToSecond}</span>
          : <span>暂无要过期内容</span>
        }
      </p> */}
      <p>
        <input className='txt' value={txt} onInput={(e) => {
          setTxt(e.target.value)
        }}></input>
        <input className='date' value={date} type='datetime-local' min={minDate} step='1' onInput={(e) => {
          setDate(e.target.value)
        }}></input>
        <button onClick={addItem}> 添加</button>
      </p>

      <ul className='txt-list'>
        { list.map(item =>
          <li key={item.flag}><span>{item.txt} </span><span>提醒时间：{ formatDateToString(new Date(item.date))}</span> </li>,
        )}
      </ul>
    </div>
  )
}

export default Txt
