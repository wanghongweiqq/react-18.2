/*
 * @Author: 王宏伟
 * @Email: wanghongwei@hualala.com
 * @Date: 2021-05-06 10:53:45
 * @Description: 账务主体相关接口
 * @FilePath: /mis-h5-fe/src/service/apis/customer/common.js
 */
import ajax from '@/service/axios'

export default {
  // 店铺详情
  shopDetail: (data) => ajax({
    url: '/basic/shop/queryShopBaseInfo',
    data,
  }),
  // 集团详情
  groupDetail: (data) => ajax({
    url: '/basic/group/shop/groupDetail',
    data,
    type: 'restful',
  }),
  // 授权信息
  queryAuthorizationManage: (data) => ajax({
    url: '/basic/group/shopOpenAccount/queryAuthorizationManage',
    data,
  }),
  // 小蜜推送页面，获取字典配置内容
  queryXMSendPageTree: (data) => ajax({
    url: '/public-web/customer/relation/queryDictTreeByCode',
    data,
  }),
  // 小蜜推送页面，详情数据
  queryPageDetail: (data) => ajax({
    url: '/customer/cjb/task/queryTaskDetail',
    data,
  }),
}
