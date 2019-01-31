/*
包含n个接口请求函数的模块
函数的返回值: promise对象
 */
import ajax from './ajax'
import {BASE_URL} from 'common/js/config.js'

export const ERR_OK = 0
// 首页获取需求&成果
export const getAllForHomePage = () => ajax(BASE_URL + '/api/ResourcePool/GetAllForHomePage')
// 短信登录
export const reqMsgLogin = (Mobile, SmsValidCode) => ajax(BASE_URL + '/api/Customer/SmsLogin', {Mobile, SmsValidCode}, 'POST')