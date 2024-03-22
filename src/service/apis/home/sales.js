/*
 * @Author: 王宏伟
 * @Email: wanghongwei@hualala.com
 * @Date: 2021-04-15 20:01:16
 * @Description: 首页指标卡相关接口-销售
 * @FilePath: /mis-h5-fe/src/service/apis/home/sales.js
 */
import ajax from '@/service/axios'
export default {
  // // 订单指标卡主面板
  // queryOrderPanel: (data) => ajax({
  //   url: '/dashboard/order/index/queryOrderPanel',
  //   data,
  //   showLoading: false,
  // }),
  // 签约金额
  orderAmount: (data) => ajax({
    url: '/dashboard/order/index/queryOrderAmount',
    data,
    showLoading: false,
  }),
  // 回款金额
  payAmount: (data) => ajax({
    url: '/dashboard/order/index/queryOrderPayAmount',
    data,
    showLoading: false,
  }),
  // 签约订单类型
  orderType: (data) => ajax({
    url: '/dashboard/order/index/queryOrderType',
    data,
    showLoading: false,
  }),
  // 合同订单状态
  orderStatus: (data) => ajax({
    url: '/dashboard/order/index/queryOrderStatus',
    data,
    showLoading: false,
  }),
  // 签约品牌或门店
  orderBrand: (data) => ajax({
    url: '/dashboard/order/index/queryOrderBrand',
    data,
    showLoading: false,
  }),

}
