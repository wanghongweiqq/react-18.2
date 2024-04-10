/*
 * @Author: 王宏伟
 * @Email：wanghongwei@hualala.com
 * @Date: 2024-04-07 15:38:55
 * @Description: actions-user用户信息
 * @FilePath: /react-18.2/src/store/actions/userInfo.js
 */
import { SET_USER_INFO } from '../types/userInfo'
import { axiosGetUserInfo } from '../../service/apis/common'

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
export{
  setUserInfoAction,
  getUserInfoAction,
}