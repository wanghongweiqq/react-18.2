/*
 * @Author: 王宏伟
 * @Email：wanghongwei@hualala.com
 * @Date: 2024-03-25 15:39:41
 * @Description: 记事本添加和到期删除
 * @FilePath: /react-18.2/src/view/Doc/Txt/index.js
 */

import React, { useState, useEffect } from 'react'
import './index.scss'
// import './index1.css'
import Tips from './TipsTop'
import AddTxt from './AddTxt'
import { formatDateToString } from '@/utils'

function Txt () {
  const [ updateFlag, setUpdateFlag ] = useState()
  const [ list, setList ] = useState([])
  console.log('index-render')

  // useEffect(() => {
  //   console.log('useEffect-list')
  // }, [ list ]) // list引用改变时才能触发
  // 添加内容
  const addCallback = (item) => {
    // react的渲染机制 通过浅比较（Object.is）判断状态是否变化，直接修改原数组引用不变，不会触发更新。引用相同就认为没有变化，不需要更新状态和渲染
    // list.unshift(item)
    // list.splice(0, 0, item)
    // setList(list)
    // 数组改变引用的方法有：1、解构；2、filter；3、map 4、toSpliced
    // setList([ ...list ])
    // setList(list.toSpliced(0, 0, item))
    // setList([ item, ...list ])
    setList(prev => [ item, ...prev ])
    setUpdateFlag(Date.now())
    // setXxx()是同步执行代码，后面不能立刻获取其值，状态更新和渲染是稍后异步执行，最后可以在useEffect处理副作用中获取最新状态并处理相应逻辑， useEffect的return () => { // 清理逻辑（如取消订阅）};
    // 之前react16版本中setState和上面类似，可以在setState的第二个参数（箭头形式的匿名函数）中执行状态更新后的逻辑，在合成时间和钩子函数中是异步更新状态，在原生时间和setTimeout中是同步更新状态的，可以立即获取更新后的数据
    // 所谓合成事件，就是react为了解决跨平台，兼容性等问题，自己封装了一套事件机制，代理了原生事件，想在jsx中比较常见的onClick，onChange等，都是合成事件。
    // 所谓原生事件是指非react合成事件，例如原生自带的事件监听 addEventListener，或者也可以用原生js、jq直接 document.querySelector().onclick这种绑定事件的形式都属于原生事件。
  }

  // 删除到期内容
  const deleteCallback = (arrVal) => {
    let temArr = []
    list.forEach((item, index) => {
      if(arrVal.includes(index)) {
        item.isDelete = true
      }else{
        item.isDelete = false
        temArr.push(item)
      }
    })
    setList([ ...list ])
    setTimeout(() => {
      setList([ ...temArr ])
      setUpdateFlag(Date.now())
    }, 500)
  }

  return (
    <div className='pg-txt'>
      <div className='box'>
        <div className='box-content'>
        11
        </div>
      </div>

      <Tips
        list={list}
        deleteCallback={deleteCallback}
        updateFlag={updateFlag}
      />
      <AddTxt addCallback={addCallback} />
      <ul className='txt-list'>
        { list.map((item, index) =>
          <li
            className={`${ item.isDelete ? 'is-delete' : '' } ${ item.isAdd ? 'is-add' : '' } `}
            key={item.flag}
          >
            <span>第{index + 1}条：{item.txt} </span>
            <span>提醒时间：{ formatDateToString(new Date(item.date))}</span>
          </li>,
        )}
      </ul>
    </div>
  )
}

export default Txt
