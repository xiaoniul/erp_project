/**
 * Created by 86130 on 2019/12/14.
 */

import ajax from './ajax'
import url from './common'
const BASE_URL = process.env.API_ROOT
//使用ES6的分别暴露
export const reqLogin = (data) => ajax(`${BASE_URL}/${url.loginURL}`, data, 'POST')

export const reqGetCompanyInfo = () => ajax(`${BASE_URL}/${url.getCompanyInfo}`)
