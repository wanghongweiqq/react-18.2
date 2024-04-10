/*
 * @Author: 王宏伟
 * @Email：wanghongwei@hualala.com
 * @Date: 2024-04-07 15:29:06
 * @Description: reducers-user用户信息
 * @FilePath: /react-18.2/src/store/reducers/userInfo.js
 */
import { SET_USER_INFO } from '../types/userInfo'

const initialState = { b: 1 }

const userInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_INFO:
      return action.payload
    default:
      return state
  }
}

export default userInfoReducer