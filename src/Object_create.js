export function createObj(obj) {
    function fn(){};
    fn.prototype = obj;
    return new fn();
}
/**
 * 创建一个空对象并修改原型, 一般传个null进去, 这样创建出来没有
 * 原型的对象不会被原型污染, 或者传要继承的对象原型
 * 
 */
