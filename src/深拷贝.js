import { unique4 } from "./数组去重";

// 用while写一个通用的遍历
export function myEach(array, iterator) {
    let index = -1;
    const length = array.length;
    while(++index < length) {
        iterator(array[index], index);
    }
    return array;
}

export function myClone(target, map = new WeakMap()) {
    // 引用类型才能继续深拷贝
    if(target instanceof Object) {
        const isArray = Array.isArray(target);
        // 克隆对象和数组类型
        let cloneTarget = isArray ? [] : {};
        // 防止循环引用
        if(map.get(target)) {
            // 有拷贝记录就直接返回
            return map.get(target);
        }
        // 没有就存储拷贝记录
        map.set(target, cloneTarget);

        // 是对象就拿出同级的键集合, 返回是数组格式
        const keys = isArray ? undefined : Object.keys(target);
        // value是对象的key或者数组的值 key是下标
        myEach(keys || target, (value, key) => {
            if(keys) {
                // 是对象就把下标换成value
                key = value;
            }
            // 递归
            cloneTarget[key] = myClone(target[key], map);
        })
        return cloneTarget;
    }else {
        return target;
    }
}
