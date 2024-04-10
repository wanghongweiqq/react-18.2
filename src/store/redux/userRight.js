/*
 * @Author: 王宏伟
 * @Email：wanghongwei@hualala.com
 * @Date: 2024-04-07 15:29:06
 * @Description: redux-user权限信息
 * @FilePath: /react-18.2/src/store/redux/userRight.js
 */

import { axiosGetUserRight } from '../../service/apis/common'

// Action Types
const SET_USER_RIGHT = 'set-user-right'

// Action Creators
const setUserRightAction = (userRight) => ({ type: SET_USER_RIGHT, payload: userRight })
const getUserRightAction = (empID) => {
  return (dispatch) => {
    axiosGetUserRight({
      empID,
      systemKey: 'MIS_PC',
    }).then((res) => {
      if (res.right) {
        let temRightList = []
        for (const item of res.right) {
          if (item.rightList && item.rightList.length > 0) {
            for (const list of item.rightList) {
              temRightList.push(list.rightCode)
            }
          }
        }
        dispatch(setUserRightAction(temRightList))
      }
    })
  }
}

// Reducers
const initialState = []
const userRightReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_RIGHT:
      return action.payload
    default:
      return state
  }
}

export {
  userRightReducer,
  setUserRightAction,
  getUserRightAction,
}
