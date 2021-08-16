/**
 * 连续点击的情况下不会执行, 只在最后一下点击过指定的秒数才会执行
 * 应用场景: 点击按钮, 输入框模糊查询, 词语联想等
 * 
 */

export function debounce(fn, delay) {
    let timeout = null;
    return function() {
        // 每一次点击判断有延迟执行的任务就停止
        if(timeout !== null) clearTimeout(timeout);
        // 否则就开始延迟任务
        timeout = setTimeout(fn, delay);
    }
}

function sayDebounce() {
    console.log("防抖成功! ");
}

// 示例
btn.addEventListener("click", debounce(sayDebounce, 1000));