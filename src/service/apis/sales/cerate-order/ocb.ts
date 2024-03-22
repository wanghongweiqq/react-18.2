import request from '@/service/axios'
import { OcbOrderDetail } from '@/types/sales'

/**
 * 新增客户合作协议
 */
export const addOcbTransOrder = (data: OcbOrderDetail) => request<{ transOrderID: number }>({
  url: '/sales/orderNew/addOcbTransOrder',
  data,
})

/**
 * 更新客户合作协议
 */
export const updateOcbTransOrder = (data: OcbOrderDetail) => request<{ transOrderID: number }>({
  url: '/sales/orderNew/updateOcbTransOrder',
  data,
})

/**
 * 客户合作协议详情
 */
export const getOcbTransOrderDetail = (data: {
  /** 订单ID */
  transOrderID: number
}) => request<{ productTransferOrderMasterOcbModel: OcbOrderDetail & { contractForm: string } }>({
  url: '/sales/orderNew/queryOcbOrderInfoByTransOrderID',
  data,
})
