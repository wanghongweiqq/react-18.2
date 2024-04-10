/*
 * @Author: 王宏伟
 * @Email：wanghongwei@hualala.com
 * @Date: 2024-04-07 15:29:06
 * @Description: reducers-user权限信息
 * @FilePath: /react-18.2/src/store/reducers/userRight.js
 */
import { SET_USER_RIGHT } from '../types/userRight'

const initialState = []

const userInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_RIGHT:
      return action.payload
    default:
      return state
  }
}

export default userInfoReducer