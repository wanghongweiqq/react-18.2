/*
 * @Author: 王宏伟
 * @Email: wanghongwei@hualala.com
 * @Date: 2021-05-06 10:53:45
 * @Description: 集团相关接口
 * @FilePath: /mis-h5-fe/src/service/apis/customer/group.js
 */
import ajax from '@/service/axios'
import * as quickApi from './quick'

export default {
  // 集团列表
  queryChargeGroup: (data) => ajax({
    url: '/groupBasic/queryChargeGroup',
    data,
  }),
  // 集团画像接口
  queryGroupPhoto: (data) => ajax({
    url: '/customer/photo/queryGroupPhoto',
    data,
  }),

  // 集团下业务映射记录
  queryMappingRecords: (data) => ajax({
    url: '/basic/group/settleMapping/queryMappingRecords',
    data,
  }),
  // 绑定记录详情
  queryBindRecordsDetail: (data) => ajax({
    url: '/basic/group/settleMapping/queryBindRecordsDetail',
    data,
  }),
  // 查询选择马甲主体列表
  querySettleList: (data) => ajax({
    url: '/basic/group/settleMapping/querySettleList',
    data,
  }),
  // 检查主体是否可以作为主账务主体
  checkMasterSettle: (data) => ajax({
    url: '/basic/group/settleMapping/checkMasterSettle',
    data,
  }),
  // 新增账务主体绑定关系
  bindMerchantMapping: (data) => ajax({
    url: '/basic/group/settleMapping/bindMerchantMapping',
    data,
  }),

  // 查询集团基本参数
  groupBasicParams: (data) => ajax({
    url: '/basic/group/shop/groupBasicParams',
    data,
    type: 'restful',
  }),
  // 修改集团基本参数
  updateGroupBasicParams: (data) => ajax({
    url: '/basic/group/shop/updateGroupBasicParams',
    data,
  }),
  // 同客户集团列表
  queryGroupByCustomerID: (data) => ajax({
    url: '/groupBasic/queryGroupByCustomerID',
    data,
  }),
  // 集团详情中店铺列表
  queryGroupDetailToShop: (data) => ajax({
    url: '/shopBasic/queryGroupDetailToShop',
    data,
  }),
  // 订单信息
  queryProductTransferOrderInfo: (data) => ajax({
    url: '/sales/order/queryProductTransferOrderInfo',
    data,
  }),
  // 权益账户列表
  queryParamAccountPageInfo: (data) => ajax({
    url: '/cservice/equity/queryParamAccountPageInfo',
    data,
  }),
  // 权益账户充值记录
  queryRechargePageInfo: (data) => ajax({
    url: '/cservice/equity/queryRechargePageInfo',
    data,
  }),
  // 权益账户设置
  updateAccountOpen: (data) => ajax({
    url: '/cservice/equity/updateAccountOpen',
    data,
  }),
  // 权益账户充值
  recharge: (data) => ajax({
    url: '/cservice/equity/recharge',
    data,
  }),
  // 充值类型的枚举
  queryBusinessList: () => ajax({
    url: '/cservice/equity/queryBusinessList',
  }),
  // 待续费列表
  queryAuthLicenseWaitRenewModule: (data) => ajax({
    url: '/sales/auth/queryAuthLicenseWaitRenewModule',
    data,
  }),
  // 待续费列表
  queryGroupAndProductOption: (data) => ajax({
    url: '/sales/auth/queryGroupAndProductOption',
    data,
  }),
  // 支付数据
  queryPayDataInfo: (data) => ajax({
    url: '/customer/photo/queryPayDataInfo',
    data,
  }),
  // 产品覆盖
  queryProductCoverDetail: (data) => ajax({
    url: '/customer/photo/queryProductCoverDetail',
    data,
  }),
  // 上线模块
  queryOnlineModule: (data) => ajax({
    url: '/basic/group/shopOpenAccount/queryOnlineModule',
    data,
  }),
  // 基础信息
  queryGroupBaseInfoResult: (data) => ajax({
    url: '/customer/photo/queryGroupBaseInfoResult',
    data,
  }),
  // 新增集团跟进计划
  addGroupFollowPlan: (data) => ajax({
    url: '/groupFollowPlan/addGroupFollowPlan',
    data,
  }),
  // 修改集团跟进计划
  updateGroupFollowPlan: (data) => ajax({
    url: '/groupFollowPlan/updateGroupFollowPlan',
    data,
  }),
  // 查询集团跟进计划详情
  getGroupFollowPlanInfo: (data) => ajax({
    url: '/groupFollowPlan/getGroupFollowPlanInfo',
    data,
  }),
  // 集团标签-列表
  queryGroupTagList: (data) => ajax({
    url: '/groupTag/queryGroupTags',
    data,
  }),
  // 集团标签-新增
  addGroupTags: (data) => ajax({
    url: '/groupTag/addGroupTags',
    data,
  }),
  // 集团标签-编辑
  updateGroupTags: (data) => ajax({
    url: '/groupTag/queryGroupTagsForEdit',
    data,
  }),
  // 跟进/行动-列表
  queryFollowActionList: (data) => ajax({
    url: '/groupFollowPlan/queryGroupFollowPlanList',
    data,
  }),
  // 跟进行动-新增
  addFollowAction: (data) => ajax({
    url: '/groupFollowPlan/addGroupFollowPlan',
    data,
  }),
  // 跟进行动-编辑
  updateFollowAction: (data) => ajax({
    url: '/groupFollowPlan/updateGroupFollowPlan',
    data,
  }),
  // 跟进行动-开始计划
  startFollowAction: (data) => ajax({
    url: '/groupFollowAction/startFollowAction',
    data,
  }),
  // 跟进行动-结束计划
  endFollowAction: (data) => ajax({
    url: '/groupFollowAction/endFollowAction',
    data,
  }),
  // 跟进行动-查看
  queryFollowActionDetail: (data) => ajax({
    url: '/groupFollowPlan/getGroupFollowPlanInfo',
    data,
  }),
  // 新增修改客户联系人
  addOrUpdateCustomerContact: (data) => ajax({
    url: '/groupBasic/insertOrUpdateCustomerContact',
    data,
  }),
  // 查询客户联系人列表
  queryCustomerContact: (data) => ajax({
    url: '/groupBasic/queryCustomerContactPageByGroupID',
    data,
  }),
  // 删除客户联系人
  delCustomerContact: (data) => ajax({
    url: '/groupBasic/deleteCustomerContact',
    data,
  }),
  // 获取客户联系人详情
  queryCustomerContactDetail: (data) => ajax({
    url: '/groupBasic/queryCustomerContactInfoByContactID',
    data,
  }),
  // 新增修改跟进人
  addOrUpdateFollowPerson: (data) => ajax({
    url: '/groupBasic/insertOrUpdateStakeholder',
    data,
  }),
  // 查询跟进人列表
  queryFollowPerson: (data) => ajax({
    url: '/groupBasic/queryStakeholderPageByGroupID',
    data,
  }),
  // 删除跟进人
  delFollowPerson: (data) => ajax({
    url: '/groupBasic/deleteStakeholder',
    data,
  }),
  // 获取客户联系人详情
  queryFollowPersonDetail: (data) => ajax({
    url: '/groupBasic/queryStakeholderInfoByItemID',
    data,
  }),
  ...quickApi,
}

