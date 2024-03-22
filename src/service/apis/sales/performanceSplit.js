/*
 * @Author: 王赢辉
 * @Email：wangyinghui@hualala.com
 * @Date: 2022-06-22 11:25:40
 * @Description: 绩效拆分接口
 * @FilePath: /mis-h5-fe/src/service/apis/sales/performanceSplit.js
 */
import ajax from '@/service/axios'
import { ORDER_ALIAS } from '@/constants/api'

export default {
  // 查询拆分规则列表
  querySplitList: (data) => ajax({
    url: '/sales/perfor/split/list',
    data,
  }),
  // 添加客户绩效规则
  addSplit: (data) => ajax({
    url: '/sales/perfor/split/add',
    data,
  }),
  // 查询客户绩效规则详情
  querySplitDetail: (data) => ajax({
    url: '/sales/perfor/split/detail',
    data,
  }),
  // 客户绩效规则提交审核
  splitSubmitReview: (data) => ajax({
    url: '/sales/perfor/split/submitReview',
    data,
  }),
  // 客户绩效规则变更
  updateSplit: (data) => ajax({
    url: '/sales/perfor/split/update',
    data,
  }),
  // 客户绩效规则撤回
  splitRevokeReview: (data) => ajax({
    url: '/sales/perfor/split/revokeReview',
    data,
  }),
  // 客户绩效规则作废
  splitCancelReview: (data) => ajax({
    url: '/sales/perfor/split/cancelReview',
    data,
  }),
  // 查询组织信息
  queryOrgStructureTree: (data) => ajax({
    url: '/auth/org/queryOrgStructureTreeByNameV2',
    data,
  }),
  // 查询人员
  queryEmpInfoAndOrgV2: (data) => ajax({
    url: '/auth/emp/queryEmpInfoAndOrgV2',
    data,
  }),
  // 新增订单绩效拆分
  addOrderPerfor: (data) => ajax({
    url: '/sales/perfor/order/addOrderPerfor',
    data,
  }),
  // 订单绩效拆分提交审核
  submitReview: (data) => ajax({
    url: '/sales/perfor/order/submitReview',
    data,
  }),
  // 订单绩效拆分撤回审核
  cancleReview: (data) => ajax({
    url: '/sales/perfor/order/cancleReview',
    data,
  }),
  // 订单绩效拆分查询详情
  queryDetail: (data) => ajax({
    url: '/sales/perfor/order/queryDetail',
    data,
  }),
  // 订单绩效拆分编辑接口
  updateOrderPerfor: (data) => ajax({
    url: '/sales/perfor/order/updateOrderPerfor',
    data,
  }),
  // 订单绩效拆分作废
  invalidOrderPerfor: (data) => ajax({
    url: '/sales/perfor/order/invalidOrderPerfor',
    data,
  }),
  // 订单绩效拆分变更
  changeOrderPerfor: (data) => ajax({
    url: '/sales/perfor/order/changeOrderPerfor',
    data,
  }),
  // 查询特殊绩效申请查询列表
  querySpecialApply: (data) => ajax({
    url: `${ ORDER_ALIAS }/order/performance-special-apply/list`,
    data,
  }),
  // 特殊绩效申请详情
  querySpecialApplyDetail: (id) => ajax({
    method: 'GET',
    url: `${ ORDER_ALIAS }/order/performance-special-apply/${ id }`,
  }),
  // 特殊绩效申请
  addSpecialApply: (data) => ajax({
    url: `${ ORDER_ALIAS }/order/performance-special-apply`,
    data,
  }),
  // 修改特殊绩效申请
  // updateSpecialApply: (data, id) => ajax({
  //   method: 'put',
  //   url: `${ ORDER_ALIAS }/order/performance-special-apply/${ id }`,
  //   data,
  // }),
  // 撤销特殊绩效申请
  cancelSpecialApplyCheck: (id) => ajax({
    url: `${ ORDER_ALIAS }/order/performance-special-apply/cancelCheck/${ id }`,
  }),
  // 特殊绩效申请提交审核
  submitSpecialApplyCheck: (id) => ajax({
    url: `${ ORDER_ALIAS }/order/performance-special-apply/submitCheck/${ id }`,
  }),
  // 产品选择列表
  selectProductList: (transOrderID) => ajax({
    method: 'GET',
    url: `${ ORDER_ALIAS }/order/performance-special-apply/selectProductList/${ transOrderID }`,
  }),
  // // 产品选择列表
  // selectProductList: (data) => ajax({
  //   url: 'sales/order/queryCanbeAlteredPros',
  //   data,
  // }),
}