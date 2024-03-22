/*
 * @Author: 王赢辉
 * @Email：wangyinghui@hualala.com
 * @Date: 2021-11-20 17:47:47
 * @Description: 收款管理相关
 * @FilePath: /mis-h5-fe/src/service/apis/sales/receipt.js
 */
import ajax from '@/service/axios'
export default {
  // 查询总待收款金额
  waitPayAmountCount: (data) => ajax({
    url: '/sales/order/pay/waitPayAmountCount',
    data,
  }),
  // 收款客户列表
  waitPayGroupList: (data) => ajax({
    url: '/sales/order/pay/waitPayGroupList',
    data,
  }),
  // 根据客户ID查询待收款合同列表
  waitPayTransList: (data) => ajax({
    url: '/sales/order/pay/waitPayTransList',
    data,
  }),
  // 根据合同ID查询待收款合同列表明细
  waitPayTransDetailList: (data) => ajax({
    url: '/sales/order/pay/waitPayTransDetailList',
    data,
  }),
  // 批量付款
  addBatchPay: (data) => ajax({
    url: '/sales/order/pay/addBatchPay',
    data,
  }),
  // 记录查询
  transPayRecord: (data) => ajax({
    url: '/sales/order/pay/transPayRecord',
    data,
  }),
  // 支付详情
  transPayDetailRecord: (data) => ajax({
    url: '/sales/order/pay/transPayDetailRecord',
    data,
  }),
  // Ocr 识别
  bankSlipOcr: (data) => ajax({
    url: '/sales/ocr/bankSlipOcr',
    data,
  }),
  // 收款撤回
  cancelOrderPayReview: (data) => ajax({
    url: 'sales/order/cancelOrderPayReview',
    data,
  }),
  // 查询历史记录
  getProductSearchHistory: (data) => ajax({
    method: 'GET',
    url: '/sales/product/getProductSearchHistory',
    data,
  }),
  // 删除历史记录
  delSearchHistory: (data) => ajax({
    method: 'GET',
    url: '/sales/product/delSearchHistory',
    data,
  }),
}