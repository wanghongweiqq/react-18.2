/*
 * @Author: 魏瑶
 * @Email：weiyao@hualala.com
 * @Date: 2021-12-03 14:58:10
 * @Description: 派工池接口
 * @FilePath: \mis-h5-fe\src\service\apis\support\dispatch.js
 */
import ajax from '@/service/axios'
export default {
  //   // 派工申请-详情
  //   getApplicationDetail: (data) => ajax({
  //     url: '/pm/projectDispatch/getApplicationDetail',
  //     data,
  //     showLoading: true,
  //   }),
  //   // 派工申请-列表
  //   getApplicationList: (data) => ajax({
  //     url: '/pm/projectDispatch/getApplicationList',
  //     data,
  //     showLoading: false,
  //   }),
  // 查询派工项目
  queryProjectApplicationDetail: (data) => ajax({
    url: '/pm/project_application/queryProjectApplicationDetail',
    data,
  }),

  // 获取日志
  getApplicationLog: (data) => ajax({
    url: '/pm/projectDispatch/getApplicationLog',
    data,
    showLoading: false,
  }),
  // 派工店铺
  queryStoreInformation: (data) => ajax({
    url: '/pm/projectDispatch/queryStoreInformation',
    data,
  }),
  //   // 通过驳回派工申请
  //   passedOrDismissed: (data) => ajax({
  //     url: '/pm/projectDispatch/passedOrDismissed',
  //     data,
  //     showLoading: false,
  //     isFilterParams: false,
  //   }),
  // 查项目
  queryProjectListByApplicationID: (data) => ajax({
    url: '/project/management/queryProjectListByApplicationID',
    data,
  }),
  // 根据申请ID查询各个人天信息
  queryDispatchManHourByApplicationID: (data) => ajax({
    url: '/pm/application_product/queryDispatchManHourByApplicationID',
    data,
    showLoading: false,
  }),
  // 查询立项申请列表
  queryProjectApplicationList: (data) => ajax({
    url: '/pm/project_application/queryProjectApplicationList',
    data,
  }),
  // 查询集团的店铺列表
  queryShopList: (data) => ajax({
    url: '/pm/dispatchWorkOrder/queryShopList',
    data,
  }),
  // 查人员的-不能用
  queryEmpInfoAndOrgAll: (data) => ajax({
    url: '/auth/emp_info/queryEmpInfoAndOrgAll',
    data,
    showLoading: false,
  }),
  // 查人员的
  queryEmpInfoAndOrg: (data) => ajax({
    url: '/auth/emp/queryEmpInfoAndOrg',
    data,
    showLoading: false,
  }),
  // 派工模块
  queryModuleListForDispatch: (data) => ajax({
    url: '/pm/application_product/queryModuleListForDispatch',
    data,
  }),
  // 批量派工
  addDispatchWorkOrder: (data) => ajax({
    url: '/pm/dispatchWorkOrder/addDispatchWorkOrder',
    data,
  }),

}
