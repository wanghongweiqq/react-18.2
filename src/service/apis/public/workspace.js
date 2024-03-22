/**
 * @Author: 马铭扬
 * @Email: mamingyang@hualala.com
 * @Date: 2022-03-22 15:36:51
 * @Description: --
 * @FilePath: /mis-h5-fe/src/service/apis/public/workspace.js
 */

import ajax from '@/service/axios'

export default {
  // 人员-我的团队
  getTeamPersonnelList: (data) => ajax({
    url: '/dashboard/personnel/index/queryTeamInfoByType',
    data,
  }),
  // 人员-我的团队-人员详细信息
  getTeamPersonnelDetail: (data) => ajax({
    url: '/dashboard/personnel/index/queryPersonDetailInfo',
    data,
  }),
}
