/*
 * @Author: 王宏伟
 * @Email: wanghongwei@hualala.com
 * @Date: 2021-04-15 20:01:16
 * @Description: 公共接口
 * @FilePath: /react-c/src/service/apis/common.js
 */
import ajax from '../axios.js'
const common= {
  // 获取用户基本信息
  getUserInfo: (data) => ajax({
    url: '/passport/getUserInfo',
    data,
  }),
  // 获取用户基本信息
  getUserRight: (data) => ajax({
    url: '/auth/emp/queryRightInfoWithLogin',
    data,
  }),
}
export default common