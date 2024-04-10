/*
 * @Author: 王宏伟
 * @Email：wanghongwei@hualala.com
 * @Date: 2024-04-07 15:29:06
 * @Description: reducers-扁平化路由
 * @FilePath: /react-18.2/src/store/reducers/flatRoute.js
 */
import { SET_FLAT_ROUTE } from '../types/flatRoute'

const initialState = []

const flatRouteReducer = (state = initialState, action) => {
  console.log('action')
  console.log(action.type)
  console.log(action.payload)
  switch (action.type) {
    case SET_FLAT_ROUTE:
      return action.payload
    default:
      return state
  }
}

export default flatRouteReducer