// 来个示例数组
let arr = [1, 1, "1", "1", true, true, "true", {}, {}, "{}", null, null, undefined, undefined];

// 方法一
let unique1 = Array.from(new Set(arr));
console.log(unique1);

// 方法二
let unique2 = arr => {
    let map = new Map();  // 或者用空对象 let obj = {} 利用对象属性不能重复的特性
    let brr = [];
    arr.forEach(item => {
        if(!map.has(item)) {  // 如果是对象的话就判断 !obj[item]
            map.set(item, true);  // 如果是对象的话就 obj[item] = true 其他一样
            brr.push(item);
        }
    })
    return brr;
}
console.log(unique2(arr));


// 方法三
let unique3 = arr => {
    let brr = [];
    arr.forEach(item => {
        // 使用indexOf 返回数组是否包含某个值, 没有就返回 -1, 有就返回下标
        if(brr.indexOf(item) === -1) brr.push(item);
        // 或者使用 includes 返回数组是否包含某个值, 没有就返回 false, 有就返回true
        // if(!brr.includes(item)) brr.push(item);
    })
    return brr;
}
console.log(unique3(arr));


// 方法四
let unique4 = arr => {
    // 使用filter返回符合条件的集合
    let brr = arr.filter((item, index) => {
        return arr.indexOf(item) === index;
    })
    return brr;
}
console.log(unique4(arr));


module.exports = {
    unique1,
    unique2,
    unique3,
    unique4
}

