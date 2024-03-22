/*
 * @Author: 魏瑶
 * @Email：weiyao@hualala.com
 * @Date: 2021-12-03 14:58:40
 * @Description: 派工审核接口
 * @FilePath: \mis-h5-fe\src\service\apis\support\apply-for.js
 */
import ajax from '@/service/axios'
export default {
  // 派工申请-详情
  getApplicationDetail: (data) => ajax({
    url: '/pm/projectDispatch/getApplicationDetail',
    data,
  }),
  // 派工申请-列表
  getApplicationList: (data) => ajax({
    url: '/pm/projectDispatch/getApplicationList',
    data,
  }),
  // 通过驳回派工申请
  passedOrDismissed: (data) => ajax({
    url: '/pm/projectDispatch/passedOrDismissed',
    data,
    isFilterParams: false, // 不需要过滤参数 为空
  }),
  // 校验合同的客户与集团的客户必须为同一个客户
  checkCustomer: (data) => ajax({
    url: ' /pm/projectDispatch/checkCustomer',
    data,
    showLoading: false,
  }),
}