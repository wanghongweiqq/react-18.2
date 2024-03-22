/*
 * @Author: 王文龙
 * @Email：wangwenlong@hualala.com
 * @Date: 2022-09-13 10:04:45
 * @Description: 商机相关
 * @FilePath: /mis-h5-fe/src/service/apis/sales/business.js
 */
import ajax from '@/service/axios'
export default {
  // 创建商机
  createBusiness: (data) => {
    return ajax({
      url: '/crm/v4/opportunity/create',
      data,
    })
  },
  // 获取客户下可报备的商机类别
  getClientProductTypes: (data) => {
    return ajax({
      method: 'GET',
      url: '/crm/v4/opportunity/queryCanBeCreateOpportunity',
      data,
    })
  },
  // 更新商机
  updateBusiness: (data) => {
    return ajax({
      url: '/crm/v4/opportunity/update',
      data,
    })
  },
  // 放弃商机
  giveUpBusiness: (data) => {
    return ajax({
      url: '/crm/v4/opportunity/giveUp',
      data,
    })
  },
  // 分页查询商机
  getBusinessList: (data) => {
    return ajax({
      url: '/crm/v4/opportunity/query',
      data,
    })
  },
  // 商机详情
  getBusinessDetail: (data) => {
    return ajax({
      method: 'GET',
      url: '/crm/v4/opportunity/query',
      data,
    })
  },
  // 更新参与销售
  replaceSupportSales: (data) => {
    return ajax({
      url: '/crm/v4/opportunity/replaceSupportSales',
      data,
    })
  },
  // 更新参与售前
  replaceSupportPresales: (data) => {
    return ajax({
      url: '/crm/v4/opportunity/replaceSupportPresales',
      data,
    })
  },
  // 获取客户/商机下联系人
  getQueryBusinessContacts: (data) => {
    return ajax({
      url: '/crm/v4/group/contact/page',
      data,
    })
  },
  // 商机关联现有的客户联系人
  linkedGroupContacts: (data) => {
    return ajax({
      url: '/crm/v4/group/contact/linkedGroupContacts',
      data,
    })
  },
  // 获取商机下订单
  getQueryBusinessOrders: (data) => {
    return ajax({
      url: '/sales/order/queryOrderListByOpportunityId',
      data,
    })
  },
  // 获取商机日志
  getBusinessLogs: (data) => {
    return ajax({
      url: '/crm/v4/log',
      data,
    })
  },
}

