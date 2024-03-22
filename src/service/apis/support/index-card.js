/*
 * @Author: 谢东昊
 * @Email：weiyao@hualala.com
 * @Date: 2021-12-03 14:58:40
 * @Description: 派工审核接口
 * @FilePath: /mis-h5-fe/src/service/apis/support/index-card.js
 */
import ajax from '@/service/axios'
const HEAD_URL = '/dashboard'
export default {
  // 集团统计概览集团总数查询
  groupStatistical: (data) => ajax({
    url: `${ HEAD_URL }/merchant/group/groupStatistical`,
    data,
    showLoading: false,
  }),
  // 集团统计概览按时间维度总数查询
  groupStatisticalToDate: (data) => ajax({
    url: `${ HEAD_URL }/merchant/group/groupStatisticalToDate`,
    data,
    showLoading: false,
  }),
  // 店铺统计概览店铺总数查询
  shopStatistical: (data) => ajax({
    url: `${ HEAD_URL }/merchant/shop/shopStatistical`,
    data,
    showLoading: false,
  }),
  // 店铺统计概览按时间维度总数查询
  shopStatisticalToDate: (data) => ajax({
    url: `${ HEAD_URL }/merchant/shop/shopStatisticalToDate`,
    data,
    showLoading: false,
  }),
}