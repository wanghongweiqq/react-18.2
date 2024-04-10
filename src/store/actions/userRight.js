/*
 * @Author: 王宏伟
 * @Email：wanghongwei@hualala.com
 * @Date: 2024-04-07 15:38:55
 * @Description: actions-user权限信息
 * @FilePath: /react-18.2/src/store/actions/userRight.js
 */
import { SET_USER_RIGHT } from '../types/userRight'
import { axiosGetUserRight } from '../../service/apis/common'

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
export{
  setUserRightAction,
  getUserRightAction,
}