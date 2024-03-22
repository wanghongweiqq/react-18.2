import request from '@/service/axios'
import { BrandInfo } from '@/types/customer'

/**
 * 订单提审
 */
export const submitReview = (data: {
  /** 订单ID */
  transOrderID: number
}) => request<{ transOrderID: number }>({
  url: '/sales/orderNew/submitReview',
  data,
})

/**
 * 获取品牌
 */
export const getBrandList = (data: {
  /** 集团ID */
  groupID: string
}) => request<{ records: BrandInfo[] }>({
  url: '/sales/shop/queryBrandInfo',
  data,
})

/**
 * 获取版本类型
 */
export const getVersionType = (data: {
  versionStatus: string;
  applyContractTypeListStr: string;
}) => request<{ productVersionList: { versionType: string, versionID: string; }[] }>({
  url: '/sales/orderNew/queryProductVersionType',
  data,
})