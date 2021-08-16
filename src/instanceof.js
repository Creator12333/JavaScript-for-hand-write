/**
 * instanceof
 * 接受两个参数, 判断第二个参数是不是在第一个参数的原型链上
 * 
 */

export function myInstanceof(left, right) {
    // 获取实例对象的原型, 也就是left._proto_
    let left = Object.getPrototypeOf(left);
    // 获取构造函数的原型
    let prototype = right.prototype;
    // 判断构造函数的原型是不是在实例的原型链上
    while(true) {
        // 原型链一层层向上找, 都没找到最后会为null
        if(left === null) return false;
        if(prototype === left) return true;
        // 没找到就把上一层拿过来, 继续循环, 再向上一层找
        left = Object.getPrototypeOf(left);
    }
}