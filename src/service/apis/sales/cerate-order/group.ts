import request from '@/service/axios'
import { ShopInfoType } from '@/types/customer'

/**
 * 查询店铺列表
 */
export const getShopListByGroupId = (data: { groupID: string; shopName: string }) => request<{ records: ShopInfoType[] }>({
  url: '/pm/projectDispatch/queryShopByGroup',
  data,
})
