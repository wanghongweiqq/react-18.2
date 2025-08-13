/*
 * @Author: 王宏伟
 * @Email：wanghongwei@hualala.com
 * @Date: 2025-05-20 14:10:59
 * @Description: 页面/组件/功能的描述
 * @FilePath: /react-18.2/src/view/Doc/PopoverCP.js
 */

import React, { useState, useRef, useEffect } from'react'
import ReactDOM from'react-dom'
import PropTypes from 'prop-types'

const Popover = ({ children, content, getPopoverContainer }) => {
  const [ visible, setVisible ] = useState(false)
  const popoverRef = useRef(null)
  const triggerRef = useRef(null)

  // 点击外部区域关闭弹层
  useEffect(() => {
    const handleClickOutside = (event) => {
      console.log('handleClickOutside')
      console.log(popoverRef.current)
      console.log(triggerRef.current)
      console.log(event.target)
      console.log(triggerRef.current.contains(event.target))
      if (
        popoverRef.current
        && !popoverRef.current.contains(event.target)
        && triggerRef.current
        && !triggerRef.current.contains(event.target)
      ) {
        console.log(1)
        setVisible(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  // 处理触发元素点击事件
  const handleTriggerClick = () => {
    console.log(2)
    setVisible(!visible)
  }

  // 获取弹层插入的 DOM 节点
  const getContainer = () => {
    if (getPopoverContainer) {
      return getPopoverContainer()
    }
    return document.body
  }

  return (
    <>
      {React.cloneElement(children, { onClick: handleTriggerClick, ref: triggerRef })}
      {visible && ReactDOM.createPortal(
        <div
          ref={popoverRef}
          className='popover'
        >
          {content}
        </div>,
        getContainer(),
      )}
    </>
  )
}

Popover.propTypes = {
  children: PropTypes.node,
  content: PropTypes.node,
  getPopoverContainer: PropTypes.any,
}

export default Popover