/*
 * @Author: 魏瑶
 * @Email：weiyao@hualala.com
 * @Date: 2021-12-03 14:57:52
 * @Description: 实施接口
 * @FilePath: /mis-h5-fe/src/service/apis/support/index.js
 */
import applyFor from './apply-for' // 派工申请审核
import dispatch from './dispatch' // 派工池
import indexCard from './index-card' // 指标卡
export default {
  ...applyFor,
  ...dispatch,
  ...indexCard,
}