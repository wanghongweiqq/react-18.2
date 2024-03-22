/*
 * @Author: 程浩伦
 * @Email：chenghaolun@hualala.com
 * @Date: 2022-06-01 09:30:30
 * @Description:线索相关
 * @FilePath: /mis-h5-fe/src/service/apis/sales/clue.js
 */

import ajax from '@/service/axios'
export default {
  // 拜访列表
  fetchClueVisitList: (data) => ajax({
    url: '/crm/v4/visit/api/list',
    data,
  }),
  // 查询联系人
  fetchClueContactList: (data) => ajax({
    url: '/crm/v4/clue/contact',
    data,
  }),
  // 创建拜访计划
  createCluePlan: (data) => ajax({
    url: '/crm/v4/visit/api/plan/add',
    data,
  }),
  // 更新拜访计划
  updateCluePlan: (data) => ajax({
    url: '/crm/v4/visit/api/plan/update',
    data,
  }),
  // 查询拜访详情
  fetchClueVisitDetail: (data) => ajax({
    url: '/crm/v4/visit/api/detail',
    data,
  }),
  // 完成拜访计划
  completeClueVisitPlan: (data) => ajax({
    url: '/crm/v4/visit/api/plan/complete',
    data,
  }),
  // 创建拜访记录
  createClueRecord: (data) => ajax({
    url: '/crm/v4/visit/api/record/add',
    data,
  }),
  // 更新拜访记录
  updateClueRecord: (data) => ajax({
    url: '/crm/v4/visit/api/record/update',
    data,
  }),
  // 判断当前位置与门店位置距离
  getDistanceValidation: (data) => ajax({
    url: '/crm/v4/clue/getDistanceValidation',
    data,
  }),
  // 创建线索
  createClue: (data) => ajax({
    url: '/crm/v4/clue/add',
    data,
  }),
  // 编辑线索
  updateClue: (data) => ajax({
    url: '/crm/v4/clue/update',
    data,
  }),
  // 取消锁定
  unLockClue: (data) => ajax({
    url: '/crm/v4/clue/cancel',
    data,
  }),
  // 查询线索延期次数
  getTimesLimit: (data) => ajax({
    url: `/crm/v4/clue/getTimesLimit?clueID=${ data.clueID }&source=${ data.source }`,
  }),
  // 线索延期
  delayClue: (data) => ajax({
    url: '/crm/v4/clue/delay',
    data,
  }),
  // 获取线索详情
  getClueDetail: (data) => ajax({
    url: '/crm/v4/clue/detail',
    data,
  }),
  // 模糊查询门店名称
  getStoreName: (data) => ajax({
    url: '/crm/v4/clue/getStoreName',
    data,
  }),
  // 检测线索冲突（畅捷）
  checkConflict: (data) => ajax({
    url: '/crm/v4/clue/checkConflict',
    data,
  }),
  // 检测线索门店名称冲突（企业）
  checkConflictStoreName: (data) => ajax({
    url: '/crm/v4/clue/checkConflictWithSubjectAndBrand',
    data,
  }),
  // 线索转客户
  changeToCustomer: (url, data) => ajax({
    url,
    data,
  }),
  // 线索分配
  assignClue: (data) => ajax({
    url: '/crm/v4/clue/assign',
    data,
  }),
  // 线索领取
  clientClue: (data) => ajax({
    method: 'GET',
    url: '/crm/v4/clue/pull',
    data,
  }),
  // 校验某员工是否具有某部门的权限
  checkAssignAuth: (data) => ajax({
    url: '/crm/v4/clue/checkAssignAuth',
    data,
  }),
  // 根据机构ID查询结构
  getOrgName: (data) => ajax({
    url: `/crm/v4/org?orgID=${ data.orgID }`,
  }),
  // 获取当前账号是企业版， 还是畅捷版
  checkCurrentUserRole: (empID) => ajax({
    method: 'get',
    url: `/crm/v4/emp/type?empID=${ empID }`,
  }),
  // 提交定位签到
  commitLocationSignin: (data) => ajax({
    url: '/crm/v4/location/api/add',
    data,
  }),
  // 查询定位详情
  fetchLocationDetail: (data) => ajax({
    url: '/crm/v4/location/api/detail',
    data,
  }),
  // 查询签到定位记录
  fetchLocationList: (data) => ajax({
    url: '/crm/v4/location/api/list',
    data,
  }),
  // 查询自动分配线索的数据
  fetchOldClueInfo: (data) => ajax({
    url: '/sales/clue/queryClueByID',
    data,
  }),
  // 获取对话记录
  fetchTalkRecord: (data) => ajax({
    url: '/sales/clue/queryClueCallText',
    data,
  }),
  // 基于客户id获取线索列表
  fetchClueList: (data) => ajax({
    url: '/crm/v4/clue',
    data,
  }),
}
