function sayHello() {
    console.log('hello', this.name)
}

function log() {
    console.log.apply(null, arguments)
}
var obj = {
    name: 2,
    hello: sayHello
}

//  var a = {
//      a: 3,
//      alter: fn
//  }

obj.hello()
sayHello.call(obj)
//  console.log(obj.fn())

// console.log(['a', 'b'].slice())
// log(['a', 'b'].slice())

Math.min(5, 2, 1) // 等同于  Math.min.apply(null, [5, 2, 1]) 一个函数需要的参数为一个一个传的形式, 变成传一个数组的形式.
// apply 的作用就是 将[5, 2, 1] 变成 (5, 2 ,1)
log('this' + ' ' + obj.name, 'hello')

// call 借用别人的方法 ()第一个参数就是谁要借用, 第二个参数就是那个方法本身需要的参数.
var a = 'asdf'
var d = Array.prototype.map.call(a, function (v) {
    return v.toUpperCase() + ".";
}).join("");
log(d)

// tofixed方法可以指定小数的显示位数

function identify() {
    return this.name.toUpperCase();
}

function speak() {
    var greeting = "Hello, I'm " + identify.call(this);
    console.log(this);
}
var me = {
    name: "Kyle"
};
var you = {
    name: "Reader"
};
speak.call(me); // speack的this就是me
speak.call(you);
speak() // 这样执行函数spack的this就是window。
// 每一个函数都有call, apply, bind 三个方法。
// this是无法联通作用域的
function foo() {
    var a = 2;
    this.bar();
}
function bar() {
    console.log(this.a);
}
foo(); // ReferenceError: a is not defined

//this绑定的4条规则
// 1. 默认绑定
// 2.隐形绑定
// 3.显性绑定 bind会返回一个新的函数 同时bind是es5中的内容

