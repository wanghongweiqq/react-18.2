/*
 * @Author: 王宏伟
 * @Email：wanghongwei@hualala.com
 * @Date: 2024-03-25 15:39:41
 * @Description: css说明
 * @FilePath: /react-18.2/src/view/doc/redux.js
 */
import React from 'react'

function Redux () {
  return (
    <div className='pg-doc'>
      <h1>Redux说明</h1>
      <h2>1、安装相关依赖</h2>
      <table>
        <tbody>
          <tr>
            <td><em>react-redux</em></td>
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
      <p><img alt='redux相关依赖包' src={require('../../assets/images/doc/redux.png')} /></p>

      <h2>2、创建 Redux Store</h2>
      <table>
        <tbody>
          <tr>
            <td><em>legacy_createStore</em></td>
            <td>
              <p>redux 发布 4.2.0 版本后将原始 createStore API 标记为 @deprecated（废弃），并且添加了一个全新的 legacy_createStore </p>
              <p>legacy_createStore接收三个参数(reducer, preloadedState, enhancer)</p>
              <p>reducer：action处理函数reducer，必传</p>
              <p>preloadedState：初始状态state，非必传，会覆盖掉reducer方法里设置的初始值</p>
              <p>enhancer：增强器函数，非必传，也就是我们说的中间件函数，在有异步时配置该参数</p>
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
      <p><img alt='redux创建相关' src={require('../../assets/images/doc/redux-creat.png')} /></p>
      <p><img alt='redux详情' src={require('../../assets/images/doc/redux-detail.png')} /></p>

      <h2>3、为 React 提供 Redux Store</h2>
      <p><img alt='redux入口引入' src={require('../../assets/images/doc/react-redux.png')} /></p>

      <h2>4、组件使用 Redux Store</h2>
      <p>通过使用react-redux提供的connect方法来在组件内使用redux，这个方法有点函数柯里化的意思</p>
      <p>第1个方法里的参数是将状态存储中需要使用的state和action作为组件的props传递给组件</p>
      <p>第2个方法里的参数是需要绑定的组件名称</p>
      <p><img alt='组件使用 Redux Store' src={require('../../assets/images/doc/react-redux-component.png')} /></p>

      <p>PS：后续可以实践使用redux官网推荐的@reduxjs/toolkit（toolkit：工具包）来代替redux，<a target='_blank' href='https://www.redux.org.cn/tutorials/quick-start.html' rel='noreferrer'>具体见官网</a></p>
    </div>
  )
}

export default Redux

