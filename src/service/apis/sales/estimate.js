/*
 * @Author: 曲良恩
 * @Email：quliangen@hualala.com
 * @Date: 2022-11-07 16:24:17
 * @Description: 预估提成比例-接口
 * @FilePath: /mis-h5-fe/src/service/apis/sales/estimate.js
 */

import ajax from '@/service/axios'
import { ORDER_ALIAS } from '@/constants/api'

export default {
  // 预估提成比例详情
  getEstimateDetail: (data) => ajax({
    url: `${ ORDER_ALIAS }/order/percentage/estimated`,
    data,
  }),
}