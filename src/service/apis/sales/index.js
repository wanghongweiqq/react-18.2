/*
 * @Author: 王赢辉
 * @Email：wangyinghui@hualala.com
 * @Date: 2021-12-09 14:53:50
 * @Description: 销售模块api接口
 * @FilePath: /mis-h5-fe/src/service/apis/sales/index.js
 */
import receipt from './receipt'
import client from './client'
import order from './order'// 订单接口
import renew from './renew'
import crm from './crm'
import clue from './clue'
import performanceSplit from './performanceSplit'
import estimate from './estimate'
import business from './business' // 商机接口
import * as quotation from './quotation'

export default {
  ...receipt,
  ...client,
  ...crm,
  ...order,
  ...renew,
  ...clue,
  ...performanceSplit,
  ...estimate,
  ...business,
  ...quotation,
}
