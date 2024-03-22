/*
 * @Author: 王宏伟
 * @Email: wanghongwei@hualala.com
 * @Date: 2021-05-06 10:53:45
 * @Description: 账务主体相关接口
 * @FilePath: /mis-h5-fe/src/service/apis/customer/account.js
 */
import ajax from '@/service/axios'

export default {
  // 查询账务主体列表
  queryAllSettleUnitList: (data) => ajax({
    url: '/basic/group/shop/queryAllSettleUnitList',
    data,
  }),
  // 查询账务主体详情
  settleUnitListNew: (data) => ajax({
    url: '/basic/group/shop/settleUnitListNew',
    data,
    // showError: false,
  }),

  // 查询账务主体实名认证信息
  querySettleUnitDocumentInfo: (data) => ajax({
    url: '/basic/group/settleUnit/querySettleUnitDocumentInfo',
    data,
  }),

  // 查询主账务主体下的附属账务主体列表
  querySubMappingBySettleID: (data) => ajax({
    url: '/basic/group/settleMapping/querySubMappingBySettleID',
    data,
  }),
  // 查询子账务主体的归属账务主体信息
  queryMerchantMappingBySettleID: (data) => ajax({
    url: '/basic/group/settleMapping/queryMerchantMappingBySettleID',
    data,
  }),
  // 子账务主体解绑
  unbindSettleMapping: (data) => ajax({
    url: '/basic/group/settleMapping/unbindSettleMapping',
    data,
  }),
  // 查询账务主体绑定的店铺
  queryShopBaseInfoAndOwner: (data) => ajax({
    url: '/basic/shop/queryShopBaseInfoAndOwner',
    data,
  }),
  // 查询账务主体商户号
  queryZpayReportInfoBySettleID: (data) => ajax({
    url: '/basic/group/settleUnit/queryZpayReportInfoBySettleID',
    data,
  }),
  // 查询账务主体报备的商户号信息(微信商户号)
  querySettleUnitMerchantNo: (data) => ajax({
    url: '/basic/group/settleUnit/querySettleUnitMerchantNo',
    data,
  }),
  // 查询商户号开户意愿确认结果
  queryLatestChannelAuth: (data) => ajax({
    url: '/basic/group/settleUnit/queryLatestChannelAuth',
    data,
  }),

}
