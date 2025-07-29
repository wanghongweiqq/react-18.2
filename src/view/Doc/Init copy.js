/*
 * @Author: 王宏伟
 * @Email：wanghongwei@hualala.com
 * @Date: 2024-03-25 15:39:41
 * @Description: 项目初始化说明
 * @FilePath: /react-18.2/src/view/Doc/Init.js
 */

import React, { memo, useState, useEffect, useCallback } from 'react'

function Init () {
  let rafTag = null
  const [ now, setNow ] = useState()

  const [ time, setTime ] = useState('2025/07/31')
  const [ txt, setTxt ] = useState('')
  const [ list, setList ] = useState([])

  const getTime = () => {
    // rafTag && cancelAnimationFrame(rafTag)
    function getRemainingTime () {

      const timeCurrent = Date.now()
      for(let i = 0; i < list.length; i++) {
        // console.log('item', list[i])
        const { time } = list[i]
        const lastTime = new Date(time).getTime()
        const remainTime = Math.round((lastTime - timeCurrent) / (1000 * 60))
        list[i].remainTime = remainTime
        rafTag = requestAnimationFrame(getRemainingTime)
        // console.log('remainTime', remainTime)
        if(remainTime <= 0) {
          console.log('计时结束')
          list.splice(i, 1)
          // setList(list)
          cancelAnimationFrame(rafTag)
          console.log(`第${ i + 1 }个到时间了！`)
        }
      }
      setList(list)
      setNow(Date.now())

    }
    getRemainingTime()
  }

  useEffect(() => {
    getTime()
  }, [])

  const addTxt = () => {
    let obj = {
      txt: txt,
      time: time,
      flag: Date.now(),
    }
    if(txt === '2') {
      obj.time = '2025/07/20'
    }
    list.push(obj)
    setList(list)
    // setNow(Date.now())
    // console.log(list)
    getTime()
  }

  return (
    <div className='pg-doc' title={now}>

      <input value={txt} onInput={(e) => {
        console.log(e.target.value)
        setTxt(e.target.value)
      }}></input>
      <button onClick={addTxt}> 添加</button>
      {/* {list.map(item => <p key={item}>{item}</p>)} */}

      {list.map((item, index) => {
        return <p key={item.flag}>内容：{item.txt}。 到时时间：{item.time}。 剩余时间（分钟）：{item.remainTime}</p>
      })}
    </div>
  )
}

export default Init
