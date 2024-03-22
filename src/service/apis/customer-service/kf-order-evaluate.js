/*
 * @Author: 魏瑶
 * @Email：weiyao@hualala.com
 * @Date: 2022-08-21 18:40:57
 * @Description: 客服工单评价
 * @FilePath: \mis-h5-fe\src\service\apis\customer-service\kf-order-evaluate.js
 */
import ajax from '@/service/axios'
export default {
  // 获取客服工单详情
  queryKfAppraiseDetail: (data) => ajax({
    url: '/customer/workOrder/appraise/queryKfAppraiseDetail',
    data,
    showLoading: false,
  }),
  // 获取录音
  queryCallText: (data) => ajax({
    url: '/customer/workOrder/appraise/queryCallText',
    data,
    showLoading: false,
  }),
  // 提交工单评价
  submitKfAppraise: (data) => ajax({
    url: '/customer/workOrder/appraise/submitKfAppraise',
    data,
    showLoading: false,
  }),

}
