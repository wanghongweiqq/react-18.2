/*
 * @Author: 王宏伟
 * @Email: wanghongwei@hualala.com
 * @Date: 2021-04-15 20:01:16
 * @Description: 首页指标卡相关接口-公共
 * @FilePath: /mis-h5-fe/src/service/apis/home/public.js
 */
import ajax from '@/service/axios'
export default {
  // 查询首页内容
  queryAppWorkbenchHomePage: () => ajax({
    url: '/dashboard/workbench/app/queryAppWorkbenchHomePage',
  }),
  // 查询可供选择的指标卡
  queryIndexesCanBeSelected: (data) => ajax({
    url: '/dashboard/workbench/app/queryIndexesCanBeSelected',
    data,
  }),
  // 查询已选指标卡
  querySelectedIndexes: (data) => ajax({
    url: '/dashboard/workbench/app/querySelectedIndexes',
    data,
  }),
  // 保存已选指标卡
  saveSelectedIndexes: (data) => ajax({
    url: '/dashboard/workbench/app/saveSelectedIndexes',
    data,
  }),
  // 查询已选的常用功能
  queryCommonFunctions: (data) => ajax({
    url: '/dashboard/workbench/app/queryCommonFunctions',
    data,
    showLoading: false,
  }),
  // 保存已选的常用功能
  saveCommonFunctions: (data) => ajax({
    url: '/dashboard/workbench/app/saveCommonFunctions',
    data,
  }),

  // 查询个人指标卡中的指标项
  queryIndexItem: (data) => ajax({
    url: '/dashboard/workbench/userIndexItem/queryIndexItem',
    data,
    showError: false,
    showLoading: false,
  }),

  // 查询支持的指标项，目前只供开发人员参照
  queryCanItem: (data) => ajax({
    url: '/dashboard/common/action/code',
    data,
    method: 'get',
  }),

  // 保存个人指标卡中的指标项
  saveIndexItem: (data) => ajax({
    url: '/dashboard/workbench/userIndexItem/saveIndexItem',
    data,
  }),
  // 查询指标项标签说明
  queryIndexItemMetaInfo: (data) => ajax({
    url: '/dashboard/workbench/userIndexItem/queryIndexItemMetaInfo',
    data,
    showLoading: false,
  }),
  // 查询指标项统计数值
  queryIndexItemValueList: (data) => ajax({
    url: '/dashboard/common/index/queryIndexData',
    data,
    showLoading: false,
  }),
  // 获取审批数量
  applyList: (data) => ajax({
    url: '/check/applyData/applyList',
    data,
    showLoading: false,
  }),
  // 获取公告数量
  queryUnreadCountByNoticeType: () => ajax({
    url: '/kb/notice/queryUnreadCountByNoticeType',
    showLoading: false,
  }),
  // 获取未处理工单、实施、售前数量
  queryWaitCount: () => ajax({
    url: '/check/publicData/queryWaitCount',
    showLoading: false,
  }),

}
