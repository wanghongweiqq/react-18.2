/*
 * @Author: 王宏伟
 * @Email：wanghongwei@hualala.com
 * @Date: 2024-04-07 15:38:55
 * @Description: actions-扁平化路由
 * @FilePath: /react-18.2/src/store/actions/flatRoute.js
 */
import { SET_FLAT_ROUTE } from '../types/flatRoute'

const setFlatRouteAction = (list) => ({ type: SET_FLAT_ROUTE, payload: list })

export{ setFlatRouteAction }