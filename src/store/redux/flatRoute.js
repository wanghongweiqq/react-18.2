/*
 * @Author: 王宏伟
 * @Email：wanghongwei@hualala.com
 * @Date: 2024-04-07 15:29:06
 * @Description: redux-扁平化路由
 * @FilePath: /react-18.2/src/store/redux/flatRoute.js
 */
// Action Types
const SET_FLAT_ROUTE = 'set-flat-route'

// Action Creators
const setFlatRouteAction = (list) => ({ type: SET_FLAT_ROUTE, payload: list })

// Reducers
const initialState = []
const flatRouteReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FLAT_ROUTE:
      return action.payload
    default:
      return state
  }
}

export {
  flatRouteReducer,
  setFlatRouteAction,
}
