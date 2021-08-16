

/**
 * call
 * 改变this指向用的, 可以接收多个参数
 * 
 */
 Function.prototype.myCall = function(ctx) {
    ctx = ctx || window; // ctx 就是 obj
    let fn = Symbol();
    ctx[fn] = this; // this就是foo
    let result = ctx[fn](...arguments);
    delete ctx[fn];
    return result;
}
let obj = { name: 'CreatorRay' };
function foo() { return this.name };
// 就是把foo函数里的this指向, 指向obj
console.log(foo.myCall());

/**
 * 用Symbol是因为他是独一无二的, 避免和obj里的属性重名
 * 原理就是把foo添加到obj里, 执行foo拿到返回值, 再从obj里把foo删掉
 * 
 */


/**
 * apply
 * 原理同上, 只不过apply接受第二个参数是数组, 不支持第三个参数
 * 
 */

Function.prototype.myApply = function(ctx) {
    ctx = ctx || window;
    let fn = Symbol();
    ctx[fn] = this;
    let result;
    if(arguments[1]) {
        result = ctx[fn](...arguments[1]);
    }else {
        result = ctx[fn]();
    }
    delete ctx[fn];
    return result;
}


/**
 * bind
 * 
 */

Function.prototype.myBind = function(ctx) {
    const self = this;
    const fn = function() {};
    const bind = function() {
        const _this = this instanceof fn ? this : ctx;
        return self.apply(_this, [...args, ...arguments]);
    }
    fn.prototype = this.prototype;
    bind.prototype = new fn();
    return bind;
}

/**
 * bind 不会立即执行, 会返回一个函数
 * >>> 函数可以直接执行并且传参, 如foo.myBind(obj, 1)(2, 3), 所以需要
 * [...args, ...arguments] 合并参数
 * >>> 函数也可以new, 所以要判断原型 this instanceof fn
 * 
 */

/**
 * call、apply、bind的区别
 * >>> 都可以改变this指向
 * >>> call和apply会立即执行, bind不会, 而是返回一个函数
 * >>> call和bind可以接收多个参数, apply只能接收两个, 第二个是数组
 * >>> bind参数可以分多次传入
 * 
 */

