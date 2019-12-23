/**
 * Created by 86130 on 2019/12/14.
 */

import ajax from './ajax'
import url from './common'
const BASE_URL = process.env.API_ROOT
//使用ES6的分别暴露
//请求登录接口
export const reqLogin = (data) => ajax(`${BASE_URL}/${url.loginURL}`, data, 'POST')

//获取公司信息接口
export const reqGetCompanyInfo = () => ajax(`${BASE_URL}/${url.getCompanyInfo}`)

//注册公司与用户接口
export const submitCompanyAndUserInfo = (data) => ajax(`${BASE_URL}/${url.submitCompanyAndUserInfo}`, data, 'POST')

//删除公司名
export const deleteCompany = (data) => ajax(`${BASE_URL}/${url.deleteCompany}`, data, 'POST')