/*
 * @Author: 王宏伟
 * @Email: wanghongwei@hualala.com
 * @Date: 2021-05-06 10:53:45
 * @Description: 店铺相关接口
 * @FilePath: /mis-h5-fe/src/service/apis/customer/shop.js
 */
import ajax from '@/service/axios'

export default {
  // 店铺列表
  queryChargeShop: (data) => ajax({
    url: '/shopBasic/queryChargeShop',
    data,
  }),
  // 获取店铺画像
  queryShopPhoto: (data) => ajax({
    url: '/customer/photo/queryShopPhoto',
    data,
  }),
  // 获取店铺画像-产品授权模块
  queryShopProductAuth: (data) => ajax({
    url: '/customer/photo/queryShopProductAuth',
    data,
    showLoading: false,
  }),
  // 解锁店铺
  unlockShop: (data) => ajax({
    url: '/basic/group/shop/unlockShop',
    data,
    type: 'restful',
  }),
  // 解锁排队等位
  unlockWaiting: (data) => ajax({
    url: '/basic/group/shop/unlockWaiting',
    data,
    type: 'restful',
  }),
  // 上线模块
  queryOnlineModule: (data) => ajax({
    url: '/basic/group/shopOpenAccount/queryOnlineModule',
    data,
  }),
  // 相关人员
  getShopConcerned: (data) => ajax({
    url: '/basic/group/shop/geSthopConcerned',
    data,
    type: 'restful',
  }),
  // 店铺联系人
  shopLinkmanList: (data) => ajax({
    url: '/basic/group/shop/shopLinkmanList',
    data,
    type: 'restful',
  }),
  // 新增或修改店铺联系人
  addOrUpdateShopLinkman: (data) => ajax({
    url: '/basic/group/shop/addOrUpdateShopLinkman',
    data,
  }),
  // 删除店铺联系人
  deleteShopLinkman: (data) => ajax({
    url: '/basic/group/shop/deleteShopLinkman',
    data,
    type: 'restful',
  }),
  // 更新店铺基础参数
  updateShopBaseParam: (data) => ajax({
    url: '/basic/group/shop/updateShopBaseParam',
    data,
  }),
  // 店铺工单
  queryServiceExplain: (data) => ajax({
    url: '/basic/workOrder/workOrderMaster/queryServiceExplain',
    data,
  }),
  // 获取店铺产品数据
  queryShopProduct: (data) => ajax({
    url: '/customer/photo/queryShopProduct',
    data,
  }),
  // 获取店铺支付数据
  queryShopPayDataInfo: (data) => ajax({
    url: '/customer/photo/queryShopPayDataInfo',
    data,
  }),
  // 归属信息
  queryShopOwnership: (data) => ajax({
    url: '/customer/photo/queryShopOwnership',
    data,
  }),
  // 创建员工
  createStaff: (data) => ajax({
    url: '/shopBasic/openHxb',
    data,
  }),
  // 创建店铺
  createShop: (data) => ajax({
    url: '/shopBasic/addShopForCjb',
    data,
  }),
  // 获取店铺品牌
  getShopBrand: (data) => ajax({
    url: '/sales/group/queryShopCenterBrandInfoListByGroupID',
    data,
  }),

}

