/*
ajax请求函数模块
返回值: promise对象(异步返回的数据是: response.data)
 */
import axios from 'axios'
import qs from 'qs'
import {Modal} from 'antd'
const baseURL = 'https://www.easy-mock.com/mock/5c74e32d76337f793d553e1b/ofo'
export default function ajax (options) { // options {type,url,data,loading}
  if (options.loading !== false) {
    document.getElementById('ajaxLoading').style.display = 'block'
  }
  return new Promise(function (resolve, reject) {
    // 执行异步ajax请求
    let promise
    if (options.type.toUpperCase() === 'GET') {
      promise = axios.get(options.url, {
        params: options.data,
        // timeout: 5000,
        baseURL
      })
    } else {
      // 发送post请求
      // promise = axios.post(url, data)
      promise = axios({
        method: 'post',
        url: options.url,
        // timeout: 5000,
        baseURL,
        data: qs.stringify(options.data) // qs.stringify({ a: ['b', 'c', 'd'] }, { indices: false }); 如果里面放了数组之类的 加上  { indices: false } 去qs文档看
        // headers: {
        //   // 'Content-Type': 'application/json'
        //   'Content-Type': 'application/x-www-form-urlencoded' // 有时候要配置这个。
        // }
      })
    }
    promise.then(function (response) {
      if (options.loading !== false) {
        document.getElementById('ajaxLoading').style.display = 'none'
      }
      // 成功了调用resolve()
      let res = response.data
      if (res.code === 0) {
        resolve(res)
      } else {
        Modal.info({
          title: '提示',
          content: res.message
        })
      }
    }).catch(function (error) {
      // 失败了调用reject()
      console.log('reject')
      reject(error)
    })
  })
}
