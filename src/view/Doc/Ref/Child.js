/*
 * @Author: 王宏伟
 * @Email：wanghongwei@hualala.com
 * @Date: 2025-12-18 15:39:41
 * @Description: Ref说明
 * @FilePath: /react-18.2/src/view/Doc/Ref/Child.js
 */
import React, { useRef, forwardRef, useImperativeHandle } from 'react'

// const Child = forwardRef((props, ref) => { //这种写法报错： Component definition is missing display name
const Child = (props, ref) => {
  console.log('Child', props, ref)
  const inputChildRef = useRef(null)
  const inputChildFocus = () => {
    inputChildRef.current.focus()
  }
  const inputChildBlur = () => {
    inputChildRef.current.blur()
  }
  // 使用命令的/必要的/规则的操作，它允许你自定义由 ref暴露给父组件的实例值
  useImperativeHandle(ref, () => {
    return {
      focus: () => {
        inputChildRef.current.focus()
      },
      blur: inputChildBlur,
    }
  }, [])
  // 简写
  // useImperativeHandle(ref, () => ({
  //   focus: () => {
  //     inputChildRef.current.focus()
  //   },
  //   blur: inputChildBlur,
  // }), [])
  return (
    <div className='pg-doc'>
      <input type='text' ref={inputChildRef} placeholder='inputChild' />
      <p>
        <button onClick={inputChildFocus}>子组件获取自身焦点</button>
        <button onClick={inputChildBlur}>子组件失去自身焦点</button>
      </p>
    </div>
  )
}

export default forwardRef(Child)

