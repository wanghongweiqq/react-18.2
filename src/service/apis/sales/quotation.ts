import request from '@/service/axios'
import { QuotationInfo } from '@/types/sales'
import { ORDER_ALIAS } from '@/constants/api'

/**
 * 报价单新增
 */
export const submitQuotationAdd = (data: QuotationInfo) =>
  request<number>({
    url: `${ ORDER_ALIAS }/order/order-quote/add`,
    data,
  })

/**
 * 报价单更新
 */
export const submitQuotationUpdate = (data: QuotationInfo) =>
  request<number>({
    url: `${ ORDER_ALIAS }/order/order-quote/update`,
    data,
  })

/**
 * 获取报价单详情
 */
export const getQuotationDetail = (data: {
  id: number
}) => request<QuotationInfo & { status: number }>({
  url: `${ ORDER_ALIAS }/order/order-quote/detail`,
  data,
})

/**
 * 报价单提审
 */
export const submitQuotationReview = (data: {
  id: number
}) => request<void>({
  url: `${ ORDER_ALIAS }/order/order-quote/submitCheck`,
  data,
})

/**
 * 报价单撤销提审
 */
export const recallQuotationAudit = (data: {
  id: number
}) => request<void>({
  url: `${ ORDER_ALIAS }/order/order-quote/cancelCheck`,
  data,
})

/**
 * 报价单分享
 */
export const getQuotationPreview = (data: {
  id: number
}) => request<{ pdfUrl: string }>({
  url: `${ ORDER_ALIAS }/order/order-quote/share`,
  data,
})

/**
 * 报价单删除
 */
export const deleteQuotation = (data: {
  id: number
}) => request<void>({
  url: `${ ORDER_ALIAS }/order/order-quote/delete`,
  data,
})
