/*
 * @Author: 王宏伟
 * @Email: wanghongwei@hualala.com
 * @Date: 2021-05-06 10:53:45
 * @Description: 商户路由
 * @FilePath: /mis-h5-fe/src/service/apis/customer/index.js
 */
import common from './common'// 商户下公共页面
import shop from './shop' // 店铺
import group from './group' // 集团
import account from './account' // 账务主体

export default {
  ...common,
  ...shop,
  ...group,
  ...account,
}
