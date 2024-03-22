/*
 * @Author: 王宏伟
 * @Email：wanghongwei@hualala.com
 * @Date: 2021-04-15 20:01:16
 * @Description: 客户相关接口
 * @FilePath: /mis-h5-fe/src/service/apis/sales/order.js
 */
import ajax from '@/service/axios'
import * as createOrderApis from './cerate-order'

export default {
  ...createOrderApis,
  // 获取合同订单列表
  queryProductTransferOrderMaster: (data) => ajax({
    url: '/sales/order/queryProductTransferOrderMaster',
    data,
  }),
  // 删除订单
  deleteProductTransferOrderMaster: (data) => ajax({
    url: '/sales/order/deleteProductTransferOrderMaster',
    data,
  }),
  // 标记订单
  markTestOrder: (data) => ajax({
    url: '/sales/order/markTestOrder',
    data,
  }),
  // 获取合同详情
  queryProductTransferOrderMasterByTransOrderID: (data) => ajax({
    url: '/sales/order/queryProductTransferOrderMasterByTransOrderID',
    data,
  }),
  // 查询乙方主体
  queryBizDetail: (data) => ajax({
    url: '/sales/order/querySignSubjectList',
    data,
  }),
  // 查询合同模板
  queryModalList: (data) => ajax({
    url: '/sales/order/queryElectronicContractModel',
    data,
  }),
  // 合同保存/提审
  updateContractInfo: (data) => ajax({
    url: '/sales/order/updateContractInfo',
    data,
  }),
  // 合同撤销审核
  withdrawContract: (data) => ajax({
    url: '/sales/order/withdrawContract',
    data,
  }),
  // 查询产品版本类型
  queryProductVersionType: (data) => ajax({
    url: '/sales/product/queryProductVersionType',
    data,
  }),
  // 查询集团列表
  queryGroupListByLoginEmpInfo: (data) => ajax({
    url: '/sales/shop/queryGroupListByLoginEmpInfo',
    data,
  }),
  ...createOrderApis,
  // 查询产品详情
  queryShopProductDetail: (data) => ajax({
    url: '/sales/orderNew/ocs/queryShopProductDetail',
    data,
  }),
  // 获取审核日志
  queryMisOrderMasterReviewLog: (data) => ajax({
    url: 'sales/order/queryMisOrderMasterReviewLog',
    data,
  }),
  // 查询产品明细
  queryProductItemsByTransOrderID: (data) => ajax({
    url: 'sales/order/queryProductItemsByTransOrderID',
    data,
  }),
  // 企业名称、统一社会信用代码录入优化（精确查询）
  getCreditCode: (data) => ajax({
    url: 'sales/company/getCreditCode',
    data,
  }),
  // 未签约合同修改
  orderModify4EC: (data) => ajax({
    url: 'sales/order/orderModify4EC',
    data,
  }),
  // 合同预览
  previewElectronicContract: (data) => ajax({
    url: 'sales/order/previewElectronicContract',
    data,
  }),
  // 电子合同发起签约接口
  sendElectronicContractWeChat: (data) => ajax({
    url: 'sales/order/sendElectronicContractWeChat',
    data,
  }),
  // 修改签约状态
  toSigningStatus: (data) => ajax({
    url: 'sales/electronicContract/toSigningStatus',
    data,
  }),
  // 撤回签约
  cancelContract: (data) => ajax({
    url: 'sales/electronicContract/cancelContract',
    data,
  }),
  // 提交审核
  updateProductTransferOrderMaster_V5: (data) => ajax({
    url: 'sales/order/updateProductTransferOrderMaster_V5',
    data,
  }),
  // 查询变更订单列表
  queryAlteredOrdersByMasterId: (data) => ajax({
    url: 'sales/order/queryAlteredOrdersByMasterId',
    data,
  }),
  // 二开查询需求
  queryDemand: (data) => ajax({
    url: 'sales/order/queryDemand',
    data,
  }),
  // 合同是否包含二开产品
  containsSecondDevProduct: (data) => ajax({
    url: 'sales/order/containsSecondDevProduct',
    data,
  }),
  // 发起审核进度提醒
  urgeForReview: (data) => ajax({
    url: 'sales/notice/urgeForReview',
    data,
  }),
  // 审核提醒内容获取
  getMessageForReview: (data) => ajax({
    url: 'sales/notice/getMessageForReview',
    data,
  }),
  // 查询甲方信息
  queryFirstPartyInfoByPartyId: (data) => ajax({
    url: '/sales/order/master/queryFirstPartyInfoByPartyId',
    data,
  }),
  // 获取价格政策
  getDisplayAndDefaultValInfo: (data) => ajax({
    url: '/dynamic/control/getDisplayAndDefaultValInfo',
    data,
  }),
  // 价格政策切换查询产品
  rebuildOrderProductList: (data) => ajax({
    url: '/sales/order/rebuildOrderProductList',
    data,
  }),
  // 审核提醒内容获取
  getNewLowPriceList: (data) => ajax({
    url: '/sales/order/execRule',
    data,
  }),
}