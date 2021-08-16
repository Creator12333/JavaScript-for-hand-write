// 创建一个父类
class Parent {
    constructor(props) {
        this.name = 'CreatorRay';
    }
}
// 创建一个继承自父类的子类
class Child extends Parent {
    // props是继承过来的属性, myAttr是自己的属性
    constructor(props, myAttr) {
        // 调用父类的构造函数, 相当于获得父类的this指向
        super(props);
    }
}

console.log(new Child().name);