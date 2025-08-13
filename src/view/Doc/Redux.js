/*
 * @Author: 王宏伟
 * @Email：wanghongwei@hualala.com
 * @Date: 2024-03-25 15:39:41
 * @Description: css说明
 * @FilePath: /react-18.2/src/view/Doc/Redux.js
 */
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import store, { newRootReducer }from '@/store'
import { counterIncrementAction, counterDecrementAction, counterRandomAction } from '@/store/redux/counter'
function Redux (props) {
  const {
    counter,
    counterIncrementAction: counterIncrement, // 设置别名，防止redux的两种形式的实例时，因为同名重复调用，导致每次执行2次
    counterDecrementAction: counterDecrement,
    counterRandomAction: counterRandom,
  } = props

  useEffect(() => {
    let watchStore = store.subscribe(() => {
      console.log('subscribe')
      console.log(store.getState())
    })
    return() => {
      watchStore()
    }
  }, [])
  return (
    <div className='pg-doc'>
      <h1>Redux说明</h1>
      <h2>1、安装相关依赖</h2>
      <table>
        <tbody>
          <tr>
            <td width='90'><em>react-redux</em></td>
            <td>
              <p>版本号：9.1.0 </p>
              <p>内置和react相关的方法：Provider、connect等</p>
            </td>
          </tr>
          <tr>
            <td><em>redux</em></td>
            <td>
              <p>版本号：5.0.1</p>
              <p>状态管理的核心包：legacy_createStore, combineReducers, applyMiddleware等</p>
            </td>
          </tr>
          <tr>
            <td><em>redux-thunk</em></td>
            <td>
              <p>版本号：3.1.0 </p>
              <p>是一个中间件，它允许 Redux 返回函数而不是 actions。这就允许你在延迟处理 actions 的时候结合 promises 使用。主要用于处理异步，异步时需要采用中间件：applyMiddleware(thunk) </p>
              <p>如果项目不需要异步的状态存储，可以不用安装该依赖，legacy_createStore时不用入参第三个参数enhancer</p>
            </td>
          </tr>
        </tbody>
      </table>
      <p><img alt='redux相关依赖包' src={require('@/assets/images/doc/redux.png')} /></p>

      <h2>2、创建 Redux Store</h2>
      <table>
        <tbody>
          <tr>
            <td width='170'><em>legacy_createStore</em></td>
            <td>
              <p>redux 发布 4.2.0 版本后将原始 createStore API 标记为 @deprecated（废弃），并且添加了一个全新的 legacy_createStore </p>
              <p>legacy_createStore接收三个参数(reducer, preloadedState, enhancer)</p>
              <p>1、reducer：action处理函数reducer，必传</p>
              <p>2、preloadedState：初始状态state，非必传，会覆盖掉reducer方法里设置的初始值</p>
              <p>3、enhancer：[ɪnˈhænsər]增强器函数，非必传，也就是我们说的中间件函数，在有异步时配置该参数</p>
              <p>项目里legacy_createStore只能创建一次，多次创建将会导致状态失效。特别是在方法里使用的legacy_createStore，这个方法只能执行一遍。如跳房子项目里的状态存储使用的redux版本号3.7.2的createStore，并写在configureStore方法里return创建的存储：export const store = configureStore()，configureStore这个方法只能执行一次，直接使用api形式的时候可以：import &#123; store  &#125; from ……即可</p>
            </td>
          </tr>
          <tr>
            <td><em>combineReducers</em></td>
            <td>
              <p>可以合并多个reducer，在有复杂状态管理时采用可使结构更清晰，更加方便管理</p>
            </td>
          </tr>
          <tr>
            <td><em>applyMiddleware(thunk)</em></td>
            <td>
              <p>见上面的redux-thunk </p>
            </td>
          </tr>
        </tbody>
      </table>
      <p><img alt='redux创建相关' src={require('@/assets/images/doc/redux-creat.png')} /></p>
      <p>下图是一个含有异步（接口请求）的redux实例</p>
      <p><img alt='redux详情' src={require('@/assets/images/doc/redux-detail.png')} /></p>

      <h2>3、为 React 提供 Redux Store</h2>
      <p><img alt='redux入口引入' src={require('@/assets/images/doc/react-redux.png')} /></p>

      <h2>4、使用 Redux Store</h2>
      <h3>4.1、组件</h3>
      <p>通过使用react-redux提供的connect方法来在组件内使用redux，这个方法有点函数柯里化的意思</p>
      <p>第1个方法里的参数是将状态存储中需要使用的state和action作为组件的props传递给组件</p>
      <p>第2个方法里的参数是需要绑定的组件名称</p>
      <p><img alt='组件使用 Redux Store' src={require('@/assets/images/doc/react-redux-component.png')} /></p>

      <h2>4.2、API形式</h2>
      <p>当使用状态存储的地方不是类组件或者hooks组件时，像工具类里面，上面connect形式的写法就不适用了，这时候就可以使用Redux的API形式。当然组件里也可以使用这种形式</p>
      <p>createStore返回一个store对象，该对象包含以下方法：</p>
      <table>
        <tbody>
          <tr>
            <td>getState()‌</td>
            <td>
              <p>以对象的形式返回当前的全部应用状态</p>
              <p>store.getState().xxx或者使用解构</p>
            </td>
          </tr>
          <tr>
            <td>dispatch(action)‌</td>
            <td>
              <p>dispatch函数触发action后，会调用reducer函数，修改state</p>
              <p>action是一个对象，必须含有type属性，触发action后，会调用reducer函数，修改相同type属性的state值</p>
              <p>action一般会用箭头函数的形式，返回含有type属性的对象</p>
            </td>
          </tr>
          <tr>
            <td>‌subscribe(listener)</td>
            <td>
              <p>添加一个状态变化监听器。</p>
              <p>subscribe方法可以写在组件加载完成时监听，即useEffect里面，组件卸载时取消监听</p>
              <p>listener可以是一个箭头函数，该函数没有参数。</p>
              <p>使用store.getState().xxx获取想使用的状态值，使用的值多时可以使用解构</p>
            </td>
          </tr>
          <tr>
            <td>‌‌replaceReducer(nextReducer)</td>
            <td>
              <p>替换store当前的全部reducer（本项目里就是combineReducers），类似于用legacy_createStore创建。nextReducer参数表示‌全部，而不是特定的某一个。</p>
              <p>redux中可以用于实现动态添加reducer到store，如果某些Reducers在添加前后都在，这些Reducers的值会一直保持到添加后，而不会被初始化。</p>
              <p><button onClick={() => { store.replaceReducer(newRootReducer) }}>replaceReducer</button></p>
              <p>先点击实例里的按钮，改变counter值，再点击这里添加了一个counter2，然后再点击实例，会发现counter和counter2虽然使用的同一个文件，但却拥有各自的值。在控制台中查看console</p>
            </td>
          </tr>
        </tbody>
      </table>

      <h2>5、实例</h2>
      <h3>5.1、组件</h3>
      <p>Count数量: {counter}</p>
      <p>
        <button onClick={counterIncrement}>增加1</button>&nbsp;&nbsp;
        <button onClick={counterDecrement}>减少1</button>&nbsp;&nbsp;
        <button onClick={() => {
          const num = Math.round(Math.random() * 10)
          counterRandom(num)
        }}>随机加10以内整数</button>
      </p>

      <h3>5.2、API形式</h3>
      <p>Count数量: {store.getState().counter}</p>
      <p>
        <button onClick={() => { store.dispatch(counterIncrementAction()) }}>增加1</button>&nbsp;&nbsp;
        <button onClick={() => { store.dispatch({ type: 'counter-increment' }) }}>增加1-直接使用对象的形式</button>&nbsp;&nbsp;
        <button onClick={() => { store.dispatch(counterDecrementAction()) }}>减少1</button>&nbsp;&nbsp;
        <button onClick={() => {
          const num = Math.round(Math.random() * 10)
          store.dispatch(counterRandomAction(num))
        }}>随机加10以内整数</button>
      </p>
      <p style={{ paddingTop: '20px' }}>PS：后续可以实践使用redux官网推荐的@reduxjs/toolkit（toolkit：工具包）来代替redux，<a target='_blank' href='https://www.redux.org.cn/tutorials/quick-start.html' rel='noreferrer'>具体见官网</a></p>
    </div>
  )
}

Redux.propTypes = {
  counter: PropTypes.node,
  counterIncrementAction: PropTypes.func,
  counterDecrementAction: PropTypes.func,
  counterRandomAction: PropTypes.func,
}

const mapStateToProps = (state) => {
  return { counter: state.counter }
}

const mapDispatchToProps = { counterIncrementAction, counterDecrementAction, counterRandomAction }
// const mapDispatchToProps = (dispatch) => {
//   return {
//     counterIncrementAction: () => dispatch({ type: 'counter-increment' }),
//     counterDecrementAction: () => dispatch({ type: 'counter-decrement' }),
//     counterRandomAction: (num) => dispatch({ type: 'counter-random', payload: num }),
//   }
// }

export default connect(mapStateToProps, mapDispatchToProps)(Redux)

