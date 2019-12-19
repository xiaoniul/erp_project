/*
 ajax请求函数模块
 返回值: promise对象(异步返回的数据是: response.data)
 */
import axios from 'axios'
import qs from 'qs'
import Vue from 'vue'

export default function ajax (url, data={}, type='GET', headers={}) {

  return new Promise(function (resolve, reject) {
    // 执行异步ajax请求
    let promise
    headers['token'] = Vue.prototype.GLOBAL.token
    console.log(headers)
    if (type === 'GET') {
      // 准备url query参数数据
      let dataStr = '' //数据拼接字符串
      Object.keys(data).forEach(key => {
        dataStr += key + '=' + data[key] + '&'
      })
      if (dataStr !== '') {
        dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
        url = url + '?' + dataStr
      }
      // 发送get请求
      promise = axios.get(url)
    } else {
      // 发送post请求
      // data = new FormData()
      // data.append()
      data = qs.stringify(data)
      promise = axios.post(url, data, {
        headers: headers
      })
      /*promise = axios({
        url: url,
        headers: headers,
        method: 'post',
        data: data
      })*/
    }
    promise.then(function (response) {
      // 成功了调用resolve()
      if(response.headers.token && response.headers.token != ''){
          Vue.prototype.GLOBAL.token = response.headers.token
      }
      resolve(response.data)
    }).catch(function (error) {
      //失败了调用reject()
      reject(error)
    })
  })
}

/*
 const response = await ajax()
 const result = response.data

 const resule = await ajax()
 */
