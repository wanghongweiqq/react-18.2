/*
 * @Author: 王宏伟
 * @Email：wanghongwei@hualala.com
 * @Date: 2024-07-17 16:43:56
 * @Description: 工具类
 * @FilePath: /react-18.2/src/utils/index.js
 */

// 数据类型判断，data:各种类型的数据，返回:element、string、number、boolean、object……
const dataType = (data) => {
  if (data instanceof Element) {
    return 'element'
  }
  if (data instanceof File) {
    return 'file'
  }
  if (typeof data === 'symbol') {
    return 'symbol'
  }
  const map = {
    '[object String]': 'string',
    '[object Number]': 'number',
    '[object Boolean]': 'boolean',
    '[object Object]': 'object',
    '[object Array]': 'array',
    '[object Function]': 'function',
    '[object Date]': 'date',
    '[object RegExp]': 'regExp',
    '[object Undefined]': 'undefined',
    '[object Null]': 'null',
  }
  return map[Object.prototype.toString.call(data)]
}

// 过滤掉没有意义的属性，obj:需要过滤的对象
const filterParams = (obj) => {
  let params = {}
  const reg = /(^\s+)|(\s+$)/g
  for (let key in obj) {
    if (dataType(obj[key]) === 'string') {
      obj[key] = obj[key].replace(reg, '')
    }
    if (dataType(obj[key]) !== 'null' && dataType(obj[key]) !== 'undefined' && obj[key] !== '' && !(dataType(obj[key]) === 'array' && obj[key].length === 0) && !(dataType(obj[key]) === 'object' && Object.keys(obj[key]).length === 0)) {
      params[key] = obj[key]
    }
  }
  return params
}

// 过滤掉没有意义的属性并转化为字符串链接，obj:需要过滤的对象
const paramsToSearch = (obj) => {
  const params = filterParams(obj)
  const strArray = Object.keys(params).map((item, index) => {
    if(index === 0) {
      return `?${ item }=${ params[item] }`
    }else{
      return `&${ item }=${ params[item] }`
    }
  })
  return strArray.join('')
}

// 网址或者字符串获取参数，url:非必传，默认是网址
const searchToParams = (url) => {
  const str = decodeURIComponent(url || location.href)
  const urlParams = str.split('?')
  const query = {}
  if (urlParams[1]) {
    const paramsItem = urlParams[1].split('&')
    for (const i in paramsItem) {
      const arr = paramsItem[i].split('=')
      query[arr[0]] = arr[1]
    }
  }
  return query
}

export {
  dataType,
  filterParams,
  paramsToSearch,
  searchToParams,
}