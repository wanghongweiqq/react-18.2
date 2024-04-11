/*
 * @Author: 王宏伟
 * @Email：wanghongwei@hualala.com
 * @Date: 2024-04-07 15:17:56
 * @Description: 全局状态管理redux
 * @FilePath: /react-18.2/src/store/index.js
 */

import { legacy_createStore, combineReducers, applyMiddleware } from 'redux'
import { thunk } from 'redux-thunk'
import { counterReducer } from './redux/counter'
import { userInfoReducer } from './redux/userInfo'
import { userRightReducer } from './redux/userRight'
import { flatRouteReducer } from './redux/flatRoute'

const rootReducer = combineReducers({
  counter: counterReducer, // 计数器 number
  userInfo: userInfoReducer, // 用户基本信息 object
  userRight: userRightReducer, // 用户权限列表 array
  flatRoute: flatRouteReducer, // 扁平化路由 array
})
const preloadedState = undefined // 如要设置：{ counter: 1, userInfo: { } }
// action处理函数reducer，必传
// preloadedState：初始状态state，非必传，会覆盖掉reducer方法里设置的初始值
// enhancer：增强器函数，非必传，也就是我们说的中间件函数，在有异步时配置该参数
const store = legacy_createStore(rootReducer, preloadedState, applyMiddleware(thunk))

export default store