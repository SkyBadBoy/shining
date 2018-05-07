import axios from "axios"
import config from './config'
import apis from './apis'
import store from '../redux/index.js'
import { showPublicLoading, hidePublicLoading } from '../redux/actions'

// axios全局配置
const request = axios.create(config)

// 设置请求拦截
request.interceptors.request.use(function(config){

    return config
},function(err){
    return Promise.reject(err)
});

// 设置响应拦截
request.interceptors.response.use(function(response){
    if (response.config.showLoading) {
        store.dispatch(showPublicLoading())
        setTimeout(()=>{
            store.dispatch(hidePublicLoading())
        },500)

    }
    return response.data
},function(err){
    console.log('服务器错误,请联系管理员')
    return Promise.reject(err)
});


// 请求封装
export default {
    /**
     * post 请求封装
     * @param urlKey
     * @param params
     * @param showLoading  作用：是否显示请求 Loading
     * @returns {AxiosPromise}
     */
    post (urlKey, params, showLoading = true ) {
        return request({
            url: apis[urlKey],
            headers: {'appid': 'd9f4efdc2cf4753896896daf1fda8b2d', 'token':''},
            method: 'post',
            showLoading: showLoading,
            transformRequest: [function (data) {
            // Do whatever you want to transform the data
                let ret = ''
                for (let it in data) {
                    ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
                }
                return ret
            }],
            data: params,
        })
    },
    // get
    get (urlKey) {
        return request({
            method: 'get',
            url: apis[urlKey],
        })
    }
}
