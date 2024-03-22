import request from '@/service/axios'
import { UnAddValueProduct } from '@/types/sales'

/**
 * 查询增值产品
 */
export const getUnAddValueProduct = (data: {
  versionType: string;
  productBusinessType: string;
}) => request<{ productItems: UnAddValueProduct[] }>({
  url: '/sales/product/queryUnAddValueProductByProductID',
  data,
})
