/*
 * @Author: 程浩伦
 * @Email：chenghaolun@hualala.com
 * @Date: 2022-01-27 14:26:34
 * @LastEditTime: 2022-05-23 11:20:10
 * @LastEditors: Please set LastEditors
 * @Description: 通用正则
 * @FilePath: /mis-tfz-web-fe/src/common/regExp.js
 */

export const regExpSpace = /(^\s+)|(\s+$)/ // 前后空格
export const regExpMobile = /^1[0-9]{10}$/ // 手机号
export const regExpPhone = /^([0-9]{3,4}-)?[0-9]{7,8}(-[0-9]{2,6})?$/ // 座机
export const regExpEmail = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/ // 邮箱
export const regExpID = /^([0-9]{18}|[0-9]{17}x)$/i // 身份证
export const regExpName = /^[\u4e00-\u9fa5a-zA-Z0-9]+$/ // 姓名:支持输入中英文和数字组合
export const regExpChinese = /^[\u4e00-\u9fa5]+$/ // 中文：unicode编码，\u开头，接着是的四位16进制的字符编码
export const regExpThousands = /\d{1,3}(?=(\d{3})+$)/ // 从右到左，3个数字为一块（千分位分隔符）
export const regExp4Word = /(.{4}\B)/ // 从左到右，4个一区分
export const regExpNoNegativeInt = /^([1-9][0-9]*|0)$/ // 非负整数
export const regExpNoNegativeFloat2 = /^(([1-9][0-9]*)|0)(\.[0-9]{1,2})?$/ // 非负数字,最多两位小数，可以为0/0.00
export const regExpFloat2 = /^([1-9][0-9]*(\.[0-9]{1,2})?|0(\.(0[1-9]|[1-9][0-9]?)))$/ // 可含两位小数的正数，不能为0/0.00
export const regExp0To1Float4 = /^0\.[0-9]{1,4}$/ // 最多4位小数的0到1之间的数值，不能为0而小数位数又多的时候可以再结合Number(xxx)!==0判断
export const regExp0To99999Float2 = /^(([1-9][0-9]{0,4})|0)(\.[0-9]{1,2})?$/ // 0-99999(含0/0.00，99999)之间的数值，最多允许两位小数
export const regExpPassword = /[a-zA-Z]\w{5,17}$/ // 密码(以字母开头，长度在6~18之间，只能包含字母、数字和下划线)，(\w 元字符用于查找单词字符，单词字符包括：a-z、A-Z、0-9，以及_ (下划线) 字符。)
export const regExpStrongPassword = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,10}$/ // 强密码(必须包含大小写字母和数字的组合，不能使用特殊字符，长度在8-10之间)，（. 元字符用于查找单个字符，除了换行和行结束符，?=n 量词 匹配任何其后紧接指定字符串 n 的字符串）
export const regExpLicenseCode = /^[^_IOZSVa-z\W]{2}\d{6}[^_IOZSVa-z\W]{7,10}$/ // 统一社会信用码：统一代码由十八位的数字或大写英文字母（不适用I、O、Z、S、V）组成
