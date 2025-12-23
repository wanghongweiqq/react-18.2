/*
 * @Author: 王宏伟
 * @Email：wanghongwei@hualala.com
 * @Date: 2025-12-18 15:39:41
 * @Description: Ref说明
 * @FilePath: /react-18.2/src/view/Doc/Ref/index.js
 */
import React, { useRef } from 'react'
import Child from './Child'
function Ref () {
  // 本组件使用ref
  const refSelf = useRef(null)
  const inputSelfFocus = () => {
    refSelf.current.focus()
  }
  const inputSelfBlur = () => {
    refSelf.current.blur()
  }

  // 父子组件使用ref
  const refParent = useRef(null)
  const inputParentFocus = () => {
    refParent.current.focus()
  }
  const inputParentBlur = () => {
    refParent.current.blur()
  }

  return (
    <div className='pg-doc'>
      <h1>Ref</h1>
      <h2>本组件使用ref</h2>
      <p>可以通过useRef命名的变量直接使用dom的相关方法：input1.current.focus()</p>
      <input type='text' ref={refSelf} placeholder='refSelf' />
      <p>
        <button onClick={inputSelfFocus}>获取input1焦点</button>
        <button onClick={inputSelfBlur}>失去input1焦点</button>
      </p>
      <h2>父子组件使用ref</h2>
      <p>父组件不能可以通过useRef命名的变量直接使用子组件dom的相关方法，需要子组件暴露给父组件方法才可以，具体如下：</p>
      <p>1、创建 Ref：在父组件中使用 useRef 创建一个 ref 对象。其实在父组件中像普通组件中那样使用ref即可，只是注意父组件要使用子组件暴露给他的方法名字，一般这个名字和操作dom的名字相同。</p>
      <p>2、转发 Ref：子组件使用 forwardRef 方法包裹，将父组件传入的 ref 作为子组件的第二个参数转发给子组件。这是因为函数式子组件默认不会接收ref属性，第一个参数props中不含有父组件的ref。</p>
      <p>3、暴露方法：在子组件中使用 useImperativeHandleHook，将操作子组件dom的方法（如 focus）暴露给父组件。这样可以限制父组件只能调用特定的方法，而不是直接访问子组件的全部实例。，从而提供更精确和安全的组件间通信方式。</p>
      <p>4、触发焦点：在父组件中，通过 ref.current.focus()来触发焦点。</p>
      <Child ref={refParent} value={1}/>
      <p>
        <button onClick={inputParentFocus}>父组件获取Child input焦点</button>
        <button onClick={inputParentBlur}>父失去Child input焦点</button>
      </p>
    </div>
  )
}

export default Ref

