/**
 * 解析url参数
 * 就是提取出url里的参数并转成对象
 * 
 */

 export function getUrlParams(url) {
    let reg = /([^?&=]+)=([^?&=]+)/g;
    let obj = {};
    url.replace(reg, function() {
        obj[arguments[1]] = arguments[2];
    })
    return obj;
}

let url = 'https://www.juejin.cn?a=1&b=2';
console.log(getUrlParams(url));