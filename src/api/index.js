import axios from 'axios'

// import router from '../router'
import { Message } from 'element-ui'
const service = axios.create({
    // 设置超时时间
    timeout: 6000,
    baseURL: process.env.VUE_APP_BASE_URL
})
service.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
/**
 * 请求前拦截
 * 用于处理需要在请求前的操作
 */
const loading = null
service.interceptors.request.use(config => {
    // // 在请求先展示加载框
    // loading = Loading.service({
    //     text: '正在加载中......'
    // })
    console.log(config)
    const token = localStorage.getItem('token')
    if (token) {
        config.headers.Authorization = token
    }
    return config
}, (error) => {
    return Promise.reject(error)
})
/**
 * 请求响应拦截
 * 用于处理需要在请求返回后的操作
 */
service.interceptors.response.use(response => {
    // 请求响应后关闭加载框
    // if (loading) {
    //   loading.close()
    // }

    const responseCode = response.status
    // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据
    // 否则的话抛出错误
    if (responseCode === 200) {
        return Promise.resolve(response.data)
    } else {
        return Promise.reject(response)
    }
}, error => {
    // 请求响应后关闭加载框
    if (loading) {
        loading.close()
    }
    // 断网 或者 请求超时 状态
    if (!error.response) {
        // 请求超时状态
        if (error.message.includes('timeout')) {
            console.log('超时了')
            Message.error('请求超时，请检查网络是否连接正常')
        } else {
            // 可以展示断网组件
            console.log('断网了')
            Message.error('请求失败，请检查网络是否已连接')
        }
        return
    }
    // 服务器返回不是 2 开头的情况，会进入这个回调
    // 可以根据后端返回的状态码进行不同的操作
    // const responseCode = error.response.status

    return Promise.reject(error)
})

export default service
