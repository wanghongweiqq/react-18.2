import request from '@/service/axios'
import { OcsOrderDetail, ShopProduct, ProductConfig } from '@/types/sales'

type ID = number | string

/**
 * 新增客户销售订单
 */
export const addOcsTransOrder = (data: OcsOrderDetail) => request<{ transOrderID: number }>({
  url: '/sales/orderNew/addOcsTransOrder',
  data,
})

/**
  * 更新客户销售订单
  */
export const updateOcsTransOrder = (data: OcsOrderDetail) => request<{ transOrderID: number }>({
  url: '/sales/orderNew/updateOcsTransOrder',
  data,
})

/**
 * 客户销售订单详情
 */
export const getOcsTransOrderDetail = (data: {
  /** 订单ID */
  transOrderID: number
}) => request<OcsOrderDetail & { records: ShopProduct[] } >({
  url: '/sales/orderNew/ocs/queryOcsOrderDetail',
  data,
})

/**
 * 订单产品明细
 */
export const getShopProductDetail = (data: {
  /** 订单ID */
  transOrderID: ID
}) => request<ShopProduct[]>({
  url: '/sales/orderNew/ocs/queryShopProductDetail',
  data,
})

/**
 * 查询产品信息（产品实时配置）
 */
export const getProductConfig = (data: {
  /** 产品ID */
  productID: ID
}) => request<{ productItemDetail: ProductConfig }>({
  url: '/sales/product/item/config',
  data,
})

/**
 * 查询甲方信息
 */
export const getFirstPartyInfo = (data: {
  /** 客户ID */
  linkShopCustomerID: ID
}) => request<any>({
  url: '/sales/orderNew/queryFirstPartyInfo4OCS',
  data,
})

/**
 * 查询关联客户列表
 */
export const getOcsGroupInfo = (data: {
  /** 客户名称 */
  groupName: string;
  pageNo: number;
  pageSize: number;
}) => request<{ groupID: number; groupName: number; groupAddress: string; }>({
  url: '/sales/orderNew/queryOcsGroupInfo',
  data,
})

/**
 * 查询关联客户列表
 */
export const newSubmitReview = (data: {
  transOrderID: number;
}) => request<any>({
  url: '/sales/orderNew/submitReview',
  data,
})