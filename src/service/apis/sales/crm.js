/**
 * @name CRM-APIs
 * @author 程浩伦
 * @desc 客户关系管理 APIs
 */
import ajax from '@/service/axios'
export default {
  // 查询拜访对象
  fetchContactList: (data) => ajax({
    url: 'sales/shop/queryGroupInfoByGroupID_V2',
    data,
  }),
  // 提交拜访记录
  commitVisitRecord: (data) => ajax({
    url: 'sales/shop/addGroupVisit',
    data,
  }),
  // 拜访详情列表
  fetchVisitList: (data) => ajax({
    method: 'POST',
    url: '/sales/crm/v3/visit/list',
    data,
  }),
  // 创建拜访计划
  createPlan: (data) => ajax({
    url: '/sales/crm/v3/visit/plan/create',
    data,
  }),
  // 创建拜访计划
  createRecord: (data) => ajax({
    url: '/sales/crm/v3/visit/record/create',
    data,
  }),
  // 查询拜访记录详情
  fetchRecordById: (data) => ajax({
    url: '/sales/crm/v3/visit/record/get',
    data,
  }),
  // 查询拜访计划详情
  fetchPlanById: (data) => ajax({
    url: '/sales/crm/v3/visit/plan/get',
    data,
  }),
  // 编辑拜访计划
  editPlan: (data) => ajax({
    url: '/sales/crm/v3/visit/plan/modify',
    data,
  }),
  // 编辑拜访记录
  editRecord: (data) => ajax({
    url: '/sales/crm/v3/visit/record/modify',
    data,
  }),
  // 完成拜访
  completeVisit: (data) => ajax({
    url: '/sales/crm/v3/visit/plan/complete',
    data,
  }),
  // 获取跟进阶段日志
  fetchProcessLog: (data) => ajax({
    url: '/sales/crm/v3/process/change/log',
    data,
  }),
  // 获取跟进阶段信息
  fetchProcessInfo: (data) => ajax({
    url: '/sales/crm/v3/process/get',
    data,
  }),
  // 修改跟进阶段信息
  updateProcessInfo: (data) => ajax({
    url: '/sales/crm/v3/process/modify',
    data,
  }),
  // 评论接口
  fetchCommentList: (empID, visitId, pageNo = 1, pageSize = 200) => ajax({
    url: '/hllopen/workorder/v1/workorder/openWorkOrderList.svc',
    data: {
      version: '2.0', // 固定值
      empID, // 填写评论的人员id
      workOrderTempID: '20220506142812261190', // 固定值
      dataJsonSearch: `[{"conditionType": "eq","key": "dataJson.visitId","value": "${ visitId }"}]`,
      sort: '[{"fieldName": "dataJson.createTime","direction": "desc"}]', // 固定（时间倒序）
      pageSize,
      pageNo,
    },
    appKey: 'CRM_VISIT_EVALUATION',
  }),
  // 创建评论接口
  createComment: (payload, createEmpID) => {
    return ajax({
      url: '/hllopen/workorder/v1/workorder/createWorkOrder.svc',
      data: {
        version: '2.0', // 固定值
        subject: 'CRM拜访评价', // 暂时固定值
        workOrderTempID: '20220506142812261190', // 固定值
        priorityLevel: 'Workorder_priority_low', // 固定值
        body: 'CRM拜访评价', // 暂时固定
        isOrderEnd: '02', // 固定值
        createEmpID, // 添加评论的人员ID
        workOrderSource: 'App', // 固定值
        businessType: 'WORK_ORDER_BUSINESS_TYPE_7', // 固定值
        customerType: 'O', // 固定值
        dataJson: payload,
      },
      appKey: 'CRM_VISIT_EVALUATION',
    })
  },
  // 获取商机列表
  fetchOppportunity: (data) => ajax({
    url: '/crm/v4/opportunity/query',
    data,
  }),
  // 获取记录&计划数量
  fetchVisitCount: (data) => ajax({
    url: '/sales/crm/v3/visit/count',
    data,
  }),
  // 评论发送小蜜消息
  senIMWhenCreateComment: (data) => ajax({
    url: '/crm/v4/common/sendIM',
    data,
  }),
}