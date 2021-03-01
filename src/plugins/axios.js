//1.引入axios模块&字符串处理模块
import axios from 'axios'

//2.全局配置（后期请求接口，实际请求地址baseURL+url）
axios.defaults.baseURL = 'https://www.zjylz.com/api/' // 测试接口
axios.defaults.headers['Content-Type'] = 'application/json;charset=UTF-8'



// 3.全局处理（错误统一处理，推荐发送邮件报警）
// request 请求
// response 响应
// 作用：数据交给 then处理前 先交给下面这个方法处理

/**
 * Author: jhj
 * request 请求 config 一定要做请求
 * response 响应 
 */

// 请求拦截
axios.interceptors.request.use(
    config => {
      // config.params = {
      //   Token:'38fd83454a6f82f9c080d045e96edb3f1b6636cb8bc433db5df3321fc06ae9715ac795973efaf8c6a3159d5859961ad7952fa10e673361d0ee2f9232'
      // }

      let data = config.data || config.params || {};

      data.Token = 'd8112188727c8a8639bb992be8ad3e08c1516ae4a8bc9e3b502f77063339a5bb2b80355b4f4f58cc7dc65d13db171026391aa8b40ccb633166ee6f43'
      console.log('ddddd----',config)
      return config
    },
    error => {
        return Promise.reject(error)
    }
)

//响应拦截
axios.interceptors.response.use(
    response => {
        return Promise.resolve(response)
            // return Promise.resolve(response.data)
    },
    error => {
        // 对响应错误做点什么
        // switch (error.response.status) {
        //     case 401:
        //         // Message.error('身份信息过期,请重新登录')
        //         console.log('身份信息过期,请重新登录')
        //         break
        //     case 400:
        //         console.log('接口不存在')
        //         break
        //     case 404:
        //         console.log('接口不存在')
        //         break
        //     default:
        //         console.log('接口不存在')
        // }
        return Promise.reject(error)
    }
)