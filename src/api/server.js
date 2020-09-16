import axios from 'axios'
//取消请求
// let CancelToken = axios.CancelToken
axios.create({
  timeout: 15000, // 请求超时时间
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
})
// 添加请求拦截器
axios.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
axios.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么
    // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据
    // 否则的话抛出错误
    if (response.status === 200) {
      return response.data
    } else {
      return Promise.reject(response)
    }
  },
  function (error) {
    // 对响应错误做点什么
    return Promise.reject(error)
  }
)

export default axios
