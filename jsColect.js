// 获取当前时间 '2014-03-08'
var date = new Date();
var year = date.getFullYear();
var originMonth = date.getMonth() + 1;
var originDay = date.getDate();
var month = PrefixInteger(originMonth, 2)
var day = PrefixInteger(originDay, 2)
var create_date = year + '-' + month + '-' + day


console.log('here is a log')

// 数组方法some 一旦符合条件就返回true，否则返回false
var arr = [5, 7, 4, 6, 8]

var result = arr.some(function (ele, index, array) {
    return ele > 3 // true
})

var result2 = arr.some(function (ele, index, array) {
    return ele > 9// false
})

// 数组方法 every 语法同some一样， 所有满足条件返回true，否则false

// 数组方法 filter 语法同样，返回一个由所有符合条件元素组成的数组。

// 数组方法 map map不会改变原数组，会返回一个新的数组

// forEach 没有返回值 改变原数组


// 数组方法 sort 会返回改变后的数组，同时 原数组也会变化。
var data = [{name: "Zachary", age: 28}, {name: "Nicholas", age: 29}]
var sortResult = data.sort(function(a, b){
    return a.age - b.age
})