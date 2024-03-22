/*
 * @Author: 王宏伟
 * @Email: wanghongwei@hualala.com
 * @Date: 2021-04-15 20:01:16
 * @Description: 首页指标卡相关接口
 * @FilePath: /mis-h5-fe/src/service/apis/index/index.js
 */
import sales from './sales' // 销售线
import publicApi from './public' // 公共线
export default {
  ...publicApi,
  ...sales,
}
