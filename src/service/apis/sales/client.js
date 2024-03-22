/*
 * @Author: 王赢辉
 * @Email：wangyinghui@hualala.com
 * @Date: 2021-11-20 17:47:47
 * @Description:客户相关
 * @FilePath: /mis-h5-fe/src/service/apis/sales/client.js
 */
import ajax from '@/service/axios'
export default {
  // 客户报备须知
  queryReadReportingKnow: () => ajax({
    url: '/sales/shop/queryReadReportingKnow',
  }),
  // 客户添加/编辑时审核（保存）
  clientEdit: (data) => ajax({
    url: data.isAdd ? '/sales/shop/addGroupInfo_V5.1' : '/sales/shop/updateGroupInfo_V5',
    data,
  }),
}

