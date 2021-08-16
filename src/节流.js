/**
 * 频繁触发的时候, 比如滚动或连续点击, 在指定的间隔时间内, 只会执行一次
 * 应用场景: 点击按钮, 监听滚动条, 懒加载等
 * 
 */

// 方案一 连续点击的话, 每过 wait 秒执行一次
export function throttle(fn, wait) {
    let bool = true;
    return function() {
        if(!bool) return;
        bool = false;
        setTimeout(() => {
            // fn() // fn中this指向window
            fn.call(this, arguments); // fn中this指向btn, 下面同理
            btn = true;
        }, wait);
    }
}

// 方案二 连续点击的话, 第一下点击会立即执行一次, 然后每过 wait 秒执行一次
export function throttlePlus(fn, wait) {
    let date = Date.now();
    return function() {
        let now = Date.now();
        // 用当前时间 减去 上一次点击的时间 和 传进来的时间作对比
        if(now - date > wait) {
            fn.call(this, arguments);
            date = now;
        }
    }
}

function sayThrottle() {
    console.log("节流成功！");
}

btn.addEventListener("click", throttlePlus(sayThrottle, 1000));

