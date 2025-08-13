/*
 * @Author: 王宏伟
 * @Email：wanghongwei@hualala.com
 * @Date: 2024-03-25 15:39:41
 * @Description: 记事本添加
 * @FilePath: /react-18.2/src/view/Doc/Txt/AddTxt.js
 */

import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { formatDateToString } from '@/utils'

function AddTxt ({ addCallback }) {
  console.log('AddTxt-render')
  const [ txt, setTxt ] = useState('')
  const [ date, setDate ] = useState('') // 日期选择器的默认格式，字符串格式：'YYYY-MM-DDThh:mm:ss'
  const [ minDate, setMinDate ] = useState('') // 日期的起始时间，字符串格式：'YYYY-MM-DDThh:mm:ss'

  useEffect(() => {
    const minDate = formatDateToString(Date.now()).replace(' ', 'T')
    setMinDate(minDate)
  }, [ ])

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
      isDelete: false,
      isAdd: true,
    }
    setTxt('')
    setDate('')
    addCallback(obj)
  }

  return (
    <p className='bcp-add-txt'>
      <input
        className='txt'
        value={txt}
        onInput={(e) => {
          setTxt(e.target.value)
        }}
      />
      <input
        className='date'
        value={date}
        type='datetime-local'
        min={minDate} step='1'
        onInput={(e) => {
          setDate(e.target.value)
        }}
      />
      <button
        onClick={addItem}
      > 添加</button>
    </p>

  )
}

AddTxt.propTypes = { addCallback: PropTypes.func }
AddTxt.defaultProps = { addCallback: () => {} }

export default AddTxt
