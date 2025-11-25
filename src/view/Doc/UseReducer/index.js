/*
 * @Author: 王宏伟
 * @Email：wanghongwei@hualala.com
 * @Date: 2025-10-11 17:40:01
 * @Description: UseReducer
 * @FilePath: /react-18.2/src/view/Doc/UseReducer/index.js
 */

import React, { useReducer } from 'react'
import Context1 from './Context1'
import Context2 from './Context2'
import Child from './Child'

import {
  reducer,
  initialState,
  initialFunction,
} from './Reducer'

function UseReducer () {
  console.log('父组件 render')
  const [ state, dispatch ] = useReducer(reducer, initialState, initialFunction)

  const paramsUndefined = (a = 1, b = 2, c = 3) => {
    console.log('参数分别为:', a, b, c)
  }

  const change1 = () => {
    dispatch({ type: 'increment' })
  }
  const change2 = () => {
    dispatch({ type: 'set', payload: 100 })
  }

  return (
    <Context1.Provider value={state}>
      <Context2.Provider value={dispatch}>
        <div className='pg-doc'>
          <h1>UseReducer的使用</h1>
          <p>useReducer是 React 提供的一个用于状态管理的 Hook，它通过集中式的状态更新逻辑，特别适合处理复杂的状态场景。</p>
          <p>它接受一个reducer函数和初始状态，返回当前状态和一个用于派发操作的dispatch函数。其核心思想是将状态更新逻辑封装在一个纯函数（reducer）中，通过派发不同的动作（action）来触发状态变更，使得状态变化更可预测和易于调试。</p>

          <h2>1、定义 reducer 函数</h2>
          <p>reducer 函数接收当前状态 state和一个描述操作的 action对象，通过判断 action.type来返回新的状态。必须确保不直接修改原状态，而是返回一个全新的状态对象。</p>

          <div className='code'>
            <pre>function counterReducer(state, action) &#123;</pre>
            <pre>  switch(action.type) &#123;</pre>
            <pre>    case &apos;INCREMENT&apos;:</pre>
            <pre>      return &#123; ...state, count: state.count + 1 &#125;; // 正确：返回新对象</pre>
            <pre>    case &apos;DECREMENT&apos;:</pre>
            <pre>      return &#123; ...state, count: state.count - 1 &#125;;</pre>
            <pre>    case &apos;SET_VALUE&apos;:</pre>
            <pre>      return &#123; ...state, value: action.payload &#125;; // 通过 action.payload 传递数据</pre>
            <pre>    default:</pre>
            <pre>      return state; // 对于未知 action，返回原状态</pre>
            <pre>  &#125;</pre>
            <pre>&#125;</pre>
          </div>
          <p>最好设置default，在这里可以说明type输入有误，或者其他的提示，否则匹配不到case，展示的数据突然变空了，如果是对象类型的state，还有可能因为层级没有判空而报错。所以最好业务侧判空的同时这里也同步返回上一次操作后的值</p>

          <h2>2、初始化 useReducer</h2>
          <div className='code'>
            <pre>const [state, dispatch] = useReducer(reducer, initialState, initialFunction);</pre>
          </div>
          <table>
            <tbody>
              <tr>
                <th width='130'>参数</th>
                <th>说明</th>
              </tr>
              <tr>
                <td>reducer</td>
                <td>一个纯函数，格式为 (state, action) =newState，根据 action的类型决定如何更新状态。</td>
              </tr>
              <tr>
                <td>initialState</td>
                <td>状态的初始值。</td>
              </tr>
              <tr>
                <td>initialFunction</td>
                <td>可选，如果初始状态需要通过复杂计算得到，可以使用该参数进行惰性初始化（一个初始化函数），这有助于优化性能。如果设置了该方法，其值优先级高于initialState，该方法一定要设置返回值，没有的话也不会使用initialState</td>
              </tr>
              <tr>
                <td>state</td>
                <td>当前状态。</td>
              </tr>
              <tr>
                <td>dispatch</td>
                <td>一个用于派发 action 的函数，调用后会触发 reducer 执行。</td>
              </tr>
            </tbody>
          </table>

          <h2>示例</h2>

          <h3>父组件</h3>
          <p>count:{state?.count}</p>
          <p>
            <button onClick={change1}>增加1</button>
            <button onClick={change2}>重置为100</button>
          </p>
          <Child />

          <h2>方法中的参数没值时的分析</h2>
          <p>中间参数不传时不能直接在两个逗号直接什么都不写，本地运行时就会报错 - 编译有问题：Compiled with problems</p>
          <p>参数不传时相当于是传了一个undefined，和传null的区别如下：</p>
          <table>
            <tbody>
              <tr>
                <th>特性</th>
                <th>undefined</th>
                <th>null</th>
              </tr>
              <tr>
                <th>寓意</th>
                <td>表示“未定义”，即值未被赋值或提供。</td>
                <td>表示“空值”，即主动定义了一个空对象引用。</td>
              </tr>
              <tr>
                <th>默认参数触发</th>
                <td>✅ 会触发函数默认参数值</td>
                <td>❌ 不会触发函数默认参数值（被视为有效输入）。</td>
              </tr>
              <tr>
                <th>典型场景</th>
                <td>
                  <p>1. 希望参数使用默认值或默认逻辑。</p>
                  <p>2. 表示参数“缺失”或“未初始化”。</p>
                </td>
                <td>
                  <p>1. 明确表示“此处应有一个对象，但当前为空”。</p>
                  <p>2. 主动清空一个对象引用。</p>
                </td>
              </tr>
              <tr>
                <th>检查方式</th>
                <td>param === undefined或 typeof param ===  &apos;undefined &apos;</td>
                <td>param === null</td>
              </tr>
            </tbody>
          </table>
          <div className='code'>
            <pre> paramsUndefined(1, ,3)</pre>
          </div>
          <p>
            <button onClick={() => {
              paramsUndefined(1, undefined, 5)
            }}>关于参数没有值的测试</button>
            <button onClick={() => {
              paramsUndefined(1, null)
            }}>关于参数没有值的测试</button>
            <button onClick={() => {
              paramsUndefined(1)
            }}>关于参数没有值的测试</button>
          </p>
        </div>
      </Context2.Provider >
    </Context1.Provider>
  )
}

export default UseReducer
