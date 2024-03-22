/*
 * @Author: 王文龙
 * @Email：wangwenlong@hualala.com
 * @Date: 2022-03-08 13:51:49
 * @Description: 续费管理相关
 * @FilePath: /mis-h5-fe/src/service/apis/sales/renew.js
 */
import ajax from '@/service/axios'
export default {
  // 续费列表
  queryRenewList: (data) => ajax({
    url: '/sales/auth/queryAuthLicenseWaitRenewCountList',
    data,
  }),
  // 查询合同的签约详情-获取产品信息和金额合计
  queryTransferOrderRenewModuleInfo: (data) => ajax({
    url: '/sales/order/queryTransferOrderRenewModuleInfo',
    data,
  }),
  // 分页查询合同的签约详情-签约详情列表
  queryTransferOrderRenewDetailList: (data) => ajax({
    url: '/sales/order/queryTransferOrderRenewDetailList',
    data,
  }),
  // 批量导入续费信息
  uploadRenewExcel: (data) => ajax({
    url: '/sales/auth/renew/excel',
    data,
  }),
  // 查询集团的续费方案单列表
  queryRenewSchemes: (data) => ajax({
    url: '/sales/renew/schemes',
    data,
  }),
  // 查询集团的续费方案单详情
  queryRenewSchemeDetail: (data) => ajax({
    url: '/sales/renew/scheme/detail',
    data,
  }),
  // 查询实体明细
  queryEntityDetails: (data) => ajax({
    url: '/sales/renew/scheme/queryEntityDetails',
    data,
  }),
  // 设置实体到期续费和不续费
  entitySetting: (data) => ajax({
    url: '/sales/renew/scheme/entitySetting',
    data,
  }),
  // 查询产品购买记录
  queryOrderProductRecords: (data) => ajax({
    url: '/sales/renew/scheme/queryOrderProductRecords',
    data,
  }),
  // 查询正在审核的续费方案详情
  queryReviewDetail: (data) => ajax({
    url: '/sales/renew/scheme/reviewDetail',
    data,
  }),
  // 保存续费确认单价格
  updateRenewDetail: (data) => ajax({
    url: '/sales/renew/scheme/save',
    data,
  }),
  // 删除确认单方案修改
  deleteRenewChange: (data) => ajax({
    url: '/sales/renew/scheme/deleteChange',
    data,
  }),
  // 续费方案单提交审核
  submitRenewChange: (data) => ajax({
    url: '/sales/renew/scheme/submit',
    data,
  }),
  // 续费方案单撤销审核
  revokeRenewChange: (data) => ajax({
    url: '/sales/renew/scheme/revoke',
    data,
  }),
  // 查询产品续费建议售价列表
  advisePrices: (data) => ajax({
    url: '/sales/renew/scheme/advisePrices',
    data,
  }),
  // 集团续费价格初始化
  initGroupRenewPrice: (data) => ajax({
    url: '/authorize/authGroupAndShop/initGroupRenewPrice',
    data,
  }),
}