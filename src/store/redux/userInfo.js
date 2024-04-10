/*
 * @Author: 王宏伟
 * @Email：wanghongwei@hualala.com
 * @Date: 2024-04-07 15:29:06
 * @Description: redux-user用户信息
 * @FilePath: /react-18.2/src/store/redux/userInfo.js
 */

import { axiosGetUserInfo } from '../../service/apis/common'

// Action Types
const SET_USER_INFO = 'set-user-info'

// Action Creators
const setUserInfoAction = (userInfo) => ({ type: SET_USER_INFO, payload: userInfo })
const getUserInfoAction = () => {
  return (dispatch) => {
    axiosGetUserInfo().then((res) => {
      if (res.body) {
        dispatch(setUserInfoAction(res.body))
      }
    })
  }
}

// Reducers
const initialState = { b: 1 }
const userInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_INFO:
      return action.payload
    default:
      return state
  }
}

export {
  userInfoReducer,
  setUserInfoAction,
  getUserInfoAction,
}
