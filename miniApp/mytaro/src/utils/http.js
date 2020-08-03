import Taro from '@tarojs/taro';

export const baseUrl = 'https://api.qfh5.cn';

export async function request(url, data={} , options={}) {
    const result = await Taro.request({
        url: baseUrl + url,
        ...options,
        data
    });

    return result.data;
}

export function get(url,data,options={}) {
    options.method = 'get';
    return request(url,data,options)
}

export function post() {
    options.method = 'post';
    return request(url,data,options)
}
export function put() {
    options.method = 'put';
    return request(url,data,options)
}
export function patch() {
    options.method = 'patch';
    return request(url,data,options)
}
export function remove() {
    options.method = 'delete';
    return request(url,data,options)
}
export default {
    request,
    post,
    get,
    remove,
    put
}

// import http,{request,get,post} from '../utils/http';